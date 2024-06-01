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
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Button, Box, Typography, TextField } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { addCake, updateCake } from '../../features/cake/cakeAsync';
// pages/admin/CakeDetails.tsx
var CakeForm = function (_a) {
    var cakeId = _a.cakeId, setCakeId = _a.setCakeId;
    var _b = useState({
        name: '',
        price: 0,
        description: '',
        selectedFile: '',
    }), cakeFormState = _b[0], setCakeFormState = _b[1];
    var dispatch = useAppDispatch();
    var cakeInfoForEdit = useAppSelector(function (state) {
        return cakeId ? state.cake.cakes.find(function (ca) { return ca._id === cakeId; }) : null;
    });
    useEffect(function () {
        if (cakeInfoForEdit)
            setCakeFormState(cakeInfoForEdit);
    }, [cakeInfoForEdit]);
    var clear = function () {
        setCakeFormState({
            name: '',
            price: 0,
            description: '',
            selectedFile: '',
        });
    };
    return (_jsx("div", { children: _jsx("form", { children: _jsxs(Box, __assign({ display: 'flex', flexDirection: 'column', maxWidth: 400, alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: 5, padding: 3, borderRadius: 5, boxShadow: '5px 5px 10px #ccc', sx: {
                    ':hover': {
                        boxShadow: '10px 10px 20px #ccc',
                    },
                } }, { children: [_jsx(Typography, __assign({ variant: 'h5', padding: 3, textAlign: 'center' }, { children: (cakeId === '') ? 'Create Cake' : 'Edit Cake' })), _jsx(TextField, { variant: 'outlined', label: 'Cake Name', type: 'text', margin: 'normal', value: cakeFormState.name, onChange: function (e) {
                            return setCakeFormState(__assign(__assign({}, cakeFormState), { name: e.target.value }));
                        } }), _jsx(TextField, { variant: 'outlined', label: 'Description', type: 'text', margin: 'normal', value: cakeFormState.description, onChange: function (e) {
                            return setCakeFormState(__assign(__assign({}, cakeFormState), { description: e.target.value }));
                        } }), _jsx(TextField, { variant: 'outlined', label: 'Price', type: 'number', margin: 'normal', value: cakeFormState.price, onChange: function (e) {
                            return setCakeFormState(__assign(__assign({}, cakeFormState), { price: parseInt(e.target.value) }));
                        } }), _jsx(FileBase64, { type: 'file', multiple: false, onDone: function (_a) {
                            var base64 = _a.base64;
                            return setCakeFormState(__assign(__assign({}, cakeFormState), { selectedFile: base64 }));
                        } }), _jsx(Button, __assign({ variant: 'contained', color: 'warning', sx: { marginTop: 3, borderRadius: 2 }, onClick: function () {
                            if (cakeId !== '') {
                                var update = { id: cakeId, updateInfo: cakeFormState };
                                dispatch(updateCake(update));
                                setCakeId('');
                                clear();
                            }
                            else {
                                dispatch(addCake(cakeFormState));
                                clear();
                            }
                        } }, { children: "Save" }))] })) }) }));
};
export default CakeForm;
