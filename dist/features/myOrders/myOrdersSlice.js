import { createSlice } from '@reduxjs/toolkit';
import { fetchMyOrders } from './myOrdersAsync';
var initialState = {
    myOrders: [],
    isLoading: false,
    error: '',
};
var myOrderSlice = createSlice({
    name: 'myOrders',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        //fetch
        builder.addCase(fetchMyOrders.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(fetchMyOrders.fulfilled, function (state, action) {
            state.isLoading = false;
            state.myOrders = action.payload;
            state.error = '';
        });
        builder.addCase(fetchMyOrders.rejected, function (state, action) {
            state.isLoading = false;
            state.myOrders = [];
            state.error = action.error.message || 'Something went wrong!!';
        });
    },
});
export default myOrderSlice.reducer;
