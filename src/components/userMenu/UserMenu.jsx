import { useSelector } from 'react-redux';
import { logoutUser } from '../../redux/operations/operations';
import { selectUserData } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import { Button, Box, Typography } from '@mui/material';

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
          <Typography
            variant="body1"
            component="p"
            sx={{ marginRight: '10px', fontWeight: 'bold', textAlign: 'centr' }}
          >
            {userData.name}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleLogout}
            sx={{
              textTransform: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
            }}
          >
            Logout
          </Button>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
