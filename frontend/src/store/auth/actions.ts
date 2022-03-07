export const SIGN_IN = 'auth/sign-in';
export const SIGN_OUT = 'auth/sign-out';

interface Action {
  type: string;
}

export const signIn = (): Action => ({ type: SIGN_IN });
export const signOut = (): Action => ({ type: SIGN_OUT });
