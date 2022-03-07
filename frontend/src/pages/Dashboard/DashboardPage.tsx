import {Button, Container, Image, Menu, Segment, Visibility} from 'semantic-ui-react';
import React, {useCallback, useState} from 'react';
import { Media } from '@providers/MediaProvider';
import {useAuth} from '@store/auth/store';
import {signOut} from '@store/auth/actions';
import {Link, Navigate} from "react-router-dom";

const DashboardPage = () => {
  const [fixed, setFixed] = useState(false);
  const { state, dispatch } = useAuth();

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  if (!state.isSignedIn) {
    return <Navigate to={'/'} />
  }

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Media greaterThan='mobile'>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 60, padding: '0.5em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <Image src='/logo.png' style={{ height: 50}} />
              </Link>

              <Menu.Item position='right'>
                <Button as="button" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} onClick={handleSignOut}>
                  Sign Out
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    </Media>
  )
}

export default DashboardPage;
