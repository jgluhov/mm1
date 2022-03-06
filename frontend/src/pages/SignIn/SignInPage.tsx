import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Segment color={'grey'}>
    <Grid textAlign='center' style={{ height: '100vh' }}  verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          Sign-in to your account
        </Header>
        <Form size='large'>
          <Segment piled>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button fluid color={'blue'} size='large' style={{ marginBottom: '15px' }}>
              Login
            </Button>

            New to us? <a href='#'>Sign Up</a>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </Segment>
)

export default LoginForm
