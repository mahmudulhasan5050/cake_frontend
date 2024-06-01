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
import { styled } from '@mui/system';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import BackGroundImage from '../assets/images/background.jpg';
var LandingContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '88vh',
    backgroundImage: "url(".concat(BackGroundImage, ")"),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
});
var Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Half-transparent black
});
var Content = styled(Box)({
    position: 'relative',
    zIndex: 1,
});
var Landing = function (_a) {
    var handleLandingButtonClick = _a.handleLandingButtonClick;
    var theme = useTheme();
    var mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (_jsxs(LandingContainer, __assign({ style: { textAlign: 'center', padding: '50px 20px' } }, { children: [_jsx(Overlay, {}), _jsxs(Content, { children: [_jsxs(Typography, __assign({ variant: mdDown ? 'h4' : 'h2', gutterBottom: true }, { children: ["Welcome to Our ", _jsx("br", {}), " Bake & Cake"] })), _jsx(Typography, __assign({ variant: 'h5', paragraph: true }, { children: "Discover our delicious cakes." })), _jsx(Button, __assign({ onClick: handleLandingButtonClick, variant: 'contained', color: 'primary' }, { children: "Our Cakes" }))] })] })));
};
export default Landing;
