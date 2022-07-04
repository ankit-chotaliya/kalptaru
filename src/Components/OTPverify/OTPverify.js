import React, { useEffect, useState } from 'react'
import './OTPverify.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToastMsg } from '../../actions/toast.action';
import { otpverify, registration } from '../../actions/user.action';
import Loader from '../Helper/Loader/Loader';

const OTPverify = () => {
    const navigate=useNavigate();
    const [mobileNo,setMobileNo]=useState("");
    const [password,setPassWord]=useState("");
    const [showPassword,setShowPassWord]=useState(false);
    const [token,setToken]=useState("");
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        if(password=="" || password.length!=6){
            dispatch(setToastMsg("OTP is not valid!",true));
            return;
        }
        if(token==""){
            dispatch(setToastMsg("Something went wrong! try again",true));
            return;
        }
        const dataobj={
            otp:password,
            token:token
        }
        const formData=new FormData();
        formData.append("otp",password);
        formData.append("token",token);
        dispatch(otpverify(dataobj));
    }
    const handleresend=(e)=>{
        e.preventDefault();
        const dataobj={
            fullname:user.data.user.fullname,
            contact:user.data.user.mobileNo,
            password:user.data.user.password,
            count:user.data.user.count
        }
        dispatch(registration(dataobj))
    }
    const handlepassword=(e)=>{
        setShowPassWord(true);
        setPassWord(e.target.value);
    }

    useEffect(()=>{
        if(user.success){
            if(user.data.accesstoken){
                const t=user.data.accesstoken;
                setToken(t);
            }
        }
    },[])

    useEffect(()=>{
        if(user.success && user.otpVerified){
            navigate("/login");
        }
    },[user])
  return (
    <>
    <Navbar/>
        {user.loading?<Loader msg="Verifing.."/>:<div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate("/login")}/> OTP Verification
            </div>
            <form onSubmit={handleSubmit}>
            <div className='co-container mt-4'>
            <div className='st-mobile mt-2'>
                <label htmlFor='st-pass'>OTP</label>
                <br/>
                <div className='st-mob-sub'>
                <input 
                type={showPassword?"text":"password"}
                className='st-mob-input'
                placeholder='Enter OTP'
                value={password}
                onChange={handlepassword}
                onFocus={()=>{setShowPassWord(true)}}
                onBlur={()=>{setShowPassWord(false)}}
                id="st-pass"
                />
                <FiEdit3 className='st-mob-icon'/>
                </div>
                <span style={{ marginLeft: "0", marginTop: "10px" }}>
                    <button className='resent-otp' onClick={handleresend}>Resend OTP?</button>
                </span>
            </div>
                <div className='co-customer-share mt-4'>
                  
                   <button type="submit" className='co-share-btn'>
                        Submit
                   </button>
                </div>
            </div>
            </form>
        </div>}
    </>
  )
}

export default OTPverify