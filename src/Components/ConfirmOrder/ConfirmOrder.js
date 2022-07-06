import axios from 'axios'
import { saveAs } from 'file-saver'
import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineCloudDownload} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { emptyOrderConfirm, getAllOrders } from '../../actions'
import Navbar from '../NavBar/Navbar'
import './ConfirmOrder.css'
import coImg from './orderConfirmFinal.png'
import noCoImg from './noCoImg.jpg'
import PDF from '../PDF/PDF'
import Loader from '../Helper/Loader/Loader'
const ConfirmOrder = () => {
    const navigate=useNavigate();
    const [clientBlob,setClientBlob]=useState([{}]);
    const [count,setCount]=useState(1);
    const [karigarBlob,setKarigarBlob]=useState([{}]);
    const [clientFileObj,setClientFileObj]=useState([{}]);
    const [karigarFileObj,setKarigarFileObj]=useState([{}]);
    const dispatch=useDispatch();
    const orderConfirm=useSelector(state=>state.orderConfirm);
    const order=useSelector(state=>state.order);
    const {orderIds}=useParams();
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const title="PDF For Confirm Order-Shree Kalptaru";
    const text="Order Confirmed!"

    useEffect(()=>{
        if(!order.data.orders){
            dispatch(getAllOrders());
        }
    },[order.data])   

  return (
    <>
        <Navbar/>
        {
            
        }
        {
            // console.log(clientFileObj)
            orderConfirm.isSet?order.loading?<Loader msg="Getting Pdf Ready.."/>:
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}/> Order Confirm
            </div>
            
            <div className='co-container mt-4'>
                
                <div className='co-icon'>
                    
                    <img src={coImg}/>
                </div>
                <div className='co-title'>
    
                    Download PDFs!
                </div>
                {
                    orderConfirm.data && clientBlob.length>0 && orderConfirm.data.map((ele,index)=>{
                        // console.log("count",count);
                        // console.log(ele);
                        return <div key={index}>
                            <div className='mt-2'>Order #{index+1}</div>
                            <PDF key={index} orderId={ele} inRow={false}/>
                        </div>
                    })
                }
                
            </div>
           
        </div>:<div className='container no-main no-border pageview'>
        <div className='no-heading'>
          <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}/> Order Confirm
        </div>
        
        <div className='co-container mt-4'>
            
            <div className='co-icon'>
                
                <img src={noCoImg}/>
            </div>
                 <span>
                    <div className='co-title'>
                        There are no Orders created right now! Please, <strong>create order</strong> first or Check into <strong>track order</strong> for previously created orders!
                    </div>
                </span>  
        </div>
       
    </div>
        }
    </>
  )
}

export default ConfirmOrder