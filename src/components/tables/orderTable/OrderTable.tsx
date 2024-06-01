import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TableHead,
  Paper,
  Box,
} from '@mui/material';
import TaskIcon from '@mui/icons-material/AddTask';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dayjs from 'dayjs';

import { fetchOrders, deleteOrder, updateDeliveryStatusOrder } from '../../../features/orders/ordersAsync';

const headNormalView = [
  'Cake View',
  'Cake Name',
  'Ordered By',
  'Total Price',
  'Delivery Status',
  'Delivery date',
  'Delete',
];
const headMobView = [
  'Cake Name',
  'Ordered By',
  'Delivery Status',
];

// pages/admin/OrderDetails.tsx
const TableHome = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const allOrders = useAppSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ tableLayout: 'fixed' }} aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'gray' }}>
              {!matchesMd ? headNormalView.map((item, i) => {
                return (
                  <TableCell
                    key={item}
                    align={headNormalView.length - 1 === i ? 'right' : 'left'}
                    sx={{ color:'white', fontSize:'1.2em' }}
                  >
                    {item}
                  </TableCell>
                );
              })
              : 
              headMobView.map((item, i) => {
                return (
                  <TableCell
                    key={item}
                    align={headMobView.length - 1 === i ? 'right' : 'left'}
                  >
                    {item}
                  </TableCell>
                );
              })
              }
            </TableRow>
          </TableHead>
          {allOrders.orders.map((order) => (
            <TableBody key={order._id}>
             {matchesMd ? (
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{
                  fontSize: matchesMd ? '0,5em' : '1.2em',
                  color: '#006618',
                }}
              >
                {order.cakeId?.name}
              </TableCell>
              <TableCell>{order?.userId?.userName}</TableCell>
              <TableCell>
                <Button variant='outlined'
                onClick={()=>
                order._id && dispatch(updateDeliveryStatusOrder(order._id))
                }
                >
                  {order.deliveryStatus ? (<TaskIcon color='success'/>) : (<TaskIcon color='error'/>)}
                </Button>
              </TableCell>
            </TableRow>
             ) : (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <img
                    alt={order._id}
                    src={order?.cakeId && order.cakeId.selectedFile}
                    width={60}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: matchesMd ? '0,5em' : '1.2em',
                    color: '#006618',
                  }}
                >
                  {order.cakeId?.name}
                </TableCell>
                <TableCell>{order?.userId?.userName}</TableCell>
                <TableCell>{order.totalPrice}</TableCell>
                <TableCell>
                  <Button variant='outlined'
                  onClick={()=>
                  order._id && dispatch(updateDeliveryStatusOrder(order._id))
                  }
                  >
                    {order.deliveryStatus ? (<TaskIcon color='success'/>) : (<TaskIcon color='error'/>)}
                  </Button>
                </TableCell>
                <TableCell>
                  {dayjs(order.deliveryDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell align='right'>
                  <Button
                    onClick={() =>
                      order._id && dispatch(deleteOrder(order._id))
                    }
                  >
                    <DeleteForeverIcon color='error'/>
                  </Button>
                </TableCell>
              </TableRow>
             )}
              
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableHome;
