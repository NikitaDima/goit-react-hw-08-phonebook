import { useSelector } from 'react-redux';
import { logoutUser } from '../../redux/operations/operations';
import { selectUserData } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      {userData.isLoggedIn && (
        <Box display="flex" alignItems="center">
          <p style={{ marginRight: '10px' }}>{userData.name}</p>
          <Button color="inherit" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
