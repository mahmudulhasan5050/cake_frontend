import { createAsyncThunk } from '@reduxjs/toolkit';

import { OrdersType } from '../../types/orderType';
import {
  axiosUserOrdersById
} from '../../axios';


export const fetchMyOrders = createAsyncThunk(
  'orders/fetchOrdersById', async (userId: string) => {
  const response = await axiosUserOrdersById(userId);
  const result: OrdersType[] = await response.data;
  return result;
});




