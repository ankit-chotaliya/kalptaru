import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import NewOrder from './Components/NewOrder/NewOrder';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Editorder from './Components/EditOrder/editOrder';
import EditOrder2 from './Components/EditOrder/editOrder2';
import EditOrderForm from './Components/EditOrder/EditOrderForm';
import SendReminder from "./Components/SendReminder/SendReminder";
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
import TrackOrder from './Components/TrackOrder/TrackOrder';
import ModalButton from './Components/Helper/ModalButton/ModalButton';
import Settings from './Components/Settings/Settings';
import CompletedOrder from './Components/CompletedOrder/CompletedOrder';
import OrderStatus from './Components/OrderStatus/OrderStatus';
import LogIn from './Components/Signin/Login';
import Register from './Components/Signup/Register';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import OTPverify from './Components/OTPverify/OTPverify';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import { useDispatch } from 'react-redux';
import { getAllOrders } from './actions';


const App = () => {
  const dispatch=useDispatch();

  // useEffect(()=>{

  // },[]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [])
  
  return (
    <>

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/create" exact element={<NewOrder/>}/>
        <Route path="/orderConfirm" exact element={<ConfirmOrder show={false}/>}/>
        <Route path="/EditOrder" exact element={<Editorder/>}/>
        <Route path="/EditOrderForm" exact element={<EditOrderForm/>}/>
        <Route path="/settings" exact element={<Settings/>}/>
        <Route path="/modal" exact element={<ModalButton/>}/>
        <Route path="/SendReminder" exact element={<SendReminder/>}/>
        <Route path="/CompletedOrders" exact element={<CompletedOrder/>}/>
        <Route path="/TrackOrder" exact element={<TrackOrder/>}/>
        <Route path="/OrderView" exact element={<EditOrder2/>}/>
        <Route path="/OrderStatus" exact element={<OrderStatus/>}/>
        <Route path="/Login" exact element={<LogIn/>}/>
        <Route path="/Register" exact element={<Register/>}/>
        <Route path="/ForgotPassword" exact element={<ForgotPassword/>}/>
        <Route path="/OTPverify" exact element={<OTPverify/>}/>
        <Route path="/ChangePassword" exact element={<ChangePassword/>}/>
      </Routes>
    </>
  )
}

export default App
