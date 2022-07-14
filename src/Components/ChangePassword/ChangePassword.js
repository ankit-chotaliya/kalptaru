import React, { useEffect, useState } from 'react'
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import './ChangePassword.css';
import Navbar from '../NavBar/Navbar';
import logo from '../Signin/logo.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToastMsg } from '../../actions/toast.action';
import { passwordChange } from '../../actions';

const ChangePassword = () => {
    const navigate=useNavigate();
    const [mobileNo,setMobileNo]=useState("");
    const [password,setPassWord]=useState("");
    const [showPassword,setShowPassWord]=useState(false);
    const [token,setToken]=useState("");
    const [cpassword,setcPassWord]=useState("");
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user);
    const handleLogin=(e)=>{
        e.preventDefault();
        if(password=="" || cpassword==""){
            dispatch(setToastMsg("password should not empty",true));
            return;
        }
        if(password!=cpassword){
            dispatch(setToastMsg("password and confirm password should equal",true));
            return;
        }
        const dataobj={
            password:password,
            token:token
        }

        dispatch(passwordChange(dataobj)).then(()=>{
            navigate("/login");
        });
    }

    const handlepassword=(e)=>{
        setShowPassWord(true);
        setPassWord(e.target.value);
    }
    const handlecpassword=(e)=>{
        setShowPassWord(true);
        setcPassWord(e.target.value);
    }

    useEffect(()=>{
        if(user.success){
            if(user.data.accesstoken){
                const t=user.data.accesstoken;
                setToken(t);
            }
        }
    },[user])
  return (
    <>
            <div className='navbar'>
                <div className="container">
                    <img className='m-2' src={logo} />
                    <p className='nav_logotext'>Shree Kalptaru</p>
                </div>
            </div>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate("/")}/> Change Password
            </div>
            <form onSubmit={handleLogin}>
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
                  
                   <button className='co-share-btn' type="submit">
                        Log in
                   </button>
                </div>
                
            </div>
            </form>
        </div>
    </>
  )
}

export default ChangePassword