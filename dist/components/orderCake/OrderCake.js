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
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { styled } from '@mui/material/styles';
import { Grid, TextField, Button, useMediaQuery, useTheme, Typography, } from '@mui/material';
import dayjs from 'dayjs';
import CalendarDisplay from '../calendar/CalendarDisplay';
import { addOrder } from '../../features/orders/ordersAsync';
var Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
var OrderCake = function () {
    var _a = useParams(), cakeId = _a.cakeId, userId = _a.userId;
    var navigate = useNavigate();
    var dispatch = useAppDispatch();
    var theme = useTheme();
    var mdDown = useMediaQuery(theme.breakpoints.down('md'));
    var selectedCake = useAppSelector(function (state) {
        return state.cake.cakes.filter(function (item) { return item._id === cakeId; });
    });
    var _b = useState(1), amount = _b[0], setAmount = _b[1];
    var _c = React.useState(dayjs()), desiredDate = _c[0], setDesiredDate = _c[1];
    var _d = useState(selectedCake[0].price), total = _d[0], setTotal = _d[1];
    var _e = useState({
        userId: '',
        cakeId: '',
        amount: amount,
        totalPrice: total,
        deliveryDate: desiredDate === null || desiredDate === void 0 ? void 0 : desiredDate.format(),
    }), order = _e[0], setOrder = _e[1];
    useEffect(function () {
        setOrder({
            userId: userId ? userId : undefined,
            cakeId: selectedCake[0]._id,
            amount: amount,
            totalPrice: total,
            deliveryDate: desiredDate === null || desiredDate === void 0 ? void 0 : desiredDate.format(),
        });
    }, [selectedCake, amount, desiredDate, userId, total]);
    var orderSubmit = function () {
        dispatch(addOrder(order));
        clear();
        navigate('/');
    };
    var clear = function () {
        setAmount(1);
        setOrder({
            userId: '',
            cakeId: '',
            amount: amount,
            totalPrice: selectedCake[0].price * amount,
            deliveryDate: '',
        });
    };
    return (_jsxs(Grid, __assign({ container: true, direction: mdDown ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', spacing: 4, sx: { width: '80%', margin: '120px auto' } }, { children: [_jsx(Grid, __assign({ item: true, xs: 4, alignItems: 'center' }, { children: _jsx(Img, { alt: 'cake image', src: selectedCake[0].selectedFile, sx: { maxHeight: '300px' } }) })), _jsxs(Grid, __assign({ item: true, container: true, direction: 'row', xs: 8, spacing: 2 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, direction: 'column', justifyContent: 'center', alignItems: 'center', sx: { marginBottom: '30px' } }, { children: [_jsx(Typography, __assign({ gutterBottom: true, variant: 'h4', component: 'div', align: 'center' }, { children: selectedCake[0].name })), _jsx(Typography, __assign({ variant: 'h5', gutterBottom: true, align: 'center' }, { children: selectedCake[0].description }))] })), _jsxs(Grid, __assign({ item: true, container: true, xs: 12, direction: 'row', spacing: 2, justifyContent: 'center', alignItems: 'center' }, { children: [_jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsx(TextField, { label: 'Amount', sx: { m: 1, width: '100%', marginLeft: '0em' }, variant: 'filled', type: 'number', value: amount, onChange: function (e) {
                                        setAmount(e.target.value);
                                        setTotal(selectedCake[0].price * e.target.value);
                                        setOrder(__assign(__assign({}, order), { amount: e.target.value, totalPrice: selectedCake[0].price * e.target.value }));
                                    } }) })), _jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsx(CalendarDisplay, { desiredDate: desiredDate, setDesiredDate: setDesiredDate, order: order, setOrder: setOrder }) })), _jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsxs(Typography, __assign({ variant: 'h4' }, { children: ["\u20AC ", total] })) }))] })), _jsx(Grid, __assign({ item: true, container: true, xs: 12, direction: 'column', justifyContent: 'center', alignItems: 'center' }, { children: _jsx(Button, __assign({ variant: 'contained', color: 'success', onClick: orderSubmit }, { children: "Submit Order" })) }))] }))] })));
};
export default OrderCake;
