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
import { useState, useEffect } from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addUser, updateUser } from '../../features/user/userAsync';
// props are from .../pages/admin/UserDetails.tsx
var UserForm = function (_a) {
    var userId = _a.userId, setUserId = _a.setUserId;
    var _b = useState({
        userName: '',
        phone: '',
    }), userState = _b[0], setUserState = _b[1];
    var dispatch = useAppDispatch();
    var userInfoForEdit = useAppSelector(function (state) {
        return userId ? state.user.users.find(function (us) { return us._id === userId; }) : null;
    });
    useEffect(function () {
        if (userInfoForEdit)
            setUserState(userInfoForEdit);
    }, [userInfoForEdit]);
    var clear = function () {
        setUserState({
            userName: '',
            phone: '',
        });
    };
    return (_jsx("div", { children: _jsx("form", { children: _jsxs(Box, __assign({ display: 'flex', flexDirection: 'column', maxWidth: 400, alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: 5, padding: 3, borderRadius: 5, boxShadow: '5px 5px 10px #ccc', sx: {
                    ':hover': {
                        boxShadow: '10px 10px 20px #ccc',
                    },
                } }, { children: [_jsx(Typography, __assign({ variant: 'h5', padding: 3, textAlign: 'center' }, { children: "Edit User" })), _jsx(TextField, { variant: 'outlined', label: 'Name', type: 'text', margin: 'normal', value: userState.userName, onChange: function (e) {
                            return setUserState(__assign(__assign({}, userState), { userName: e.target.value }));
                        } }), _jsx(TextField, { variant: 'outlined', label: 'Phone Number', type: 'text', margin: 'normal', value: userState.phone, onChange: function (e) {
                            return setUserState(__assign(__assign({}, userState), { phone: e.target.value }));
                        } }), _jsx(Button, __assign({ variant: 'contained', color: 'warning', sx: { marginTop: 3, borderRadius: 2 }, onClick: function () {
                            if (userId !== '') {
                                var update = { id: userId, updateInfo: userState };
                                dispatch(updateUser(update));
                                setUserId('');
                                clear();
                            }
                            else {
                                dispatch(addUser(userState));
                                clear();
                            }
                        } }, { children: "Update" }))] })) }) }));
};
export default UserForm;
