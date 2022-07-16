import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import './editOrder.css';
import ListView from '../Helper/ListView/ListView';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Helper/Loader/Loader';
import { getAllOrders } from '../../actions/order.action';
const EditOrder=()=> {
  const navigate=useNavigate();
  const order=useSelector(state=>state.order);
  const client=useSelector(state=>state.client);
  const category=useSelector(state=>state.category);
  const [loading,setLoading]=useState(false);
  const [orderData,setOrderData]=useState([]);
  // const dispatch=useDispatch();
useEffect(()=>{
  // dispatch(getAllOrders());
  // console.log("hii");
  if(order.data.orders && client.data.client && category.data.categories && orderData.length==0){
    orderDatacreate();
  }
  
},[order.data.orders,client.data.client,category.data.categories])
const handleopenEditForm=(id)=>{
    navigate('/EditOrderForm/'+id);
}
const orderDatacreate=()=>{
  if(order.data.orders && order.data.orders.length>0){
    setLoading(true);
    order.data.orders.map((ele,index)=>{
      if(ele.orderStatus!=6){
      let data={
        orderId:"",
        orderClient:"",
        orderCategory:"",
        orderDeliveryDate:"",
        orderCreatedDate:"",
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
      data.orderDeliveryDate=dateFormat(ele.deliveryDate);
      data.orderCreatedDate=dateFormat(ele.createdAt);
      setOrderData(pstate=>[...pstate,data]);
      }
    })
    
    setLoading(false)
  }
} 
const dateFormat=(d)=>{
  var date = new Date(d);
  const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
  return day;
}
  // orderDatacreate();
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Edit Order
            </div>

            <div className='eo-container mt-4'>


                {
                  
                  loading?<Loader msg="Data is Processing..."/>:
                  orderData && orderData.length<1?<div>No Order's are available</div>:orderData.map((ele,index)=>{
                    // count++
                    
                    return <div key={index}>
                    <ListView
                    indexnum={index+1}
                    property1="Client :"
                    property2="Category : "
                    property3="Delivery : "
                    property4="Created At : "
                    value1={!ele.orderClient?"None":ele.orderClient}
                    value2={!ele.orderCategory?"None" :ele.orderCategory}
                    value3={!ele.orderDeliveryDate?"Not exist!" :ele.orderDeliveryDate}
                    value4={!ele.orderCreatedDate?"Not exist!" :ele.orderCreatedDate}
                    icon={<FiEdit2 onClick={()=>handleopenEditForm(ele.orderId)}/>}
                    />
                    </div>
                  })
                }
            </div>
        </div>
        </>
  )
}

export default EditOrder