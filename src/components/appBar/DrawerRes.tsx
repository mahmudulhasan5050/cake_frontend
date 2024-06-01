import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from '../../features/auth/authSlice';

interface LandingPageButtonProps {
  landingPageButton: boolean
}

//.../Header.tsx
const DrawerRes = ({landingPageButton}:LandingPageButtonProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isLoggedStatus = useAppSelector((state) => state.auth.authInfo);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => navigate('/')}>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {isLoggedStatus.isLoggedIn && (
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText onClick={() => navigate('/myorders')}>
                  My Orders
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          )}
          {isLoggedStatus.admin && (
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText onClick={() => navigate('/userdetails')}>
                  User Details
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          )}
          {isLoggedStatus.admin && (
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText onClick={() => navigate('/orderdetails')}>
                  Order Details
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          )}
          {!isLoggedStatus.isLoggedIn ? (
            <Button
              sx={{ marginLeft: '1em' }}
              variant='contained'
              onClick={() => {
                navigate('/auth');
                setOpenDrawer(false);
              }}
            >
              Sign In
            </Button>
          ) : (
            <Button
              sx={{ marginLeft: '1em' }}
              variant='contained'
              onClick={() => {
                dispatch(logout());
                setOpenDrawer(false);
                navigate('/');
              }}
            >
              Logout
            </Button>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: landingPageButton ? 'black' : 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerRes;
