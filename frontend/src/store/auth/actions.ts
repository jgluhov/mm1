export const SIGN_IN = 'auth/sign-in';
export const SIGN_OUT = 'auth/sign-out';
export const SIGN_UP = 'auth/sign-up';

interface Action<T = unknown> {
  type: string;
  payload?: T;
}

export const signUp = (payload): Action<{ name: string, email: string, password: string }> => ({ type: SIGN_UP, payload });
export const signIn = (payload): Action<{ email: string, password: string }> => ({ type: SIGN_IN, payload });
export const signOut = (): Action => ({ type: SIGN_OUT });
