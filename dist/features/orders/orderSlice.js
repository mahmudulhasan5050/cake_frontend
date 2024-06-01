import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders, addOrder, deleteOrder, updateOrder, updateDeliveryStatusOrder } from './ordersAsync';
var initialState = {
    orders: [],
    isLoading: false,
    error: '',
};
var orderSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        //fetch
        builder.addCase(fetchOrders.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, function (state, action) {
            state.isLoading = false;
            state.orders = action.payload;
            state.error = '';
        });
        builder.addCase(fetchOrders.rejected, function (state, action) {
            state.isLoading = false;
            state.orders = [];
            state.error = action.error.message || 'Something went wrong!!';
        });
        //add
        builder.addCase(addOrder.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(addOrder.fulfilled, function (state, action) {
            state.isLoading = false;
            state.orders.push(action.payload);
            state.error = '';
        });
        builder.addCase(addOrder.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //deleteCake
        builder.addCase(deleteOrder.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(deleteOrder.fulfilled, function (state, action) {
            state.isLoading = false;
            state.orders = state.orders.filter(function (del) {
                return del._id !== action.payload;
            });
            state.error = '';
        });
        builder.addCase(deleteOrder.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //update
        builder.addCase(updateOrder.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(updateOrder.fulfilled, function (state, action) {
            state.isLoading = false;
            var index = state.orders.findIndex(function (inx) { return inx._id === action.payload._id; });
            state.orders[index] = action.payload;
            state.error = '';
        });
        builder.addCase(updateOrder.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //deliveryStatus
        builder.addCase(updateDeliveryStatusOrder.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(updateDeliveryStatusOrder.fulfilled, function (state, action) {
            state.isLoading = false;
            var index = state.orders.findIndex(function (inx) { return inx._id === action.payload._id; });
            state.orders[index] = action.payload;
            state.error = '';
        });
        builder.addCase(updateDeliveryStatusOrder.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
    },
});
export default orderSlice.reducer;
