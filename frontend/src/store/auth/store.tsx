import React, {createContext, useContext, useReducer} from 'react';
import {SIGN_IN, SIGN_OUT} from './actions';

interface AuthState {
  isSignedIn: boolean;
}

const initialState: AuthState = {
  isSignedIn: false
};

interface AppContext {
  state: AuthState;
  dispatch: React.Dispatch<unknown>
}

const store = createContext(null);
const { Provider } = store;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state: AuthState, action): AuthState => {
    switch(action.type) {
      case SIGN_IN:
        return { ...state, isSignedIn: true };
      case SIGN_OUT:
        return { ...state, isSignedIn: false };
      default: {
        return state;
      }
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAuth = (): AppContext => {
  return useContext(store);
}
