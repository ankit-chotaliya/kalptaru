import React,{useEffect, useState} from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Helper/Loader/Loader';
import NavBar from '../NavBar/Navbar'
import EditOrderFormHelper from './EditOrderFormHelper';

const EditOrderForm = () => {
    const navigate=useNavigate();
    const order=useSelector(state=>state.order);
    
    return (
        <>
        <NavBar/>
          { order.loading?<Loader msg="Please Wait.."/>:<div className='container no-main no-border pageview mb-5'>
          <div className='no-heading'>
            <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Edit Order
          </div>
          
          <div className='no-form'>
            
            <EditOrderFormHelper 
              key="1"
              number="1"
              />
              
          </div>
         
      </div>}
        
        </>
    )
}

export default EditOrderForm