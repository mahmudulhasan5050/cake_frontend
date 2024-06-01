import { createSlice } from '@reduxjs/toolkit';
import { fetchCakes, addCake, deleteCake, updateCake } from './cakeAsync';
var initialState = {
    cakes: [],
    isLoading: false,
    error: '',
};
var cakeSlice = createSlice({
    name: 'cakes',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        //fetch
        builder.addCase(fetchCakes.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(fetchCakes.fulfilled, function (state, action) {
            state.isLoading = false;
            state.cakes = action.payload;
            state.error = '';
        });
        builder.addCase(fetchCakes.rejected, function (state, action) {
            state.isLoading = false;
            state.cakes = [];
            state.error = action.error.message || 'Something went wrong!!';
        });
        //addCake
        builder.addCase(addCake.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(addCake.fulfilled, function (state, action) {
            state.isLoading = false;
            state.cakes.push(action.payload);
            state.error = '';
        });
        builder.addCase(addCake.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //deleteCake
        builder.addCase(deleteCake.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(deleteCake.fulfilled, function (state, action) {
            state.isLoading = false;
            state.cakes = state.cakes.filter(function (del) {
                return del._id !== action.payload;
            });
            state.error = '';
        });
        builder.addCase(deleteCake.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //update
        builder.addCase(updateCake.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(updateCake.fulfilled, function (state, action) {
            state.isLoading = false;
            var index = state.cakes.findIndex(function (inx) { return inx._id === action.payload._id; });
            state.cakes[index] = action.payload;
            state.error = '';
        });
        builder.addCase(updateCake.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
    },
});
export default cakeSlice.reducer;
