import React, {useCallback, useState} from 'react';
import {useAuth} from "@store/auth/store";
import {Navigate, useLocation} from "react-router-dom";
import {signUp} from "@store/auth/actions";
import styles from "../SignIn/SignInPage.module.scss";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

const SignUpPage = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { state, dispatch } = useAuth();
  const location = useLocation();

  const handleSubmit = useCallback(() => {
    dispatch(signUp({ name, email, password }))
  }, [dispatch, email, name, password]);

  if (state.isSignedIn) {
    const from = (location.state as Record<string, string>)?.path;
    return <Navigate to={from || '/dashboard'} state={{ path: '/' }} />
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h3 className={styles.title}>Sign up</h3>
        <form className={styles.form}>
          <Input onChange={e => setName(e.target.value)}
                 placeholder="Name"
                 className={styles.formControl} />
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
}

export default SignUpPage;
