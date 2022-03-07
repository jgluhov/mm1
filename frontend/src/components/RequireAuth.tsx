import {useAuth} from '@store/auth/store';
import {Navigate, useLocation} from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { state } = useAuth();
  const location = useLocation();
  const to = (location.state as Record<string, string>)?.path;

  return state.isSignedIn === true
    ? children
    : <Navigate to={to || '/sign-in'} replace state={{ path: location.pathname }} />;
}
