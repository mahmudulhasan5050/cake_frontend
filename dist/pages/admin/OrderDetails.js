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
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from '@mui/material';
import OrderTable from '../../components/tables/orderTable/OrderTable';
var OrderDetails = function () {
    return (_jsx(Container, __assign({ style: { padding: '150px 0px', width: '100%' } }, { children: _jsx(OrderTable, {}) })));
};
export default OrderDetails;
