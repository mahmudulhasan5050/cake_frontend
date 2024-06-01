import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { styled } from '@mui/material/styles';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import LoadingPage from '../components/loadingPage/LoadingPage';
import { fetchMyOrders } from '../features/myOrders/myOrdersAsync';

interface LandingPageButtonProps {
  setLandingPageButton: (value: boolean) => void;
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const MyOrders = ({ setLandingPageButton }: LandingPageButtonProps) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.authInfo?._id);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const myOrders = useAppSelector((state) => state.myOrder);

  useEffect(() => {
    setLandingPageButton(true);
    userId && dispatch(fetchMyOrders(userId));
  }, [dispatch, userId, setLandingPageButton]);

  return (
    // <Container style={{ padding: '150px 20px' }}>
    // <Paper
    //   sx={{
    //     p: 2,
    //     margin: 'auto',
    //     maxWidth: 800,
    //     flexGrow: 1,
    //   }}
    // >
    //   {myOrders.isLoading && (
    //     <Grid item>
    //       <LoadingPage />
    //     </Grid>
    //   )}
    //   {!myOrders.isLoading && myOrders.error ? (
    //     <Grid item> Error: {myOrders.error}</Grid>
    //   ) : null}
    //   {!myOrders.isLoading && myOrders.myOrders.length ? (
    //     <>
    //       {myOrders.myOrders.map((item, index) => (
    //         <Grid container spacing={2} key={index}>
    //           <Grid item>
    //             <ButtonBase sx={{ width: 128, height: 128 }}>
    //               <Img alt='complex' src={item.cakeId?.selectedFile} />
    //             </ButtonBase>
    //           </Grid>
    //           <Grid item xs={12} sm container>
    //             <Grid item xs container direction='column' spacing={2}>
    //               <Grid item xs>
    //                 <Typography
    //                   gutterBottom
    //                   variant='subtitle1'
    //                   component='div'
    //                 >
    //                   {item.cakeId?.name}
    //                 </Typography>
    //                 <Typography variant='body2' sx={{fontWeight: 'bold'}} color={item.deliveryStatus ? '#17FF00':'red'} gutterBottom>
    //                   {item.deliveryStatus ? 'Delivered' : 'Not Delivered'}
    //                 </Typography>
    //                 <Typography variant='body2' gutterBottom>
    //                   {dayjs(item.deliveryDate).format('DD/MM/YYYY')}
    //                 </Typography>
    //               </Grid>
    //             </Grid>
    //             <Grid item>
    //               <Typography variant='subtitle1' component='div'>
    //                 Total Price: € {item.totalPrice}
    //               </Typography>
    //               <Typography variant='subtitle1' component='div'>
    //                 Amount: {item.amount}
    //               </Typography>
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       ))}
    //     </>
    //   ) : null}
    // </Paper>
    // </Container>
    <>
      {myOrders.isLoading && (
        <Grid
          container
          direction={mdDown ? 'column' : 'row'}
          justifyContent='center'
          alignItems='center'
          spacing={4}
          sx={{ width: '80%', margin: '120px auto' }}
        >
          <Grid item>
            <LoadingPage />
          </Grid>
        </Grid>
      )}
      {myOrders.myOrders.map((item) => (
        <Grid
          container
          direction={mdDown ? 'column' : 'row'}
          justifyContent='center'
          alignItems='center'
          spacing={4}
          sx={{ width: '80%', margin: '120px auto' }}
          key={item._id}
        >
          <Grid item xs={4} >
            <Img
              alt='cake image'
              src={item.cakeId?.selectedFile}
              sx={{ maxHeight: '300px' }}
            />
          </Grid>
          <Grid item container direction='row' xs={8} spacing={2}>
            {/* Here is Name and Description *****************/}
            <Grid
              item
              container
              xs={12}
              direction='column'
              justifyContent='center'
              alignItems='center'
              sx={{ marginBottom: '30px' }}
            >
              <Typography
                gutterBottom
                variant='h4'
                component='div'
                align='center'
              >
                Name: {item.cakeId?.name}
              </Typography>
              <Typography variant='h5' gutterBottom align='center'>
                Total: €{item.totalPrice}
              </Typography>
            </Grid>
            {/* Here is amount *****************/}
            <Grid
              item
              container
              xs={12}
              direction='row'
              spacing={2}
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={4}>
                <Typography variant='h5' gutterBottom align='center'>
                  Product amount: {item.amount}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant='h5' gutterBottom align='center'>
                  {dayjs(item.deliveryDate).format('DD/MM/YYYY')}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant='h5'
                  sx={{ fontWeight: 'bold' }}
                  color={item.deliveryStatus ? '#17FF00' : 'red'}
                  gutterBottom
                >
                  {item.deliveryStatus ? 'Delivered' : 'Not Delivered'}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default MyOrders;
