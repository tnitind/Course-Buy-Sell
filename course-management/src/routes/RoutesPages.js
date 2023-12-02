import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from '../pages/MainPage/Landing';
import Login from "../pages/Login/Login";
import UserRegister from "../pages/User/UserRegister";
import SellerRegister from '../pages/Seller/SellerRegistration/SellerRegister';
import SellerDashboard from '../../src/pages/Seller/SellerDashboard/SellerDashboard';
import CreateCourse from '../pages/Seller/CreateCourse/CreateCourse';
import SellerForm from '../pages/Seller/SellerForm/SellerForm';
import NotFound from '../pages/NotFound/NotFound';
import Courses from '../pages/CourseDisplay/Courses';
import CourseBigView from '../components/coursebigview/CourseBigView';
import Cart from '../pages/Cart/Cart';
import Coursedisplay from '../components/coursetemplate/coursedisplay';
import Userdashboard from '../pages/User/userDashboard/userdashboard';
import Userlogin from '../pages/User/UserLogin/UserLogin';
import Buyitem from '../pages/User/Item/OrderItem';
import Buycoin from '../pages/User/Buycoins/Buycoins';
import Showcourse from '../components/coursebigview/Sellerbigview';
import Razorpay from '../components/Rszorpay/Razorpay';
import Paymentsuccess from '../components/Rszorpay/Paymentsuccess';

const RoutesPages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/sellerlogin" element={<Login/>} />
        <Route path="/register" element={<UserRegister/>} />
        <Route path="/sellerregister" element={<SellerRegister/>} />
        <Route path="/sellerdashboard" element={<SellerDashboard/>} />
        <Route path="/createcourse" element={<CreateCourse/>} />
        <Route path="/sellerForm" element={<SellerForm/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courseview/:id" element={<CourseBigView />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/display" element={<Coursedisplay/>} />
        <Route path="/userdashboard" element={<Userdashboard/>} />
        <Route path="/userlogin" element={<Userlogin/>} />
        <Route path="/buyitem/:id/:buyer/:email/:Name" element={<Buyitem/>} />
        <Route path="/buycoin" element={<Buycoin/>} />
        <Route path="/razorpay" element={<Razorpay/>} /> 
        <Route path="/paymentsuccess" element={<Paymentsuccess/>} />
        <Route path="/showcourse/:id" element={<Showcourse/>} /> 
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default RoutesPages;
