import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Visibility,
  Icon,
  Sidebar,
  Image
} from 'semantic-ui-react'
import React, {Fragment, useCallback, useState} from 'react';
import { Link } from 'react-router-dom';
import { Media, MediaContextProvider } from '@providers/MediaProvider';
import {useAuth} from '@store/auth/store';
import {signOut} from '@store/auth/actions';

interface ContainerProps {
  children: React.ReactNode
}

const HomepageHeading = ({ mobile = false }) => (
  <Container text>
    <Header
      as='h1'
      content='One million millionaires'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

const MobileContainer = ({ children }: ContainerProps) => {

  const [ sidebarOpened, setSidebarOpened ] = useState(false);
  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true)

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
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Link to="/sign-in">
                    <Button as='span' inverted>
                      Log in
                    </Button>
                  </Link>
                  <Link to="/sign-up">
                    <Button as='span' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Link>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

const DesktopContainer = ({ children }: ContainerProps) => {
  const { state, dispatch } = useAuth();
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

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
          style={{ minHeight: 700, padding: '1em 0em' }}
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
                { !state.isSignedIn && (
                  <>
                    <Link to="/sign-in">
                      <Button as="span" inverted={!fixed} style={{ fontSize: '16px' }}>
                        Sign in
                      </Button>
                    </Link>
                    <Link to="/sign-up">
                      <Button as="span" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em', fontSize: '16px' }}>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                { state.isSignedIn && (
                  <Button as="button" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} onClick={handleSignOut}>
                    Sign Out
                  </Button>
                )}
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
}

export function ResponsiveContainer({ children }: ContainerProps) {
  return (
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  )
}

export default function HomePage() {
  return (
    <ResponsiveContainer>
      <Fragment />
    </ResponsiveContainer>
  )
}
