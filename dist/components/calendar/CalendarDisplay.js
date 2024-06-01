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
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// props from ...components/orderCake/OrderCake.tsx
var DatePickers = function (_a) {
    var desiredDate = _a.desiredDate, setDesiredDate = _a.setDesiredDate, order = _a.order, setOrder = _a.setOrder;
    return (_jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DatePicker, { disablePast: true, label: 'Please Mention a Delivery Date', value: desiredDate, onChange: function (newValue) {
                setDesiredDate(newValue);
                setOrder(__assign(__assign({}, order), { deliveryDate: newValue === null || newValue === void 0 ? void 0 : newValue.format() }));
            }, renderInput: function (params) { return _jsx(TextField, __assign({ sx: { width: '100%' } }, params)); } }) })));
};
export default DatePickers;
