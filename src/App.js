import React from 'react'
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


const App = () => {
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
        <Route path="/EditOrder2" exact element={<EditOrder2/>}/>
        <Route path="/OrderStatus" exact element={<OrderStatus/>}/>
      </Routes>

    </>
  )
}

export default App
