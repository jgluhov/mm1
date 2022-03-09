import React, {useCallback, useState} from 'react'
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '@store/auth/store';
import {signIn} from '@store/auth/actions';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { state, dispatch } = useAuth();
  const location = useLocation();

  const handleSubmit = useCallback(() => {
    dispatch(signIn({ email, password }))
  }, [dispatch, email, password]);

  if (state.isSignedIn) {
    const from = (location.state as Record<string, string>)?.path;
    return <Navigate to={from || '/dashboard'} state={{ path: '/' }} />
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h3 className={styles.title}>Sign in</h3>
        <form className={styles.form}>
          <Input type="email"
                 onChange={e => setEmail(e.target.value)}
                 placeholder="E-mail"
                 className={styles.formControl} />
          <Input type="password"
                 onChange={e => setPassword(e.target.value)}
                 placeholder="Password"
                 className={styles.formControl} />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
    </div>
  )
};

export default SignInPage
