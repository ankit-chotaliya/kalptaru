import React, { useEffect, useState } from 'react'
import './Login.css';
import logo from './logo.png';
import { FiEdit3 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user.action';
import { useSelector } from 'react-redux';
import Loader from '../Helper/Loader/Loader';
import adminReducer from '../../reducers/admin.reducer';
const LogIn = () => {
    const navigate = useNavigate();
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassWord] = useState("");
    const [showPassword, setShowPassWord] = useState(false);
    const [idToast, setidToast] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const admin = useSelector(state => state.admin)
    useEffect(() => {
        if (user.success && user.authenticate) {
          navigate("/");
        }else if(admin.success && admin.authenticate){
            navigate("/adminhome");
        }
    }, [user.success,admin.success])
    const handleLogin = (e) => {
        e.preventDefault();

        if (mobileNo.length < 10 || mobileNo.length > 10) {
            alert("Mobile No. is not valid!");
            return;
        }

        if (!RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/).test(password)) {
            alert("Password is not valid");
            return;
        }

        const dataObj = {
            contact: mobileNo,
            password: password
        }
        dispatch(login(dataObj)).then(() => {
            // console.log("here");
        }).catch(() => {
            // console.log("err here");
        });
        setidToast(idToast + 1);
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

            {
                // <Loader msg={user.msg}/>
            }
            {
                user.loading ? <Loader msg={user.msg} /> : <div className='container no-main no-border pageview'>

                    <div className='co-container mt-4'>
                        <p className='nav_logotext' id="title">User Login</p>
                        <div className='st-mobile mt-5'>
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
                            <span style={{ marginLeft: "0", marginTop: "10px" }}>
                                <Link to="/ForgotPassword">Forgot Password?</Link>
                            </span>
                        </div>
                        <div className='co-customer-share mt-4'>

                            <button className='co-share-btn' onClick={handleLogin}>
                                Log in
                            </button>
                        </div>
                        {/* <div className='co-karigar-share mt-4'>
                            <button className='co-share-btn' onClick={() => { navigate("/Register") }}>
                                Don't have an Account?
                            </button>
                        </div> */}
                    </div>

                </div>
            }
        </>
    )
}

export default LogIn