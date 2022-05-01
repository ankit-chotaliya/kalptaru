import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineArrowLeft,AiFillFilter} from 'react-icons/ai'
import {BiSort} from 'react-icons/bi'
import {GiCardExchange} from 'react-icons/gi'
import { FiEdit2 } from 'react-icons/fi'
import Navbar from '../NavBar/Navbar'
import './OrderStatus.css'
import ringimg from './ring.jpg'
import OrderStatusCard from '../Helper/OrderStatusCard/OrderStatusCard'

const OrderStatus = () => {
    const navigate=useNavigate();

    const [newOrder,setnewOrder]=useState(true);
    const [inProcess,setinProcess]=useState(false);
    const [delivered,setDelivered]=useState(false);
    const [pending,setPending]=useState(false);
    const [kComplete,setkComplete]=useState(false);
    const [oReady,setoReady]=useState(false);

    const newOrderclick=()=>{
        setnewOrder(true);
        setinProcess(false);
        setDelivered(false);
        setPending(false);
        setkComplete(false);
        setoReady(false);
    }
    const inProcessclick=()=>{
        setnewOrder(false);
        setinProcess(true);
        setDelivered(false);
        setPending(false);
        setkComplete(false);
        setoReady(false);
    }
    const kCompleteclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(false);
        setPending(false);
        setkComplete(true);
        setoReady(false);
    }
    const oReadyclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(false);
        setPending(false);
        setkComplete(false);
        setoReady(true);
    }
    const pendingclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(false);
        setPending(true);
        setkComplete(false);
        setoReady(false);
    }
    const deliveredclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(true);
        setPending(false);
        setkComplete(false);
        setoReady(false);
    }
  return (
    <>
        <Navbar/>
        <div className="container no-main no-border pageview">
            <div className='eo2-heading no-heading'>
            <div className='eo2-editorder'>
            <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Order Status
            </div>
            <div className='eo2-btns'>
            <button className='eo2-btn'><AiFillFilter /></button>
            <button className='eo2-btn'><BiSort /></button>
            </div>
            </div>

            <div className='os-status-header mt-3'>
                Status: 
                <div className='os-status-menus'>
                    <span>
                        <li className={newOrder?'os-link-active':null} onClick={newOrderclick}>New Order</li>
                        <li className={inProcess?'os-link-active':null} onClick={inProcessclick}>In process</li>
                        <li className={kComplete?'os-link-active':null} onClick={kCompleteclick}>Karigar Completed</li>
                        <li className={oReady?'os-link-active':null} onClick={oReadyclick}>Order Ready</li>
                        <li className={pending?'os-link-active':null}  onClick={pendingclick}>Pending</li>
                        <li className={delivered?'os-link-active':null} onClick={deliveredclick}>Delivered</li>
                    </span>
                </div>
            </div>
            {
                newOrder?<div className='os-container mt-3'>
                <OrderStatusCard label="New Order"/>
                <OrderStatusCard label="New Order"/>
                <OrderStatusCard label="New Order"/>
                <OrderStatusCard label="New Order"/>
        </div>:null
            }
            {
                inProcess?<div className='os-container mt-3'>
                <OrderStatusCard label="In Process"/>
                <OrderStatusCard label="In Process"/>
                <OrderStatusCard label="In Process"/>
        </div>:null
            }
            {
                kComplete?<div className='os-container mt-3'>
                <OrderStatusCard label="Completed"/>
                <OrderStatusCard label="Completed"/>
        </div>:null
            }
            {
                oReady?<div className='os-container mt-3'>
                <OrderStatusCard label="Order Ready"/>
        </div>:null
            }
            {
                pending?<div className='os-container mt-3'>
                <OrderStatusCard label="Pending"/>
                <OrderStatusCard label="Pending"/>
                <OrderStatusCard label="Pending"/>
        </div>:null
            }
            {
                delivered?<div className='os-container mt-3'>
                <OrderStatusCard label="Delivered"/>
                <OrderStatusCard label="Delivered"/>
        </div>:null
            }
        
        </div>
    </>
  )
}

export default OrderStatus