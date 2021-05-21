import { makeOperation } from '@urql/core';
import { authExchange } from '@urql/exchange-auth';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { cacheExchange, createClient, dedupExchange, fetchExchange } from 'urql';
import { firebase } from '../../firebase';
import { signOut } from '../component/AuthReducer/FirebaseAuthMethod';

interface MyToken {
  name: string;
  exp: number;
}

export const urqlClient = createClient({
  url: `${process.env.GRAPHQL_URL}`,
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange({
      getAuth: async ({ authState, mutate }: any) => {
        // for initial launch, fetch the auth state from storage (local storage, async storage etc)
        const token = Cookies.get('token');
        if (!authState) {
          if (token) {
            return { token };
          }
          return null;
        }

        // refresh token
        const decoded = jwt_decode<MyToken>(token as any);
        if (typeof decoded.exp !== 'undefined' && decoded.exp < Date.now() / 1000) {
          const user = firebase.auth().currentUser;
          if (user) {
            await user.getIdToken();
          }
        }

        //auth has gone wrong. Clean up and redirect to a login page
        Cookies.remove('token');
        await signOut();
      },
      addAuthToOperation: ({ authState, operation }: any) => {
        // the token isn't in the auth state, return the operation without changes
        if (!authState || !authState.token) {
          return operation;
        }

        // fetchOptions can be a function (See Client API) but you can simplify this based on usage
        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};

        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `Bearer ${authState.token}`,
            },
          },
        });
      },
    }),
    fetchExchange,
  ],
});
