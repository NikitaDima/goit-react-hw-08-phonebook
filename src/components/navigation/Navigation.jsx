import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import UserMenu from '../userMenu/UserMenu';
import { selectUserData } from '../../redux/selectors/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserData);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: '#333', boxShadow: 'none' }}
    >
      <Toolbar>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem component={NavLink} to="/" onClick={handleMenuClose}>
            Home
          </MenuItem>
          {isLoggedIn.isLoggedIn ? (
            <MenuItem
              component={NavLink}
              to="/contacts"
              onClick={handleMenuClose}
            >
              Contacts
            </MenuItem>
          ) : (
            <>
              <MenuItem
                component={NavLink}
                to="/register"
                onClick={handleMenuClose}
              >
                Register
              </MenuItem>

              <MenuItem
                component={NavLink}
                to="/login"
                onClick={handleMenuClose}
              >
                Login
              </MenuItem>
            </>
          )}
        </Menu>
        <UserMenu />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: 'right' }}
        >
          Phonebook
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
