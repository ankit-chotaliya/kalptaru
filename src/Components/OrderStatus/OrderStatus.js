import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineArrowLeft,AiFillFilter} from 'react-icons/ai'
import {BiSort} from 'react-icons/bi'
import {GiCardExchange} from 'react-icons/gi'
import { FiEdit2,FiFilter } from 'react-icons/fi'
import Navbar from '../NavBar/Navbar'
import './OrderStatus.css'
import ringimg from './ring.jpg'
import OrderStatusCard from '../Helper/OrderStatusCard/OrderStatusCard'
import { useSelector } from 'react-redux'
import Loader from '../Helper/Loader/Loader'

const OrderStatus = () => {
    const navigate=useNavigate();
    //state variables
    const order=useSelector(state=>state.order);
    const client=useSelector(state=>state.client);
    const category=useSelector(state=>state.category);
    const serverUrl="http://localhost:8080/uploads/orderImage/"
    const [orderData,setOrderData]=useState([]);
    const [orderDataSpecific,setOrderDataSpecific]=useState([]);
    const [newOrder,setnewOrder]=useState(true);
    const [inProcess,setinProcess]=useState(false);
    const [delivered,setDelivered]=useState(false);
    const [DeliveryPending,setDeliveryPending]=useState(false);
    const [kComplete,setkComplete]=useState(false);
    const [oReady,setoReady]=useState(false);
    const [sortStatus,setSortStatus]=useState("Normal");
    const [activeTab,setActiveTab]=useState(1);

    const dateFormat=(d)=>{
        var date = new Date(d);
        const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
        return day;
      } 
    //Filter from order state function
    const orderDatacreate=()=>{
        if(order.data.orders && order.data.orders.length>0){
        order.data.orders.map((ele,index)=>{
            
            let data={
                orderId:"",
                orderClient:"",
                orderCategory:"",
                orderStatus:"",
                orderDeliveryDate:"",
                orderImage:"",
                orderHUID:"",
                orderCreatedDate:""
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
            data.orderStatus=ele.orderStatus;
            data.orderClient=clientName;
            data.orderCategory=categoryName;
            data.orderImage=serverUrl+ele.orderImg[0].img;
            data.orderDeliveryDate=dateFormat(ele.deliveryDate);
            data.orderCreatedDate=dateFormat(ele.createdAt);
            data.orderHUID=ele.HUID
            setOrderData(pstate=>[...pstate,data]);
            
        })
        }
    }
    useEffect(()=>{
        // dispatch(getAllOrders());
        // console.log("hiii");
        if(order.data.orders && client.data.client && category.data.categories && orderData.length==0){
          orderDatacreate();
        }
        // console.log("hiii 2");
      },[order.data.orders,client.data.client,category.data.categories])

    useEffect(()=>{
    setOrderDataSpecific(orderData);
    if(activeTab=='1'){
        newOrderclick();
    }else if(activeTab=='2'){
        inProcessclick();
    }else if(activeTab=='3'){
        kCompleteclick();
    }else if(activeTab=='4'){
        oReadyclick();
    }else if(activeTab=='5'){
        DeliveryPendingclick();
    }else if(activeTab=='6'){
        console.log("hii 2");
        deliveredclick();
    }else{
        newOrderclick();
    }
    },[orderData])
    const newOrderclick=()=>{
        setnewOrder(true);
        setinProcess(false);
        setDelivered(false);
        setDeliveryPending(false);
        setkComplete(false);
        setoReady(false);
        setOrderDataSpecific(orderData.filter(x=>x.orderStatus=='1'));
        setActiveTab(1);
    }
    const inProcessclick=()=>{
        setnewOrder(false);
        setinProcess(true);
        setDelivered(false);
        setDeliveryPending(false);
        setkComplete(false);
        setoReady(false);
        setOrderDataSpecific(orderData.filter(x=>x.orderStatus=='2'));
        setActiveTab(2);
    }
    const kCompleteclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(false);
        setDeliveryPending(false);
        setkComplete(true);
        setoReady(false);
        setOrderDataSpecific(orderData.filter(x=>x.orderStatus=='3'));
        setActiveTab(3);
    }
    const oReadyclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(false);
        setDeliveryPending(false);
        setkComplete(false);
        setoReady(true);
        setOrderDataSpecific(orderData.filter(x=>x.orderStatus=='4'));
        setActiveTab(4);
    }
    const DeliveryPendingclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(false);
        setDeliveryPending(true);
        setkComplete(false);
        setoReady(false);
        setOrderDataSpecific(orderData.filter(x=>x.orderStatus=='5'));
        setActiveTab(5);
    }
    const deliveredclick=()=>{
        setnewOrder(false);
        setinProcess(false);
        setDelivered(true);
        setDeliveryPending(false);
        setkComplete(false);
        setoReady(false);
        setOrderDataSpecific(orderData.filter(x=>x.orderStatus=='6'));
        setActiveTab(6);
    }

    const handleemptyOrderData=()=>{
        setOrderData([]);
    }
    const handleActiveTabChange=(num)=>{
        setActiveTab(num);
    }
    const sorting=()=>{
        orderData.sort((a,b)=>{
            const date1=a.orderDeliveryDate.split('/');
            const date2=b.orderDeliveryDate.split('/');
            const c=new Date(date1[2],date1[1]-1,date1[0]);
            const d=new Date(date2[2],date2[1]-1,date2[0]);
            if(sortStatus=='A->Z'){
              return d-c;  
            }
            return c-d;
        })
        setOrderData(orderData);
        if(activeTab=='1'){
            newOrderclick();
        }else if(activeTab=='2'){
            inProcessclick();
        }else if(activeTab=='3'){
            kCompleteclick();
        }else if(activeTab=='4'){
            oReadyclick();
        }else if(activeTab=='5'){
            DeliveryPendingclick();
        }else if(activeTab=='6'){
            console.log("hii 2");
            deliveredclick();
        }else{
            newOrderclick();
        }
        if(sortStatus=='A->Z'){
            setSortStatus('Z->A');
        }else{
            setSortStatus("A->Z")
        }  
    }
    // When we have to add filter
    // <button className='eo2-btn'><FiFilter /></button>
  return (
    <>
        <Navbar/>
        {order.loading?<Loader msg="Getting Ready.."/>:<div className="container no-main no-border pageview">
        <div className='eo2-heading no-heading'>
        <div className='eo2-editorder'>
        <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Order Status
        </div>
        <div className='eo2-btns'>
        <div className='os-sort-name'>Delivery Date: {sortStatus}</div>
        <button className='eo2-btn' onClick={sorting}><BiSort /></button>
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
                    <li className={DeliveryPending?'os-link-active':null}  onClick={DeliveryPendingclick}>Delivery Pending</li>
                    <li className={delivered?'os-link-active':null} onClick={deliveredclick}>Delivered</li>
                </span>
            </div>
        </div>
        <div className='os-container mt-3'>
        {
            orderDataSpecific && orderDataSpecific.length>0?orderDataSpecific.map((ele,index)=>{
                return <OrderStatusCard 
                key={index}
                index={index}
                orderId={ele.orderId} 
                label={ele.orderStatus}
                orderImage={ele.orderImage}
                orderClient={ele.orderClient}
                orderCategory={ele.orderCategory}
                orderDeliveryDate={ele.orderDeliveryDate}
                orderCreatedDate={ele.orderCreatedDate}
                orderHUID={ele.orderHUID}
                handleemptyOrderData={handleemptyOrderData}
                handleActiveTabChange={handleActiveTabChange}
                />
            }):<div className='text-center'><h4>No Orders in this stage!!</h4></div>
        }
        </div>
    </div>}
        
    </>
  )
}

export default OrderStatus