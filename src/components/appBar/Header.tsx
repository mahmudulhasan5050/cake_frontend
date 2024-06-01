import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';

import CakeIconn from '../../assets/images/aaa.png';
import DrawerRes from './DrawerRes';
import { logout } from '../../features/auth/authSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

interface LandingPageButtonProps {
  landingPageButton: boolean;
}

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 2,
});

const Header = ({ landingPageButton }: LandingPageButtonProps) => {
  const isLoggedStatus = useAppSelector((state) => state.auth.authInfo);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [tabIndicator, setTabIndicator] = useState(1);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  //tabs indicator
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndicator(newValue);
  };

  return (
    <TransparentAppBar sx={{ color: landingPageButton ? 'black' : 'white' }}>
      <Toolbar>
        <Box sx={{ margin: '0px', width: '90px', padding: '2px 0px 0px 2px' }}>
          <img src={CakeIconn} alt='cake' width={'100%'} />
        </Box>
        {mdDown ? (
          <DrawerRes landingPageButton={landingPageButton} />
        ) : (
          <>
            <Tabs
              textColor='inherit'
              value={tabIndicator}
              onChange={handleChange}
              indicatorColor='secondary'
              sx={{ marginLeft: 'auto' }}
            >
              <Tab
                label='Home'
         
                onClick={() => navigate('/')}
                sx={{
                  fontWeight: 700,
                  letterSpacing: 6,
                  display: landingPageButton ? undefined : 'none',
                }}
              />

              {isLoggedStatus.isLoggedIn && (
                <Tab
                  label='My Orders'
            
                  onClick={() => navigate('/myorders')}
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 4,
                    display: landingPageButton ? undefined : 'none',
                  }}
                />
              )}

              {isLoggedStatus.admin && (
                <Tab
                  label='Cake Details'
         
                  onClick={() => navigate('/cakedetails')}
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 6,
                    display: landingPageButton ? undefined : 'none',
                  }}
                />
              )}
              {isLoggedStatus.admin && (
                <Tab
                  label='User Details'
        
                  onClick={() => navigate('/userdetails')}
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 6,
                    display: landingPageButton ? undefined : 'none',
                  }}
                />
              )}
              {isLoggedStatus.admin && (
                <Tab
                  label='Order Details'
          
                  onClick={() => navigate('/orderdetails')}
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 6,
                    display: landingPageButton ? undefined : 'none',
                  }}
                />
              )}
            </Tabs>
            {!isLoggedStatus.isLoggedIn ? (
              <Button
                sx={{
                  marginLeft: '1em',
                  letterSpacing: 2,
                  display: landingPageButton ? undefined : 'none',
                }}
                variant='contained'
                onClick={() => navigate('/auth')}
              >
                Sign In
              </Button>
            ) : (
              <Button
                sx={{
                  marginLeft: '1em',
                  display: landingPageButton ? undefined : 'none',
                }}
                variant='contained'
                onClick={() => {
                  dispatch(logout());
                  setTabIndicator(1);
                  navigate('/');
                }}
              >
                Logout
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Header;
