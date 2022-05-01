import React, { useState } from 'react'
import './OTPverify.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const OTPverify = () => {
    const navigate=useNavigate();
    const [mobileNo,setMobileNo]=useState("");
    const [password,setPassWord]=useState("");
    const [showPassword,setShowPassWord]=useState(false);
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("OTP verified");
        navigate("/ChangePassword");
    }

    const handlepassword=(e)=>{
        setShowPassWord(true);
        setPassWord(e.target.value);
    }
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate("/")}/> OTP Verification
            </div>
            
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
            
            </div>
                <div className='co-customer-share mt-4'>
                  
                   <button className='co-share-btn' onClick={handleSubmit}>
                        Submit
                   </button>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default OTPverify