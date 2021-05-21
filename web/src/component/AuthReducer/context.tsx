import Cookies from 'js-cookie';
import React, { createContext, useContext, useEffect } from 'react';
import { firebase } from '../../../firebase';
import { updateUser } from './actions';
import { IDispatch, IState, useAuthReducerValue } from './reducer';

interface Props {
  children: any;
}

interface ContextProps {
  state: IState;
  dispatch: ({ type, payload }: IDispatch) => void;
}

const Context = createContext({} as ContextProps);
export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useAuthReducerValue();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);

  // listen for token changes
  // write new token as a cookie
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user: any) => {
      if (!user) {
        Cookies.remove('token');
        Cookies.set('token', '');
      }
      const token = await user?.getIdToken();
      dispatch(
        updateUser({ id: user?.uid, profilePicture: user?.photoURL, name: user?.displayName, email: user?.email }),
      );
      Cookies.remove('token');
      Cookies.set('token', token);
    });
  }, []);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useAuthValue = () => useContext(Context);
