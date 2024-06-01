import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, addUser, deleteUser, updateUser } from './userAsync';
var initialState = {
    users: [],
    isLoading: false,
    error: '',
};
var userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        //fetch
        builder.addCase(fetchUsers.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, function (state, action) {
            state.isLoading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected, function (state, action) {
            state.isLoading = false;
            state.users = [];
            state.error = action.error.message || 'Something went wrong!!';
        });
        //addUser
        builder.addCase(addUser.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, function (state, action) {
            state.isLoading = false;
            state.users.push(action.payload);
            state.error = '';
        });
        builder.addCase(addUser.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //deleteUser
        builder.addCase(deleteUser.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, function (state, action) {
            state.isLoading = false;
            state.users = state.users.filter(function (del) {
                return del._id !== action.payload;
            });
            state.error = '';
        });
        builder.addCase(deleteUser.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //update
        builder.addCase(updateUser.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, function (state, action) {
            state.isLoading = false;
            var index = state.users.findIndex(function (inx) { return inx._id === action.payload._id; });
            state.users[index] = action.payload;
            state.error = '';
        });
        builder.addCase(updateUser.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
    },
});
export default userSlice.reducer;
