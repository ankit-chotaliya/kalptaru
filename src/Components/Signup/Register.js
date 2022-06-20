import React, { useState } from 'react'
import './Register.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const [mobileNo,setMobileNo]=useState("");
    const [fullName,setFullName]=useState("");
    const [password,setPassWord]=useState("");
    const [cpassword,setcPassWord]=useState("");
    const [showPassword,setShowPassWord]=useState(false);

    const handleRegister=(e)=>{
        e.preventDefault();
        if(mobileNo.length<10 || mobileNo.length>10){
            alert("Mobile No. is not valid!");
            return;
        }
        
        if (fullName.length<=3) {
         alert("fullname should be proper");
         return;
        }

        if (!RegExp( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/).test(password)) {
            alert("Password is not valid");
            return;
        }

        if (cpassword!==password) {
            alert("Confirm password should be same as Password")
        }

        alert("Registration Successfull!");
        navigate("/");
        
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
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate("/")}/> Register
            </div>
            
            <div className='co-container mt-4'>
                <div className='st-mobile mt-2'>
                    <label htmlFor='st-mob'>Full Name</label>
                    <br/>
                    <div className='st-mob-sub'>
                    <input 
                    type="text"
                    className='st-mob-input'
                    placeholder='Full Name'
                    value={fullName}
                    onChange={(e)=>{setFullName(e.target.value)}}
                    id="st-mob"
                    />
                    <FiEdit3 className='st-mob-icon'/>
                    </div>
                </div>
                <div className='st-mobile mt-2'>
                    <label htmlFor='st-mob'>Phone No.</label>
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
                  
                   <button className='co-share-btn' onClick={handleRegister}>
                        Register
                   </button>
                </div>
                <div className='co-karigar-share mt-4'>
                    <button className='co-share-btn' onClick={()=>navigate("/Login")}>
                       Already have an Account?
                   </button>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Register