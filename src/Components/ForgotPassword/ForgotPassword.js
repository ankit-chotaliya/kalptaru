import React, { useEffect, useState } from 'react'
import './ForgotPassword.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { otpsendForgotPassword } from '../../actions';

const ForgotPassword = () => {
    const navigate=useNavigate();
    const [mobileNo,setMobileNo]=useState("");
    const [password,setPassWord]=useState("");
    const [showPassword,setShowPassWord]=useState(false);
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const dataObj={
            contact:mobileNo
        }
        dispatch(otpsendForgotPassword(dataObj));
    }

    const handlepassword=(e)=>{
        setShowPassWord(true);
        setPassWord(e.target.value);
    }

    useEffect(()=>{
        if(user.success && user.data.accesstoken){
            navigate("/forgotpasswordotpverify")
        }
    },[user])
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate("/")}/> Forgot Password
            </div>
            <form onSubmit={handleSubmit}>
            <div className='co-container mt-4'>
                <div className='st-mobile mt-2'>
                    <label htmlFor='st-mob'>Enter Registered Phone No.</label>
                    <br/>
                    <div className='st-mob-sub'>
                    <input 
                    type="text"
                    className='st-mob-input'
                    placeholder='Mobile Number'
                    value={mobileNo}
                    onChange={(e)=>{setMobileNo(e.target.value)}}
                    id="st-mob"
                    />
                    <FiEdit3 className='st-mob-icon'/>
                    </div>
                </div>
                <div className='co-customer-share mt-4'>
                  
                   <button type="submit" className='co-share-btn'>
                        Send OTP
                   </button>
                </div>
            </div>
            </form>
            
           
        </div>
    </>
  )
}

export default ForgotPassword