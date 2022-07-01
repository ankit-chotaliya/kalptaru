import React, { useEffect, useState, CSSProperties } from 'react'
import AddClient from '../AddClient/AddClient';
import AddClientCsv from '../AddClient/AddClientCsv';
import AddKarigarCsv from '../AddKarigar/AddKarigarCsv';
import AddKarigar from '../AddKarigar/AddKarigar';
import { GrFormView } from 'react-icons/gr'
import './Settings.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Helper/Loader/Loader'


const Settings = () => {
    const navigate = useNavigate();
    const clients = useSelector(state => state.client);
    const karigars = useSelector(state => state.karigar);
    const user = useSelector(state => state.user);
    const data = user.data.user;
    
    //react-hook
    const [mobileNo, setMobileNo] = useState("1234567890");
    const [password, setPassWord] = useState("Abc@2022");
    const [showPassword, setShowPassWord] = useState(false);
    const [showMobileNo, setShowMobileNo] = useState(false);
    const [addClientModal, setAddClientModal] = useState(false);
    const [addClientCsvModal, setAddClientCsvModal] = useState(false);
    const [addKarigarCsvModal, setAddKarigarCsvModal] = useState(false);
    const [addKarigarModal, setAddKarigarModal] = useState(false);


    useEffect(() => {
        //    console.log("hii"); 
    }, []);

    const handleClient = (e) => {
        e.preventDefault();
        setAddClientModal(true);
    }


    const handleClientCsv = (e) => {
        e.preventDefault();
        setAddClientCsvModal(true);
    }

    const handleAddKarigar = (e) => {
        e.preventDefault();
        setAddKarigarModal(true);
    }

    const handleAddKarigarCsv = (e) => {
        e.preventDefault();
        setAddKarigarCsvModal(true);
    }

    const handlemobileNo = (e) => {
        e.preventDefault();
        if (showMobileNo==false) {
            setShowMobileNo(true);
            setMobileNo(data.contact)
        } else {
            setShowMobileNo(false);
            setMobileNo("1234567890")
        }
    }

    const handlePasswordChange = () => {
        console.log(" password change");
        navigate("/ForgotPassword")
    }

    const Passwordshow = (e) =>{
        e.preventDefault();
        if (showPassword==false) {
            setShowPassWord(true);
            setPassWord(data.password)
        } else {
            setShowPassWord(false);
        }
    }

    return (
        <>
            <Navbar />

            {
                (clients.loading || karigars.loading) ? <Loader /> : <div className='container no-main no-border pageview'>
                    <div className='no-heading'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Settings
                    </div>

                    <div className='co-container mt-4'>
                        <div className='st-mobile mt-2'>
                            <label htmlFor='st-mob'>Phone No.</label>
                            <br />
                            <div className='st-mob-sub'>
                                <input
                                    disabled
                                    type="text"
                                    className='st-mob-input'
                                    placeholder='Mobile Number'
                                    value={mobileNo}
                                    id="st-mob"
                                />
                                <GrFormView className='st-mob-icon' onClick={handlemobileNo} />
                            </div>
                        </div>
                        <div className='st-mobile mt-2'>
                            <label htmlFor='st-pass'>Password</label>
                            <br />
                            <div className='st-mob-sub'>
                                <input
                                    disabled
                                    type={showPassword ? "text" : "password"}
                                    className='st-mob-input'
                                    placeholder='Password'
                                    value={password}
                                    onFocus={() => { setShowPassWord(true) }}
                                    onBlur={() => { setShowPassWord(false) }}
                                    id="st-pass"
                                />
                                <GrFormView className='st-mob-icon' onClick={Passwordshow} />
                            </div>
                        </div>
                        <div className='co-customer-share mt-4'>

                            <button className='co-share-btn' onClick={handlePasswordChange}>
                                Change Password
                            </button>
                        </div>

                        <div className='st-mobile mt-2'>
                            <br />
                            <div className='st-mob-sub'>

                            </div>
                        </div>
                        <div className='co-customer-share mt-4'>

                            <button className='co-share-btn' onClick={handleClient}>
                                Add Client
                            </button>
                            <AddClient
                                show={addClientModal}
                                onHide={() => setAddClientModal(false)}
                            />
                        </div>

                        <div className='co-customer-share mt-4'>

                            <button className='co-share-btn' onClick={handleClientCsv}>
                                Add Client Using CSV
                            </button>
                            <AddClientCsv
                                show={addClientCsvModal}
                                onHide={() => setAddClientCsvModal(false)}
                            />
                        </div>

                        <div className='st-mobile mt-2'>
                            <br />
                            <div className='st-mob-sub'>

                            </div>
                        </div>

                        <div className='co-karigar-share mt-4'>
                            <button className='co-share-btn' onClick={handleAddKarigar}>
                                Add Karigar
                            </button>
                            <AddKarigar
                                show={addKarigarModal}
                                onHide={() => setAddKarigarModal(false)}
                            />
                        </div>

                        <div className='co-karigar-share mt-4'>
                            <button className='co-share-btn' onClick={handleAddKarigarCsv}>
                                Add Karigar USing CSV
                            </button>
                            <AddKarigarCsv
                                show={addKarigarCsvModal}
                                onHide={() => setAddKarigarCsvModal(false)}
                            />
                        </div>
                    </div>

                </div>
            }

        </>
    )
}

export default Settings