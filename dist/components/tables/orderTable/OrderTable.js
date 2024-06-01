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
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Table, TableContainer, TableBody, TableCell, TableRow, Button, TableHead, Paper, Box, } from '@mui/material';
import TaskIcon from '@mui/icons-material/AddTask';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dayjs from 'dayjs';
import { fetchOrders, deleteOrder, updateDeliveryStatusOrder } from '../../../features/orders/ordersAsync';
var headNormalView = [
    'Cake View',
    'Cake Name',
    'Ordered By',
    'Total Price',
    'Delivery Status',
    'Delivery date',
    'Delete',
];
var headMobView = [
    'Cake Name',
    'Ordered By',
    'Delivery Status',
];
// pages/admin/OrderDetails.tsx
var TableHome = function () {
    var theme = useTheme();
    var dispatch = useAppDispatch();
    var matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    var allOrders = useAppSelector(function (state) { return state.order; });
    useEffect(function () {
        dispatch(fetchOrders());
    }, [dispatch]);
    return (_jsx(Box, { children: _jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ sx: { tableLayout: 'fixed' }, "aria-label": 'simple table' }, { children: [_jsx(TableHead, { children: _jsx(TableRow, __assign({ sx: { backgroundColor: 'gray' } }, { children: !matchesMd ? headNormalView.map(function (item, i) {
                                return (_jsx(TableCell, __assign({ align: headNormalView.length - 1 === i ? 'right' : 'left', sx: { color: 'white', fontSize: '1.2em' } }, { children: item }), item));
                            })
                                :
                                    headMobView.map(function (item, i) {
                                        return (_jsx(TableCell, __assign({ align: headMobView.length - 1 === i ? 'right' : 'left' }, { children: item }), item));
                                    }) })) }), allOrders.orders.map(function (order) {
                        var _a, _b, _c, _d;
                        return (_jsx(TableBody, { children: matchesMd ? (_jsxs(TableRow, __assign({ sx: { '&:last-child td, &:last-child th': { border: 0 } } }, { children: [_jsx(TableCell, __assign({ sx: {
                                            fontSize: matchesMd ? '0,5em' : '1.2em',
                                            color: '#006618',
                                        } }, { children: (_a = order.cakeId) === null || _a === void 0 ? void 0 : _a.name })), _jsx(TableCell, { children: (_b = order === null || order === void 0 ? void 0 : order.userId) === null || _b === void 0 ? void 0 : _b.userName }), _jsx(TableCell, { children: _jsx(Button, __assign({ variant: 'outlined', onClick: function () {
                                                return order._id && dispatch(updateDeliveryStatusOrder(order._id));
                                            } }, { children: order.deliveryStatus ? (_jsx(TaskIcon, { color: 'success' })) : (_jsx(TaskIcon, { color: 'error' })) })) })] }))) : (_jsxs(TableRow, __assign({ sx: { '&:last-child td, &:last-child th': { border: 0 } } }, { children: [_jsx(TableCell, __assign({ component: 'th', scope: 'row' }, { children: _jsx("img", { alt: order._id, src: (order === null || order === void 0 ? void 0 : order.cakeId) && order.cakeId.selectedFile, width: 60 }) })), _jsx(TableCell, __assign({ sx: {
                                            fontSize: matchesMd ? '0,5em' : '1.2em',
                                            color: '#006618',
                                        } }, { children: (_c = order.cakeId) === null || _c === void 0 ? void 0 : _c.name })), _jsx(TableCell, { children: (_d = order === null || order === void 0 ? void 0 : order.userId) === null || _d === void 0 ? void 0 : _d.userName }), _jsx(TableCell, { children: order.totalPrice }), _jsx(TableCell, { children: _jsx(Button, __assign({ variant: 'outlined', onClick: function () {
                                                return order._id && dispatch(updateDeliveryStatusOrder(order._id));
                                            } }, { children: order.deliveryStatus ? (_jsx(TaskIcon, { color: 'success' })) : (_jsx(TaskIcon, { color: 'error' })) })) }), _jsx(TableCell, { children: dayjs(order.deliveryDate).format('DD/MM/YYYY') }), _jsx(TableCell, __assign({ align: 'right' }, { children: _jsx(Button, __assign({ onClick: function () {
                                                return order._id && dispatch(deleteOrder(order._id));
                                            } }, { children: _jsx(DeleteForeverIcon, { color: 'error' }) })) }))] }))) }, order._id));
                    })] })) })) }));
};
export default TableHome;
