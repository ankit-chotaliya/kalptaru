import React, { useState } from 'react'
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import './Settings.css';
import Navbar from '../NavBar/Navbar';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Settings = () => {
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
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border'>
            <div className='no-heading'>
              <AiOutlineArrowLeft/> Settings
            </div>
            
            <div className='co-container mt-4'>
                <div className='st-mobile'>
                    <label htmlFor='st-mob'>Phone No.</label>
                    <br/>
                    <input 
                    type="text"
                    placeholder='Mobile Number'
                    value="8866140344"
                    id="st-mob"
                    />
                </div>
            <div className='st-password'>
                <label htmlFor='st-pass'>Password</label>
                <br/>
                <input 
                type="text"
                placeholder='Password'
                value="Abc@2022"
                id="st-pass"
                />
            </div>
                <div className='co-customer-share mt-2'>
                  
                   <button className='co-share-btn' onClick={handleClient}>
                        Add Karigar
                   </button>
                   <AddClient
                    show={addClientModal}
                    onHide={() => setAddClientModal(false)}
                    />
                </div>
                <div className='co-karigar-share mt-2'>
                    <button className='co-share-btn' onClick={handleAddKarigar}>
                        Add Client
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