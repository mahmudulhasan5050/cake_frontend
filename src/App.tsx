import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
  const [landingPageButton, setLandingPageButton] = useState(false)
  // const [landingPageButton, setLandingPageButton] = useState(() => {
  //   const savedState = localStorage.getItem('landingPageButton');
  //   return savedState ? JSON.parse(savedState) : false;
  // });
  const handleLandingButtonClick = () => {
    setLandingPageButton(true);
  };

  // useEffect(() => {
  //   localStorage.setItem(
  //     'landingPageButton',
  //     JSON.stringify(landingPageButton)
  //   );
  // }, [landingPageButton]);

  console.log(landingPageButton);
  return (
    <div>
      <Header landingPageButton={landingPageButton} />
      <Routes>
        <Route
          path='/'
          element={
            landingPageButton ? (
              <Home/>
            ) : (
              <Landing handleLandingButtonClick={handleLandingButtonClick} />
            )
          }
        />
        <Route path='/orderCake/:cakeId/:userId' element={<OrderCake />} />
        <Route path='/myorders' element={<MyOrders setLandingPageButton={setLandingPageButton} />} />
        <Route
          path='/orderdetails'
          element={
            <AuthComp>
              <OrderDetails/>
            </AuthComp>
          }
        />
        <Route
          path='/cakedetails'
          element={
            <AuthComp>
              <CakeDetails/>
            </AuthComp>
          }
        />
        <Route
          path='/userdetails'
          element={
            <AuthComp>
              <UserDetails/>
            </AuthComp>
          }
        />
        <Route path='/auth' element={<SignUpInForm />} />
      </Routes>
    </div>
  );
}

export default App;
