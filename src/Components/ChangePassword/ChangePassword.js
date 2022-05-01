import React, { useState } from 'react'
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import './ChangePassword.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate=useNavigate();
    const [mobileNo,setMobileNo]=useState("");
    const [password,setPassWord]=useState("");
    const [showPassword,setShowPassWord]=useState(false);
    const [cpassword,setcPassWord]=useState("");
   
    const handleLogin=(e)=>{
        e.preventDefault();
        alert("Changed Successfull!");
        navigate("/Login");
    }

    const handlepassword=(e)=>{
        setShowPassWord(true);
        setPassWord(e.target.value);
    }
    const handlecpassword=(e)=>{
        setShowPassWord(true);
        setcPassWord(e.target.value);
    }
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate("/")}/> Change Password
            </div>
            
            <div className='co-container mt-4'>
                <div className='st-mobile mt-2'>
                    <label htmlFor='st-pass'>Password</label>
                    <br/>
                    <div className='st-mob-sub'>
                    <input 
                    type={showPassword?"text":"password"}
                    className='st-mob-input'
                    placeholder='Password'
                    value={password}
                    onChange={handlepassword}
                    onFocus={()=>{setShowPassWord(true)}}
                    onBlur={()=>{setShowPassWord(false)}}
                    id="st-pass"
                    />
                    <FiEdit3 className='st-mob-icon'/>
                    </div>
                </div>
                <div className='st-mobile mt-2'>
                    <label htmlFor='st-pass'>Confirm Password</label>
                    <br/>
                    <div className='st-mob-sub'>
                    <input 
                    type={showPassword?"text":"password"}
                    className='st-mob-input'
                    placeholder='Confirm Password'
                    value={cpassword}
                    onChange={handlecpassword}
                    onFocus={()=>{setShowPassWord(true)}}
                    onBlur={()=>{setShowPassWord(false)}}
                    id="st-pass"
                    />
                    <FiEdit3 className='st-mob-icon'/>
                    </div>
                </div>
                <div className='co-customer-share mt-4'>
                  
                   <button className='co-share-btn' onClick={handleLogin}>
                        Log in
                   </button>
                </div>
                
            </div>
           
        </div>
    </>
  )
}

export default ChangePassword