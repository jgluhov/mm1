import {Button, Container, ContainerProps, Icon, Image, Menu, Segment, Sidebar, Visibility} from 'semantic-ui-react';
import React, {useCallback, useState} from 'react';
import {Media, MediaContextProvider} from '@providers/MediaProvider';
import {useAuth} from '@store/auth/store';
import {signOut} from '@store/auth/actions';
import {Link, Navigate} from "react-router-dom";

const MobileContainer = ({ children }: ContainerProps) => {
  const { state, dispatch } = useAuth();
  const [ sidebarOpened, setSidebarOpened ] = useState(false);
  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true)

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  if (!state.isSignedIn) {
    return <Navigate to={'/'} />
  }

  return (
    <Media at='mobile'>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a'>Sign out</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 60, padding: '0.5em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as="button" inverted style={{ marginLeft: '0.5em' }} onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

const DesktopContainer = ({ children }: ContainerProps) => {
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
      {children}
    </Media>
  )
}

export function ResponsiveContainer({ children }: ContainerProps) {
  return (
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  )
}

export default function DashboardPage() {
  return (
    <ResponsiveContainer>
      <div>
        Dashboard page
      </div>
    </ResponsiveContainer>
  )
}

