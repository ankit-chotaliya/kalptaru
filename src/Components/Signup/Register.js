import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import './Register.css';
import logo from './logo.png';
import { registration } from '../../actions/user.action';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import Loader from "../Helper/Loader/Loader"

const Register = () => {
    const navigate = useNavigate();
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullName] = useState("");
    const [password, setPassWord] = useState("");
    const [cpassword, setcPassWord] = useState("");
    const [showPassword, setShowPassWord] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.success) {
            navigate("/");
        }
    }, [user.success])

    const handleRegister = (e) => {
        e.preventDefault();
        if (mobileNo.length < 10 || mobileNo.length > 10) {
            alert("Mobile No. is not valid!");
            return;
        }

        if (fullname.length <= 3) {
            alert("fullname should be proper");
            return;
        }

        if (!RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/).test(password)) {
            alert("Password is not valid");
            return;
        }

        if (cpassword !== password) {
            alert("Confirm password should be same as Password")
        }

        // alert("Registration Successfull!");
        // navigate("/");
        const dataObj = {
            fullname: fullname,
            email:email,
            contact: mobileNo,
            password: password
        }

        dispatch(registration(dataObj))

    }

    const handlepassword = (e) => {
        setShowPassWord(true);
        setPassWord(e.target.value);
    }

    const handlecpassword = (e) => {
        setShowPassWord(true);
        setcPassWord(e.target.value);
    }
    return (
        <>{
         user.loading?<Loader
            msg="Please Wait.."
         />:<><div className='navbar'>
                <div className="container">
                    <img className='m-2' src={logo} />
                    <p className='nav_logotext'>Shree Kalptaru</p>
                </div>
            </div>
            <div className='container no-main no-border pageview'>

                <div className='co-container mt-4'>
                    <p className='nav_logotext' id="title">User Registration</p>
                    <div className='st-mobile mt-5'>
                        <label htmlFor='st-mob'>Full Name</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type="text"
                                className='st-mob-input'
                                placeholder='Full Name'
                                value={fullname}
                                onChange={(e) => { setFullName(e.target.value) }}
                                id="st-mob"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='st-mobile mt-2'>
                        <label htmlFor='st-mob'>Phone No.</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type="text"
                                className='st-mob-input'
                                placeholder='Mobile Number'
                                value={mobileNo}
                                onChange={(e) => { setMobileNo(e.target.value) }}
                                id="st-mob"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='st-mobile mt-2'>
                        <label htmlFor='st-mob'>E-Mail</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type="text"
                                className='st-mob-input'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                id="st-mob"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='st-mobile mt-2'>
                        <label htmlFor='st-pass'>Password</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type={showPassword ? "text" : "password"}
                                className='st-mob-input'
                                placeholder='Password'
                                value={password}
                                onChange={handlepassword}
                                onFocus={() => { setShowPassWord(true) }}
                                onBlur={() => { setShowPassWord(false) }}
                                id="st-pass"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='st-mobile mt-2'>
                        <label htmlFor='st-pass'>Confirm Password</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type={showPassword ? "text" : "password"}
                                className='st-mob-input'
                                placeholder='Confirm Password'
                                value={cpassword}
                                onChange={handlecpassword}
                                onFocus={() => { setShowPassWord(true) }}
                                onBlur={() => { setShowPassWord(false) }}
                                id="st-pass"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='co-customer-share mt-4'>

                        <button className='co-share-btn' onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                    <div className='co-karigar-share mt-4'>
                        <button className='co-share-btn' onClick={() => navigate("/Login")}>
                            Already have an Account?
                        </button>
                    </div>
                </div>
 
            </div>
            </>
        }
        </>
    )

}

export default Register