import React, {useCallback} from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {Link, Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '@store/auth/store';
import {signIn} from '@store/auth/actions';

const SignInPage = () => {
  const { state, dispatch } = useAuth();
  const location = useLocation();

  const handleSubmit = useCallback(() => {
    dispatch(signIn())
  }, [dispatch]);

  if (state.isSignedIn) {
    const from = (location.state as Record<string, string>)?.path;
    return <Navigate to={from || '/dashboard'} state={{ path: '/' }} />
  }

  return (
    <Segment color={'grey'}>
      <Grid textAlign='center' style={{ height: '100vh' }}  verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Sign-in to your account
          </Header>
          <Form size='large'>
            <Segment piled>
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' autoComplete='username' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                autoComplete='current-password'
              />

              <Button fluid color={'blue'} size='large' style={{ marginBottom: '15px' }} onClick={handleSubmit}>
                Sign-In
              </Button>

              New to us? <Link to='/sign-up'>Sign up</Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  )
};

export default SignInPage
