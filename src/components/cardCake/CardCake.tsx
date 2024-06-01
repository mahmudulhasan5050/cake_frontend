import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Button,
  useTheme,
  useMediaQuery,
 styled
} from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { CakeType } from '../../types/cakeType';
import { useAppSelector } from '../../redux/hooks';

type CakePropType = {
  cake: CakeType;
};

const StyledImageList = styled(ImageList)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block', // Hide ImageList in mobile view
  },
}));

//props from .... pages/Home.tsx
const CardCake = ({ cake }: CakePropType) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isLoggedStatus = useAppSelector((state) => state.auth.authInfo);
  
  return (
    <Grid
      item
      container
      justifyContent={mdDown ? 'center' : 'flex-start'} // Center in mobile view
      alignItems='center'
      xs={12}
      sm={6}
      md={4}
    >
      <StyledImageList
        sx={{
          borderRadius: '10px',
          width: mdDown ? '100%' : 'auto', // Full width in mobile view
          margin: mdDown ? '0 auto' : 'inherit', // Centered margin in mobile view
        }}
      >
        <ImageListItem
          key={cake._id}
          sx={{
            position: 'relative',
            paddingTop: '75%', // Maintain aspect ratio
            width: mdDown ? '100%' : '350px', // Adjust width for larger size on normal screens
            overflow: 'hidden',
            marginBottom: '20px', // Spacing between items
          }}
        >
          <img
            srcSet={cake.selectedFile}
            src={cake.selectedFile}
            alt={cake.name}
            loading='lazy'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
       />
          <ImageListItemBar
            title={cake.name}
            subtitle={cake.description}
            actionIcon={
           <Button
             variant='contained'
             size='small'
             color='warning'
             onClick={() => {
               if (isLoggedStatus.isLoggedIn) {
                 navigate(`/ordercake/${cake._id}/${isLoggedStatus._id}`);
               } else {
                 navigate('/auth');
               }
             }}
             sx={{marginRight:'1em'}}
           >
             Order
           </Button>
            }
          />
        </ImageListItem>
      </StyledImageList>
    </Grid>
  );
};

export default CardCake;

