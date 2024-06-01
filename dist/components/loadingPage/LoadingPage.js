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
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
export default function CircularColor() {
    return (_jsx(Box, __assign({ sx: { marginTop: '50px' } }, { children: _jsx(CircularProgress, { color: 'secondary', size: 70 }) })));
}
