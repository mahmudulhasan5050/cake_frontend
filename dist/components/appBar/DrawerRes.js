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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Button, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from '../../features/auth/authSlice';
//.../Header.tsx
var DrawerRes = function (_a) {
    var landingPageButton = _a.landingPageButton;
    var _b = useState(false), openDrawer = _b[0], setOpenDrawer = _b[1];
    var isLoggedStatus = useAppSelector(function (state) { return state.auth.authInfo; });
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    return (_jsxs(React.Fragment, { children: [_jsx(Drawer, __assign({ open: openDrawer, onClose: function () { return setOpenDrawer(false); } }, { children: _jsxs(List, { children: [_jsx(ListItemButton, __assign({ onClick: function () { return setOpenDrawer(false); } }, { children: _jsx(ListItemIcon, { children: _jsx(ListItemText, __assign({ onClick: function () { return navigate('/'); } }, { children: "Home" })) }) })), isLoggedStatus.isLoggedIn && (_jsx(ListItemButton, __assign({ onClick: function () { return setOpenDrawer(false); } }, { children: _jsx(ListItemIcon, { children: _jsx(ListItemText, __assign({ onClick: function () { return navigate('/myorders'); } }, { children: "My Orders" })) }) }))), isLoggedStatus.admin && (_jsx(ListItemButton, __assign({ onClick: function () { return setOpenDrawer(false); } }, { children: _jsx(ListItemIcon, { children: _jsx(ListItemText, __assign({ onClick: function () { return navigate('/userdetails'); } }, { children: "User Details" })) }) }))), isLoggedStatus.admin && (_jsx(ListItemButton, __assign({ onClick: function () { return setOpenDrawer(false); } }, { children: _jsx(ListItemIcon, { children: _jsx(ListItemText, __assign({ onClick: function () { return navigate('/orderdetails'); } }, { children: "Order Details" })) }) }))), !isLoggedStatus.isLoggedIn ? (_jsx(Button, __assign({ sx: { marginLeft: '1em' }, variant: 'contained', onClick: function () {
                                navigate('/auth');
                                setOpenDrawer(false);
                            } }, { children: "Sign In" }))) : (_jsx(Button, __assign({ sx: { marginLeft: '1em' }, variant: 'contained', onClick: function () {
                                dispatch(logout());
                                setOpenDrawer(false);
                                navigate('/');
                            } }, { children: "Logout" })))] }) })), _jsx(IconButton, __assign({ sx: { color: landingPageButton ? 'black' : 'white', marginLeft: 'auto' }, onClick: function () { return setOpenDrawer(!openDrawer); } }, { children: _jsx(MenuIcon, {}) }))] }));
};
export default DrawerRes;
