var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, TextField, Container } from '@mui/material';
import { useAppDispatch } from '../redux/hooks';
import { signIn, signUp } from '../features/auth/authAsync';
// type UserIdStateType = {
//   userId: string;
//   setUserId: (userId: string) => void;
// };
var SignUpInForm = function () {
    var _a = useState({
        userName: '',
        phone: '',
        password: '',
        retypePassword: '',
    }), authState = _a[0], setAuthState = _a[1];
    var _b = useState(false), isSignUp = _b[0], setIsSignUp = _b[1];
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var submitButton = function (e) {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signUp(authState));
            clear();
            setIsSignUp(function (modeSwitch) { return !modeSwitch; });
            navigate('/auth');
        }
        else {
            dispatch(signIn(authState));
            clear();
            navigate('/');
        }
    };
    var clear = function () {
        setAuthState({
            userName: '',
            phone: '',
            password: '',
            retypePassword: '',
        });
    };
    return (_jsx(Container, __assign({ style: { padding: '150px 0px', width: '100%' } }, { children: _jsx("form", { children: _jsxs(Box, __assign({ display: 'flex', flexDirection: 'column', maxWidth: 400, alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: 5, padding: 3, borderRadius: 5, boxShadow: '5px 5px 10px #ccc', sx: {
                    ':hover': {
                        boxShadow: '10px 10px 20px #ccc',
                    },
                } }, { children: [_jsx(Typography, __assign({ variant: 'h5', padding: 3, textAlign: 'center' }, { children: isSignUp ? 'Sign Up' : 'Sign In' })), isSignUp && (_jsx(_Fragment, { children: _jsx(TextField, { variant: 'outlined', label: 'Name', type: 'text', margin: 'normal', value: authState.userName, onChange: function (e) {
                                return setAuthState(__assign(__assign({}, authState), { userName: e.target.value }));
                            } }) })), _jsx(TextField, { variant: 'outlined', label: 'Phone Number', type: 'text', margin: 'normal', value: authState.phone, onChange: function (e) {
                            return setAuthState(__assign(__assign({}, authState), { phone: e.target.value }));
                        } }), _jsx(TextField, { variant: 'outlined', label: 'Password', type: 'password', margin: 'normal', value: authState.password, onChange: function (e) {
                            return setAuthState(__assign(__assign({}, authState), { password: e.target.value }));
                        } }), isSignUp && (_jsx(_Fragment, { children: _jsx(TextField, { variant: 'outlined', label: 'Re-type Password', type: 'password', margin: 'normal', value: authState.retypePassword, onChange: function (e) {
                                return setAuthState(__assign(__assign({}, authState), { retypePassword: e.target.value }));
                            } }) })), _jsx(Button, __assign({ variant: 'contained', color: 'warning', sx: { marginTop: 3, borderRadius: 2 }, onClick: function (e) { return submitButton(e); } }, { children: isSignUp ? 'Sign Up' : 'Sign In' })), _jsx(Button, __assign({ onClick: function () {
                            setIsSignUp(function (modeSwitch) { return !modeSwitch; });
                        } }, { children: isSignUp
                            ? 'Already have an account? Sign In'
                            : 'Do not have an account? Sign Up' }))] })) }) })));
};
export default SignUpInForm;
