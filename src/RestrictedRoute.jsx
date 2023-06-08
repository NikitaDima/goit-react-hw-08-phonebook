import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserData } from './redux/selectors/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserData);
  return isLoggedIn.isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
