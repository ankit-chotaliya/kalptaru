import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import './SendReminder.css';
import ListView from '../Helper/ListView/ListView';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function SendReminder() {
  const [orderData,setOrderData]=useState([]);
  const [orderDataSpecific,setOrderDataSpecific]=useState([]);
  const [isUrgent,setIsUrgent]=useState(false);
  const [isFast,setIsFast]=useState(false);
  const [isNormal,setIsNormal]=useState(false);
  const [isDefault,setIsDefault]=useState(true);
  const [orderUpdateId,setOrderUpdateId]=useState("");
  const order=useSelector(state=>state.order);
  const client=useSelector(state=>state.client);
  const category=useSelector(state=>state.category);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const orderDatacreate=()=>{
    if(order.data.orders && order.data.orders.length>0){
      order.data.orders.map((ele,index)=>{
        if(ele.orderStatus!=6 || ele.orderStatus!=5 || ele.orderStatus!=4){
          let data={
            orderId:"",
            orderClient:"",
            orderCategory:"",
            orderPriority:"",
            orderDeliveryDate:"",
          }
          data.orderId=ele._id;
          var clientName;
          client.data.client.map((c)=>{
            if(c._id==ele.clientId){
              clientName=c.client_name;
              return;
            }
          })
          var categoryName;
          category.data.categories.map((c)=>{
            if(c._id==ele.orderCategory){
              categoryName=c.name;
              return;
            }
          })
          data.orderClient=clientName;
          data.orderCategory=categoryName;
          data.orderPriority=ele.priority;
          data.orderDeliveryDate=dateFormat(ele.deliveryDate);
          setOrderData(pstate=>[...pstate,data]);
        }
      })
    }
  }


  const dateFormat=(d)=>{
    var date = new Date(d);
    const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
    return day;
  } 
  const handleUrgent=()=>{
    setIsUrgent(true);
    setIsNormal(false);
    setIsFast(false);
    setIsDefault(false);
    setOrderDataSpecific(orderData.filter(x=>x.orderPriority=='Urgent'));
  }
  const handleFast=()=>{
    setIsUrgent(false);
    setIsNormal(false);
    setIsFast(true);
    setIsDefault(false);
    setOrderDataSpecific(orderData.filter(x=>x.orderPriority=='Fast'));
  }
  const handleNormal=()=>{
    setIsUrgent(false);
    setIsNormal(true);
    setIsFast(false);
    setIsDefault(false);
    setOrderDataSpecific(orderData.filter(x=>x.orderPriority=='Normal'));
  }
  const handleDefault=()=>{
    setIsUrgent(false);
    setIsNormal(false);
    setIsFast(false);
    setIsDefault(true);
    setOrderDataSpecific(orderData);
  }
  useEffect(()=>{
    if(order.data.orders && client.data.client && category.data.categories && orderData.length==0){
      orderDatacreate();
    }
  },[order.data.orders,client.data.client,category.data.categories])

  useEffect(()=>{
    console.log("hii");
    setOrderDataSpecific(orderData);
  },[orderData])

  const handlesendRemainder=(orderId)=>{

  }
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='sr-heading no-heading'>
            <div className='sr-editorder'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Send Reminder
              </div>
              <div className='sr-btns'>
              <button className={isUrgent?'sr-btn sr-btn-active':'sr-btn'} onClick={handleUrgent}>Urgent</button>
              <button className={isFast?'sr-btn sr-btn-bt sr-btn-active':'sr-btn sr-btn-bt'} onClick={handleFast}>Fast</button>
              <button className={isNormal?'sr-btn sr-btn-bt sr-btn-active':'sr-btn sr-btn-bt'} onClick={handleNormal}>Normal</button>
              <button className={isDefault?'sr-btn sr-btn-active':'sr-btn'} onClick={handleDefault}>All</button>
              </div>
            </div>
            <div className='eo-container mt-4'>
            {
              orderDataSpecific.length>0?orderDataSpecific.map((ele,index)=>{
                return <ListView
                property1="Client Name:"
                property2="Category:"
                property3="Delivery Date:"
                propertyLabel="Priority:"
                value1={!ele.clientName?"None":ele.orderClient}
                value2={!ele.orderCategory?"None":ele.orderCategory}
                value3={!ele.orderDeliveryDate?"None":ele.orderDeliveryDate}
                valueLabel={!ele.orderPriority?"Not Decided":ele.orderPriority}
                icon={<FiSend className='sr-icon-remainder' onClick={()=>{handlesendRemainder(ele.orderId)}} />}
              />
              }):<div className='text-center'><h2>No Orders right now for sending remainders</h2></div>
            }
                
            </div>

        </div>
        </>
  )
}

export default SendReminder