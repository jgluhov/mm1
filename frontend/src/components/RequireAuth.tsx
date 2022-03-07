import {useAuth} from '@store/auth/store';
import {Navigate, useLocation} from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { state } = useAuth();
  const location = useLocation();

  return state.isSignedIn === true
    ? children
    : <Navigate to="/sign-in" replace state={{ path: location.pathname }} />;
}
