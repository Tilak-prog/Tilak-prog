import { useReducer } from 'react';

export interface IState {
  isLoggedIn: boolean;
  user: object;
  loading: boolean;
}

export interface IDispatch {
  type: string;
  payload?: any;
}

const initialState = {
  isLoggedIn: false,
  user: {},
  loading: false,
};

function reducer(state: IState, { type, payload }: IDispatch): IState {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: payload,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    default:
      return state;
  }
}

export const useAuthReducerValue = () => useReducer(reducer, initialState);
