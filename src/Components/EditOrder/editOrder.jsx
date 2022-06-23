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
  const [orderData,setOrderData]=useState([])
  // const dispatch=useDispatch();
useEffect(()=>{
  // dispatch(getAllOrders());
  orderDatacreate();
},[order.data.orders])
const handleopenEditForm=(id)=>{
    navigate('/EditOrderForm/'+id);
}
const orderDatacreate=()=>{
  if(order.data.orders && order.data.orders.length>0){
    setLoading(true);
    order.data.orders.map((ele,index)=>{
      let data={
        orderId:"",
        clientName:"",
        categoryName:"",
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
      setOrderData(pstate=>[...pstate,data]);
    })
    
    setLoading(false)
  }
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
              console.log("orderData",orderData)
            }

                {
                  
                  loading?<Loader msg="Data is Processing..."/>:
                  orderData && orderData.length<2?<div>No Order's are available</div>:orderData.map((ele,index)=>{
                    // count++;
                    return <div key={index}>
                    <ListView
                    property1="Client Name: "
                    property2="Category : "
                    value1={ele.orderClient}
                    value2={ele.orderCategory}
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