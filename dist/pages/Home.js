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
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Grid, Container, CssBaseline, Typography, } from '@mui/material';
import CardCake from '../components/cardCake/CardCake';
import { fetchCakes } from '../features/cake/cakeAsync';
import LoadingPage from '../components/loadingPage/LoadingPage';
var Home = function () {
    var dispatch = useAppDispatch();
    var allCakes = useAppSelector(function (state) { return state.cake; });
    useEffect(function () {
        dispatch(fetchCakes());
    }, [dispatch]);
    return (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsxs(Container, __assign({ style: { padding: '150px 20px' } }, { children: [_jsx(Typography, __assign({ variant: 'h4', gutterBottom: true }, { children: "Our Products" })), _jsxs(Grid, __assign({ container: true, spacing: 3, justifyContent: "center", alignItems: "center" }, { children: [allCakes.isLoading && (_jsx(Grid, __assign({ item: true }, { children: _jsx(LoadingPage, {}) }))), !allCakes.isLoading && allCakes.error ? (_jsxs(Grid, __assign({ item: true }, { children: [" Error: ", allCakes.error] }))) : null, !allCakes.isLoading && allCakes.cakes.length ? (_jsx(_Fragment, { children: allCakes.cakes.map(function (item) { return (_jsx(CardCake, { cake: item }, item.name)); }) })) : null] }))] }))] }));
};
export default Home;
