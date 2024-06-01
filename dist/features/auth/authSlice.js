import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn } from './authAsync';
var storageLocal = localStorage.getItem('profile');
var initialState = {
    authInfo: {
        signInName: (storageLocal !== '{}') ? JSON.parse(storageLocal).signInName : '',
        admin: (storageLocal !== '{}') ? JSON.parse(storageLocal).admin : false,
        isLoggedIn: (storageLocal !== '{}') ? true : false,
        _id: (storageLocal !== '{}') ? JSON.parse(storageLocal)._id : '',
    },
    isLoading: false,
    error: '',
};
var userSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: function (state) {
            state.authInfo.signInName = '';
            state.authInfo.admin = false;
            state.authInfo.isLoggedIn = false;
            state.authInfo._id = '';
            localStorage.setItem('profile', JSON.stringify({}));
        }
    },
    extraReducers: function (builder) {
        //signUp
        builder.addCase(signUp.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(signUp.fulfilled, function (state, action) {
            state.isLoading = false;
            state.authInfo.signInName = action.payload.signInName;
            state.authInfo.admin = action.payload.admin;
            state.authInfo._id = action.payload._id;
            state.authInfo.isLoggedIn = true;
            action.payload &&
                localStorage.setItem('profile', JSON.stringify(action.payload));
            state.error = '';
        });
        builder.addCase(signUp.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
        //signIn
        builder.addCase(signIn.pending, function (state) {
            state.isLoading = true;
        });
        builder.addCase(signIn.fulfilled, function (state, action) {
            state.isLoading = false;
            state.authInfo.signInName = action.payload.signInName;
            state.authInfo.admin = action.payload.admin;
            state.authInfo._id = action.payload._id;
            state.authInfo.isLoggedIn = true;
            action.payload &&
                localStorage.setItem('profile', JSON.stringify(action.payload));
            state.error = '';
        });
        builder.addCase(signIn.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong!!';
        });
    },
});
export default userSlice.reducer;
export var logout = userSlice.actions.logout;
