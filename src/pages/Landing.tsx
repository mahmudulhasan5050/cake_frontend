import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

import BackGroundImage from '../assets/images/background.jpg';

const LandingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '88vh',
  backgroundImage: `url(${BackGroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
});
const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Half-transparent black
});

const Content = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

interface HandleLandingButtonClickProps {
    handleLandingButtonClick: () => void;
  }

const Landing = ({handleLandingButtonClick}: HandleLandingButtonClickProps) => {
const theme = useTheme()
const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <LandingContainer style={{ textAlign: 'center', padding: '50px 20px' }}>
      <Overlay/>
        <Content>
          <Typography variant={mdDown ? 'h4': 'h2'} gutterBottom>
            Welcome to Our <br/> Bake & Cake
          </Typography>
          <Typography variant='h5' paragraph>
            Discover our delicious cakes.
          </Typography>
          <Button onClick={handleLandingButtonClick} variant='contained' color='primary'>
            Our Cakes
          </Button>
        </Content>
    </LandingContainer>
  );
};

export default Landing;
