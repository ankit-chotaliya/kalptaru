import React, { useState, useEffect } from 'react';
import './AdminLogin.css';
import logo from './logo.png';
import { FiEdit3 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { adminLogin } from '../../../actions/admin.action';

function AdminLogin() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [showPassword, setShowPassWord] = useState(false);
    const dispatch = useDispatch();

    const admin = useSelector(state => state.admin)

        useEffect(() => {
            if (admin.success && admin.authenticate) {
            navigate("/AdminHome");
            }
        }, [admin.success])
    
    const handleLogin = (e) => {
        e.preventDefault();
        const dataObj = {
            email: Email,
            password: password
        }
        dispatch(adminLogin(dataObj)).then(()=>{
           console.log('here');
        }).catch(()=>{
            console.log('Error');
        });
    }
    const handlepassword = (e) => {
        setShowPassWord(true);
        setPassWord(e.target.value);
    }
    return (
        <>
            <div className='navbar'>
                <div className="container">
                    <img className='m-2' src={logo} />
                    <p className='nav_logotext'>Shree Kalptaru</p>
                </div>
            </div>
        <form>
            <div className='container no-main no-border pageview'>
                <div className='co-container mt-4'>
                    <p className='nav_logotext' id="title">Admin Login</p>
                    <div className='st-mobile mt-5'>
                        <label htmlFor='st-mob'>Email</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type="text"
                                className='st-mob-input'
                                placeholder='Email'
                                value={Email}
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
                    <div className='co-customer-share mt-4'>

                        <button className='co-share-btn' onClick={handleLogin}>
                            Log in
                        </button>
                    </div>
                </div>

            </div>
        </form>    
        </>
    );
}

export default AdminLogin;