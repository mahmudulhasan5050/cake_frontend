import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";
var AuthComp = function (_a) {
    var children = _a.children;
    var isLoggedIn = useAppSelector(function (state) { return state.auth.authInfo.isLoggedIn; });
    return (_jsx(_Fragment, { children: isLoggedIn ? children : _jsx(Navigate, { replace: true, to: '/signin' }) }));
};
export default AuthComp;
