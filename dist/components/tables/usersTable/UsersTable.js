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
import { useEffect } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Table, TableContainer, TableBody, TableCell, TableRow, Button, TableHead, Paper, Box, } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchUsers, deleteUser } from '../../../features/user/userAsync';
var headElements = ['Users', 'Phone Number', 'Edit/Delete'];
//props are from... pages/admin/UserDetails.tsx
var UsersTable = function (_a) {
    var setUserId = _a.setUserId;
    var theme = useTheme();
    var dispatch = useAppDispatch();
    var matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    var allUsers = useAppSelector(function (state) { return state.user; });
    useEffect(function () {
        dispatch(fetchUsers());
    }, [dispatch]);
    return (_jsx(Box, { children: _jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ sx: { tableLayout: 'fixed' }, "aria-label": 'simple table' }, { children: [_jsx(TableHead, { children: _jsx(TableRow, __assign({ sx: { backgroundColor: 'gray' } }, { children: headElements.map(function (item, i) {
                                return (_jsx(TableCell, __assign({ align: headElements.length - 1 === i ? 'right' : 'left', sx: { color: 'white', fontSize: '1.2em' } }, { children: item }), item));
                            }) })) }), allUsers.users.map(function (user) { return (
                    // <MuiTableBody key={item.name} cake={item} />
                    _jsx(TableBody, { children: _jsxs(TableRow, __assign({ sx: { '&:last-child td, &:last-child th': { border: 0 } } }, { children: [_jsx(TableCell, __assign({ component: 'th', scope: 'row' }, { children: user.userName })), _jsx(TableCell, __assign({ sx: {
                                        fontSize: matchesMd ? '0,5em' : '1.2em',
                                        color: '#006618',
                                    } }, { children: user.phone })), _jsxs(TableCell, __assign({ align: 'right' }, { children: [_jsx(Button, __assign({ onClick: function () { return (user._id ? setUserId(user._id) : undefined); } }, { children: _jsx(ModeEditIcon, {}) })), _jsx(Button, __assign({ onClick: function () { return user._id && dispatch(deleteUser(user._id)); } }, { children: _jsx(DeleteForeverIcon, { color: 'error' }) }))] }))] })) }, user._id)); })] })) })) }));
};
export default UsersTable;
