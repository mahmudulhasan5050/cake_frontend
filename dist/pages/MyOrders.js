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
import { styled } from '@mui/material/styles';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import LoadingPage from '../components/loadingPage/LoadingPage';
import { fetchMyOrders } from '../features/myOrders/myOrdersAsync';
var Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
var MyOrders = function (_a) {
    var setLandingPageButton = _a.setLandingPageButton;
    var dispatch = useAppDispatch();
    var userId = useAppSelector(function (state) { var _a; return (_a = state.auth.authInfo) === null || _a === void 0 ? void 0 : _a._id; });
    var theme = useTheme();
    var mdDown = useMediaQuery(theme.breakpoints.down('md'));
    var myOrders = useAppSelector(function (state) { return state.myOrder; });
    useEffect(function () {
        setLandingPageButton(true);
        userId && dispatch(fetchMyOrders(userId));
    }, [dispatch, userId, setLandingPageButton]);
    return (
    // <Container style={{ padding: '150px 20px' }}>
    // <Paper
    //   sx={{
    //     p: 2,
    //     margin: 'auto',
    //     maxWidth: 800,
    //     flexGrow: 1,
    //   }}
    // >
    //   {myOrders.isLoading && (
    //     <Grid item>
    //       <LoadingPage />
    //     </Grid>
    //   )}
    //   {!myOrders.isLoading && myOrders.error ? (
    //     <Grid item> Error: {myOrders.error}</Grid>
    //   ) : null}
    //   {!myOrders.isLoading && myOrders.myOrders.length ? (
    //     <>
    //       {myOrders.myOrders.map((item, index) => (
    //         <Grid container spacing={2} key={index}>
    //           <Grid item>
    //             <ButtonBase sx={{ width: 128, height: 128 }}>
    //               <Img alt='complex' src={item.cakeId?.selectedFile} />
    //             </ButtonBase>
    //           </Grid>
    //           <Grid item xs={12} sm container>
    //             <Grid item xs container direction='column' spacing={2}>
    //               <Grid item xs>
    //                 <Typography
    //                   gutterBottom
    //                   variant='subtitle1'
    //                   component='div'
    //                 >
    //                   {item.cakeId?.name}
    //                 </Typography>
    //                 <Typography variant='body2' sx={{fontWeight: 'bold'}} color={item.deliveryStatus ? '#17FF00':'red'} gutterBottom>
    //                   {item.deliveryStatus ? 'Delivered' : 'Not Delivered'}
    //                 </Typography>
    //                 <Typography variant='body2' gutterBottom>
    //                   {dayjs(item.deliveryDate).format('DD/MM/YYYY')}
    //                 </Typography>
    //               </Grid>
    //             </Grid>
    //             <Grid item>
    //               <Typography variant='subtitle1' component='div'>
    //                 Total Price: € {item.totalPrice}
    //               </Typography>
    //               <Typography variant='subtitle1' component='div'>
    //                 Amount: {item.amount}
    //               </Typography>
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       ))}
    //     </>
    //   ) : null}
    // </Paper>
    // </Container>
    _jsxs(_Fragment, { children: [myOrders.isLoading && (_jsx(Grid, __assign({ container: true, direction: mdDown ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', spacing: 4, sx: { width: '80%', margin: '120px auto' } }, { children: _jsx(Grid, __assign({ item: true }, { children: _jsx(LoadingPage, {}) })) }))), myOrders.myOrders.map(function (item) {
                var _a, _b;
                return (_jsxs(Grid, __assign({ container: true, direction: mdDown ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', spacing: 4, sx: { width: '80%', margin: '120px auto' } }, { children: [_jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsx(Img, { alt: 'cake image', src: (_a = item.cakeId) === null || _a === void 0 ? void 0 : _a.selectedFile, sx: { maxHeight: '300px' } }) })), _jsxs(Grid, __assign({ item: true, container: true, direction: 'row', xs: 8, spacing: 2 }, { children: [_jsxs(Grid, __assign({ item: true, container: true, xs: 12, direction: 'column', justifyContent: 'center', alignItems: 'center', sx: { marginBottom: '30px' } }, { children: [_jsxs(Typography, __assign({ gutterBottom: true, variant: 'h4', component: 'div', align: 'center' }, { children: ["Name: ", (_b = item.cakeId) === null || _b === void 0 ? void 0 : _b.name] })), _jsxs(Typography, __assign({ variant: 'h5', gutterBottom: true, align: 'center' }, { children: ["Total: \u20AC", item.totalPrice] }))] })), _jsxs(Grid, __assign({ item: true, container: true, xs: 12, direction: 'row', spacing: 2, justifyContent: 'center', alignItems: 'center' }, { children: [_jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsxs(Typography, __assign({ variant: 'h5', gutterBottom: true, align: 'center' }, { children: ["Product amount: ", item.amount] })) })), _jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsx(Typography, __assign({ variant: 'h5', gutterBottom: true, align: 'center' }, { children: dayjs(item.deliveryDate).format('DD/MM/YYYY') })) })), _jsx(Grid, __assign({ item: true, xs: 4 }, { children: _jsx(Typography, __assign({ variant: 'h5', sx: { fontWeight: 'bold' }, color: item.deliveryStatus ? '#17FF00' : 'red', gutterBottom: true }, { children: item.deliveryStatus ? 'Delivered' : 'Not Delivered' })) }))] }))] }))] }), item._id));
            })] }));
};
export default MyOrders;
