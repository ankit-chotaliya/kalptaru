import React, { useState } from 'react'
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import './Settings.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'

const Settings = () => {
    const [mobileNo,setMobileNo]=useState("1234567890");
    const [password,setPassWord]=useState("Abc@2022");
    const [showPassword,setShowPassWord]=useState(false);
    const [addClientModal,setAddClientModal]=useState(false);
    const [addKarigarModal,setAddKarigarModal]=useState(false);

    const handleClient=(e)=>{
        e.preventDefault();
        setAddClientModal(true);
    }

    const handleAddKarigar=(e)=>{
        e.preventDefault();
        setAddKarigarModal(true);
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
              <AiOutlineArrowLeft/> Settings
            </div>
            
            <div className='co-container mt-4'>
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
                <div className='co-customer-share mt-4'>
                  
                   <button className='co-share-btn' onClick={handleClient}>
                        Add Client
                   </button>
                   <AddClient
                    show={addClientModal}
                    onHide={() => setAddClientModal(false)}
                    />
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
            </div>
           
        </div>
    </>
  )
}

export default Settings