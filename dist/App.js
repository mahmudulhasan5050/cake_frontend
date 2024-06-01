import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/appBar/Header';
import AuthComp from './components/AuthComp';
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/admin/OrderDetails';
import CakeDetails from './pages/admin/CakeDetails';
import UserDetails from './pages/admin/UserDetails';
import SignUpInForm from './pages/SignUpInForm';
import OrderCake from './components/orderCake/OrderCake';
import Landing from './pages/Landing';
function App() {
    // This hook is used to show Landing page show only once
    var _a = useState(false), landingPageButton = _a[0], setLandingPageButton = _a[1];
    // const [landingPageButton, setLandingPageButton] = useState(() => {
    //   const savedState = localStorage.getItem('landingPageButton');
    //   return savedState ? JSON.parse(savedState) : false;
    // });
    var handleLandingButtonClick = function () {
        setLandingPageButton(true);
    };
    // useEffect(() => {
    //   localStorage.setItem(
    //     'landingPageButton',
    //     JSON.stringify(landingPageButton)
    //   );
    // }, [landingPageButton]);
    console.log(landingPageButton);
    return (_jsxs("div", { children: [_jsx(Header, { landingPageButton: landingPageButton }), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: landingPageButton ? (_jsx(Home, {})) : (_jsx(Landing, { handleLandingButtonClick: handleLandingButtonClick })) }), _jsx(Route, { path: '/orderCake/:cakeId/:userId', element: _jsx(OrderCake, {}) }), _jsx(Route, { path: '/myorders', element: _jsx(MyOrders, { setLandingPageButton: setLandingPageButton }) }), _jsx(Route, { path: '/orderdetails', element: _jsx(AuthComp, { children: _jsx(OrderDetails, {}) }) }), _jsx(Route, { path: '/cakedetails', element: _jsx(AuthComp, { children: _jsx(CakeDetails, {}) }) }), _jsx(Route, { path: '/userdetails', element: _jsx(AuthComp, { children: _jsx(UserDetails, {}) }) }), _jsx(Route, { path: '/auth', element: _jsx(SignUpInForm, {}) })] })] }));
}
export default App;
