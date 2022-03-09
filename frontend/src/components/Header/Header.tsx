import styles from './Header.module.scss';
import Button from "@components/Button/Button";
import {useAuth} from "@store/auth/store";
import {useCallback} from "react";
import {signOut} from "@store/auth/actions";
import classes from 'classnames';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const { state, dispatch } = useAuth();

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch])

  return (
    <div className={classes(styles.header, className)}>
      <div className={styles.content}>
        <div className={styles.logo}>1million</div>
        <div className={styles.actions}>
          { state.isSignedIn && (
            <Button onClick={handleSignOut}>Sign out</Button>
          )}
          { !state.isSignedIn && (
            <>
              <Button to="/sign-in">Sign in</Button>
              <Button to="/sign-up">Sign up</Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
};

export default Header;
