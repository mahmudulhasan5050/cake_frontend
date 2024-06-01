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
import { useNavigate } from 'react-router-dom';
import { Grid, Button, useTheme, useMediaQuery, styled } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useAppSelector } from '../../redux/hooks';
var StyledImageList = styled(ImageList)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b[theme.breakpoints.down('sm')] = {
            display: 'block', // Hide ImageList in mobile view
        },
        _b);
});
//props from .... pages/Home.tsx
var CardCake = function (_a) {
    var cake = _a.cake;
    var navigate = useNavigate();
    var theme = useTheme();
    var mdDown = useMediaQuery(theme.breakpoints.down('md'));
    var isLoggedStatus = useAppSelector(function (state) { return state.auth.authInfo; });
    return (_jsx(Grid, __assign({ item: true, container: true, justifyContent: mdDown ? 'center' : 'flex-start', alignItems: 'center', xs: 12, sm: 6, md: 4 }, { children: _jsx(StyledImageList, __assign({ sx: {
                borderRadius: '10px',
                width: mdDown ? '100%' : 'auto',
                margin: mdDown ? '0 auto' : 'inherit', // Centered margin in mobile view
            } }, { children: _jsxs(ImageListItem, __assign({ sx: {
                    position: 'relative',
                    paddingTop: '75%',
                    width: mdDown ? '100%' : '350px',
                    overflow: 'hidden',
                    marginBottom: '20px', // Spacing between items
                } }, { children: [_jsx("img", { srcSet: cake.selectedFile, src: cake.selectedFile, alt: cake.name, loading: 'lazy', style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        } }), _jsx(ImageListItemBar, { title: cake.name, subtitle: cake.description, actionIcon: _jsx(Button, __assign({ variant: 'contained', size: 'small', color: 'warning', onClick: function () {
                                if (isLoggedStatus.isLoggedIn) {
                                    navigate("/ordercake/".concat(cake._id, "/").concat(isLoggedStatus._id));
                                }
                                else {
                                    navigate('/auth');
                                }
                            }, sx: { marginRight: '1em' } }, { children: "Order" })) })] }), cake._id) })) })));
};
export default CardCake;
