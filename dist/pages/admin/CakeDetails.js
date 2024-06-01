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
import { useState } from 'react';
import CakeForm from '../../components/forms/CakeForm';
import CakeTable from '../../components/tables/cakeTable/CakeTable';
import { Container } from '@mui/material';
var CakeDetails = function () {
    var _a = useState(''), cakeId = _a[0], setCakeId = _a[1];
    return (_jsxs(Container, __assign({ style: { padding: '150px 0px', width: '100%' } }, { children: [_jsx(CakeTable, { setCakeId: setCakeId }), _jsx(CakeForm, { cakeId: cakeId, setCakeId: setCakeId })] })));
};
export default CakeDetails;
