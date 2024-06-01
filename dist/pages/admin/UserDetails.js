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
import UserForm from '../../components/forms/UserForm';
import UserTable from '../../components/tables/usersTable/UsersTable';
import { Container } from '@mui/material';
var UserDetails = function () {
    var _a = useState(''), userId = _a[0], setUserId = _a[1];
    return (_jsxs(Container, __assign({ style: { padding: '150px 0px', width: '100%' } }, { children: [_jsx(UserTable, { setUserId: setUserId }), _jsx(UserForm, { userId: userId, setUserId: setUserId })] })));
};
export default UserDetails;
