import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';

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
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin';
import AdminNavbar from './Components/Admin/AdminNavbar/AdminNavbar';
import AdminUsers from './Components/Admin/AdminUsers/AdminUsers';
import AdminOrders from './Components/Admin/AdminOrders/AdminOrders';
import AdminKarigars from './Components/Admin/AdminKarigars/AdminKarigars';
import AdminClients from './Components/Admin/AdminClients/AdminClients';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllOrders,getAllClient,getAllKarigar, preLoginusingToken,statusOnline,statusOffline } from './actions';
import Loader from './Components/Helper/Loader/Loader';
import ToastHelper from './Components/Helper/ToastHelper/ToastHelper';
import { emptyToastMsg } from './actions/toast.action';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './utils/PrivateRoute';
import AdminHome from './Components/Admin/AdminHome/AdminHome';
import UrgentOrders from './Components/UrgentOrders/UrgentOrders';


const App = () => {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const toastState=useSelector(state=>state.toast);
  const [userId,setUserId]=useState("");
  const [isOnline,setisOnline]=useState(true);
  const navigate=useNavigate();
  let interval=null;
  const InternetErrorMessage=()=>setisOnline(navigator.onLine===true);
  useEffect(()=>{
    if(localStorage.getItem('accessToken1') && !user.authenticate){
      const token=localStorage.getItem('accessToken1').split(" ")[0];
      dispatch(preLoginusingToken({accesstoken:token}));
      
    }
    interval=setInterval(InternetErrorMessage, 1000);

    return()=>{
      clearInterval(interval);
    }
  },[])

  useEffect(()=>{
    if(toastState.isset==true){
      if(toastState.bg=="success"){
        toast.success(toastState.msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      if(toastState.bg=="danger"){
        toast.error(toastState.msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      dispatch(emptyToastMsg());
    }
    
  },[toastState]);

  useEffect(() => {
    if(user.authenticate){
      dispatch(getAllOrders());
      dispatch(getAllClient());
      dispatch(getAllKarigar());
      dispatch(getAllCategory());
      // navigate(-1);
      setUserId(user.data.user._id);
    }
  }, [user]);
  
  // const incrementToast=()=>{
    
  //     setidToast(idToast+1);
      
  // }
  // setInterval(emptyToast,30000);

  useEffect(()=>{
    if(user.success && user.authenticate){
      if(isOnline){
        const dataObj={
          userId:userId
        }
        dispatch(statusOnline(dataObj))
      }else{
        const dataObj={
          userId:userId
        }
        dispatch(statusOffline(dataObj))
      }
    }
    
  },[isOnline])
  return (
    <>
   
      {user.loading?<Loader/>:null}
      {
       <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      }
      <Routes>
        {console.log(isOnline)}
        <Route path="/" exact element={<PrivateRoute isAuthenticated={user.authenticate}><Home/></PrivateRoute>}/>
        <Route path="/AdminLogin" exact element={<AdminLogin/>}/>
        <Route path="/AdminUsers" exact element={<AdminUsers/>}/>
        <Route path="/AdminOrders" exact element={<AdminOrders/>}/>
        <Route path="/AdminKarigars" exact element={<AdminKarigars/>}/>
        <Route path="/AdminClients" exact element={<AdminClients/>}/>
        <Route path="/create" exact element={<PrivateRoute isAuthenticated={user.authenticate}><NewOrder/></PrivateRoute>}/>
        <Route path="/orderConfirm" exact element={<PrivateRoute isAuthenticated={user.authenticate}><ConfirmOrder show={false}/></PrivateRoute>}/>
        <Route path="/EditOrder" exact element={<PrivateRoute isAuthenticated={user.authenticate}><Editorder/></PrivateRoute>}/>
        <Route path="/EditOrderForm/:orderId" exact element={<PrivateRoute isAuthenticated={user.authenticate}><EditOrderForm/></PrivateRoute>}/>
        <Route path="/settings" exact element={<PrivateRoute isAuthenticated={user.authenticate}><Settings/></PrivateRoute>}/>
        <Route path="/modal" exact element={<ModalButton/>}/>
        <Route path="/SendReminder" exact element={<PrivateRoute isAuthenticated={user.authenticate}><SendReminder/></PrivateRoute>}/>
        <Route path="/CompletedOrders" exact element={<PrivateRoute isAuthenticated={user.authenticate}><CompletedOrder/></PrivateRoute>}/>
        <Route path="/TrackOrder" exact element={<PrivateRoute isAuthenticated={user.authenticate}><TrackOrder/></PrivateRoute>}/>
        <Route path="/UrgentOrders" exact element={<PrivateRoute isAuthenticated={user.authenticate}><UrgentOrders/></PrivateRoute>}/>
        <Route path="/OrderView/:orderId" exact element={<PrivateRoute isAuthenticated={user.authenticate}><EditOrder2/></PrivateRoute>}/>
        <Route path="/OrderStatus" exact element={<PrivateRoute isAuthenticated={user.authenticate}><OrderStatus/></PrivateRoute>}/>
        <Route path="/Login" exact element={<LogIn/>}/>
        <Route path="/Register" exact element={<Register/>}/>
        <Route path="/ForgotPassword" exact element={<ForgotPassword/>}/>
        <Route path="/OTPverify" exact element={<OTPverify/>}/>
        <Route path="/ChangePassword" exact element={<ChangePassword/>}/>
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/adminHome" exact element={<AdminHome/>}/>
      </Routes>
    </>
  )
}

export default App
