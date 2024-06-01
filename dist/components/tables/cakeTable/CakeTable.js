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
import { useAppSelector } from '../../../redux/hooks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Table, TableContainer, TableBody, TableCell, TableRow, Button, TableHead, Paper, Box, } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteCake } from '../../../features/cake/cakeAsync';
var headElements = ['Cake View', 'Cake Name', 'description', 'Price', 'Edit'];
// pages/admin/CakeDetails.tsx
var TableHome = function (_a) {
    var setCakeId = _a.setCakeId;
    var theme = useTheme();
    var dispatch = useAppDispatch();
    var matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    var allCakes = useAppSelector(function (state) { return state.cake; });
    return (_jsx(Box, __assign({ sx: { margin: matchesMd ? '0em' : '0em' } }, { children: _jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(Table, __assign({ sx: { tableLayout: 'fixed' }, "aria-label": 'simple table' }, { children: [_jsx(TableHead, { children: _jsx(TableRow, __assign({ sx: { backgroundColor: 'gray', color: 'white' } }, { children: headElements.map(function (item, i) {
                                return (_jsx(TableCell, __assign({ align: headElements.length - 1 === i ? 'right' : 'left', sx: { color: 'white', fontSize: '1.2em' } }, { children: item }), item));
                            }) })) }), allCakes.cakes.map(function (cake) { return (_jsx(TableBody, { children: _jsxs(TableRow, __assign({ sx: { '&:last-child td, &:last-child th': { border: 0 } } }, { children: [_jsx(TableCell, __assign({ component: 'th', scope: 'row' }, { children: _jsx("img", { alt: cake.name, src: cake.selectedFile, width: 60 }) })), _jsx(TableCell, __assign({ sx: {
                                        fontSize: matchesMd ? '0,5em' : '1.2em',
                                        color: '#006618',
                                    } }, { children: cake.name })), _jsx(TableCell, { children: cake.description }), _jsx(TableCell, { children: cake.price }), _jsxs(TableCell, __assign({ align: 'right' }, { children: [_jsx(Button, __assign({ onClick: function () { return cake._id ? setCakeId(cake._id) : undefined; } }, { children: _jsx(ModeEditIcon, {}) })), _jsx(Button, __assign({ onClick: function () { return cake._id && dispatch(deleteCake(cake._id)); } }, { children: _jsx(DeleteForeverIcon, { color: 'error' }) }))] }))] })) }, cake._id)); })] })) })) })));
};
export default TableHome;
