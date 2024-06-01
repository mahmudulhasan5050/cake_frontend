import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { styled } from '@mui/material/styles';
import {
  Grid,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';

import dayjs, { Dayjs } from 'dayjs';

import { OrderSubmitType } from '../../types/orderType';
import CalendarDisplay from '../calendar/CalendarDisplay';
import { addOrder } from '../../features/orders/ordersAsync';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const OrderCake = () => {
  const { cakeId, userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const selectedCake = useAppSelector((state) =>
    state.cake.cakes.filter((item) => item._id === cakeId)
  );
  const [amount, setAmount] = useState(1);
  const [desiredDate, setDesiredDate] = React.useState<
    Dayjs | undefined | null
  >(dayjs());
  const [total, setTotal] = useState(selectedCake[0].price);
  const [order, setOrder] = useState<OrderSubmitType>({
    userId: '',
    cakeId: '',
    amount: amount,
    totalPrice: total,
    deliveryDate: desiredDate?.format(),
  });

  useEffect(() => {
    setOrder({
      userId: userId ? userId : undefined,
      cakeId: selectedCake[0]._id,
      amount: amount,
      totalPrice: total,
      deliveryDate: desiredDate?.format(),
    });
  }, [selectedCake, amount, desiredDate, userId, total]);

  const orderSubmit = () => {
    dispatch(addOrder(order));
    clear();
    navigate('/');
  };

  const clear = () => {
    setAmount(1);
    setOrder({
      userId: '',
      cakeId: '',
      amount: amount,
      totalPrice: selectedCake[0].price * amount,
      deliveryDate: '',
    });
  };

  return (
    <Grid
      container
      direction={mdDown ? 'column' : 'row'}
      justifyContent='center'
      alignItems='center'
      spacing={4}
      sx={{ width: '80%', margin: '120px auto' }}
    >
      <Grid item xs={4} alignItems='center'>
        <Img
          alt='cake image'
          src={selectedCake[0].selectedFile}
          sx={{ maxHeight: '300px' }}
        />
      </Grid>
      <Grid item container direction='row' xs={8} spacing={2}>
        {/* Here is Name and Description *****************/}
        <Grid
          item
          xs={12}
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ marginBottom: '30px' }}
        >
          <Typography gutterBottom variant='h4' component='div' align='center'>
            {selectedCake[0].name}
          </Typography>
          <Typography variant='h5' gutterBottom align='center'>
            {selectedCake[0].description}
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
            <TextField
              label='Amount'
              sx={{ m: 1, width: '100%', marginLeft: '0em' }}
              variant='filled'
              type='number'
              value={amount}
              onChange={(e: any) => {
                setAmount(e.target.value);
                setTotal(selectedCake[0].price * e.target.value);
                setOrder({
                  ...order,
                  amount: e.target.value,
                  totalPrice: selectedCake[0].price * e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <CalendarDisplay
              desiredDate={desiredDate}
              setDesiredDate={setDesiredDate}
              order={order}
              setOrder={setOrder}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h4'>€ {total}</Typography>
          </Grid>
        </Grid>
        {/* Here is Calendar **********************/}
        <Grid
          item
          container
          xs={12}
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Button variant='contained' color='success' onClick={orderSubmit}>
            Submit Order
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default OrderCake;
