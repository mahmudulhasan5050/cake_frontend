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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme, Box, } from '@mui/material';
import { styled } from '@mui/system';
import CakeIconn from '../../assets/images/aaa.png';
import DrawerRes from './DrawerRes';
import { logout } from '../../features/auth/authSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
var TransparentAppBar = styled(AppBar)({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2,
});
var Header = function (_a) {
    var landingPageButton = _a.landingPageButton;
    var isLoggedStatus = useAppSelector(function (state) { return state.auth.authInfo; });
    var navigate = useNavigate();
    var dispatch = useAppDispatch();
    var _b = useState(1), tabIndicator = _b[0], setTabIndicator = _b[1];
    var theme = useTheme();
    var mdDown = useMediaQuery(theme.breakpoints.down('md'));
    //tabs indicator
    var handleChange = function (event, newValue) {
        setTabIndicator(newValue);
    };
    return (_jsx(TransparentAppBar, __assign({ sx: { color: landingPageButton ? 'black' : 'white' } }, { children: _jsxs(Toolbar, { children: [_jsx(Box, __assign({ sx: { margin: '0px', width: '90px', padding: '2px 0px 0px 2px' } }, { children: _jsx("img", { src: CakeIconn, alt: 'cake', width: '100%' }) })), mdDown ? (_jsx(DrawerRes, { landingPageButton: landingPageButton })) : (_jsxs(_Fragment, { children: [_jsxs(Tabs, __assign({ textColor: 'inherit', value: tabIndicator, onChange: handleChange, indicatorColor: 'secondary', sx: { marginLeft: 'auto' } }, { children: [_jsx(Tab, { label: 'Home', onClick: function () { return navigate('/'); }, sx: {
                                        fontWeight: 700,
                                        letterSpacing: 6,
                                        display: landingPageButton ? undefined : 'none',
                                    } }), isLoggedStatus.isLoggedIn && (_jsx(Tab, { label: 'My Orders', onClick: function () { return navigate('/myorders'); }, sx: {
                                        fontWeight: 700,
                                        letterSpacing: 4,
                                        display: landingPageButton ? undefined : 'none',
                                    } })), isLoggedStatus.admin && (_jsx(Tab, { label: 'Cake Details', onClick: function () { return navigate('/cakedetails'); }, sx: {
                                        fontWeight: 700,
                                        letterSpacing: 6,
                                        display: landingPageButton ? undefined : 'none',
                                    } })), isLoggedStatus.admin && (_jsx(Tab, { label: 'User Details', onClick: function () { return navigate('/userdetails'); }, sx: {
                                        fontWeight: 700,
                                        letterSpacing: 6,
                                        display: landingPageButton ? undefined : 'none',
                                    } })), isLoggedStatus.admin && (_jsx(Tab, { label: 'Order Details', onClick: function () { return navigate('/orderdetails'); }, sx: {
                                        fontWeight: 700,
                                        letterSpacing: 6,
                                        display: landingPageButton ? undefined : 'none',
                                    } }))] })), !isLoggedStatus.isLoggedIn ? (_jsx(Button, __assign({ sx: {
                                marginLeft: '1em',
                                letterSpacing: 2,
                                display: landingPageButton ? undefined : 'none',
                            }, variant: 'contained', onClick: function () { return navigate('/auth'); } }, { children: "Sign In" }))) : (_jsx(Button, __assign({ sx: {
                                marginLeft: '1em',
                                display: landingPageButton ? undefined : 'none',
                            }, variant: 'contained', onClick: function () {
                                dispatch(logout());
                                setTabIndicator(1);
                                navigate('/');
                            } }, { children: "Logout" })))] }))] }) })));
};
export default Header;
