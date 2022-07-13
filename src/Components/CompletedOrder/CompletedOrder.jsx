import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import ModalHelper from '../Helper/Modal/ModalHelper';
import './CompletedOrder.css';
import ListView from '../Helper/ListView/ListView';
import { FiRepeat } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { repeatOrder } from '../../actions';
import { setToastMsg } from '../../actions/toast.action';
function CompletedOrder() {
  const navigate = useNavigate();
  const search = useLocation().search;
  // const queryStr=new URLSearchParams(search).get('priority');
  // const priority=queryStr?queryStr.charAt(0).toUpperCase() + queryStr.slice(1):null;
  const [viewModal, setViewModal] = useState(false);
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
  const dispatch=useDispatch();
  //Filter from order state function
  const orderDatacreate=()=>{
    if(order.data.orders && order.data.orders.length>0){
      order.data.orders.map((ele,index)=>{
        if(ele.orderStatus==6){
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
  const handleModalReply = (e) => {
    const reply = e.target.value;
    if (reply == "true") {
      dispatch(repeatOrder({orderId:orderUpdateId}));
    } else {
      dispatch(setToastMsg("Order Remain as it is!",false));
    }
    setViewModal(false);
  }
  const hadnleUpdateOrder = (orderId) => {
    setOrderUpdateId(orderId)
    setViewModal(true);
  }
  const handleOrderView = (orderId) => {
    navigate('/OrderView/'+orderId);
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
    // console.log("hii");
    setOrderDataSpecific(orderData);
  },[orderData])
  return (
    <>
      <Navbar />
      <div className='container no-main no-border pageview'>
        <div className='cmt-o-heading no-heading'>
          <div className='cmt-o-editorder'>
            <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate('/')} /> Completed Delivery
          </div>
          <div className='cmt-o-btns'>
            <button className={isUrgent?'cmt-o-btn cmt-o-btn-active':'cmt-o-btn'} onClick={handleUrgent}>Urgent</button>
            <button className={isFast?'cmt-o-btn cmt-o-btn-bt cmt-o-btn-active':'cmt-o-btn cmt-o-btn-bt'} onClick={handleFast}>Fast</button>
            <button className={isNormal?'cmt-o-btn cmt-o-btn-bt cmt-o-btn-active':'cmt-o-btn cmt-o-btn-bt'} onClick={handleNormal}>Normal</button>
            <button className={isDefault?'cmt-o-btn cmt-o-btn-active':'cmt-o-btn'} onClick={handleDefault}>Default</button>
          </div>
        </div>

        <div className='eo-container mt-4'>
          {
            orderDataSpecific.length>0?orderDataSpecific.map((ele,index)=>{
              return <ListView
              indexnum={index+1}
              property1="Client Name:"
              property2="Category:"
              property3="Delivery Date:"
              propertyLabel="Priority:"
              value1={ele.orderClient==""|| !ele.orderClient?"None":ele.orderClient}
              value2={ele.orderCategory=="" || !ele.orderCategory?"None":ele.orderCategory}
              value3={ele.orderDeliveryDate=="" || !ele.orderDeliveryDate?"None":ele.orderDeliveryDate}
              valueLabel={ele.orderPriority=="" || !ele.orderPriority?"Not Decided":ele.orderPriority}
              icon={<FiRepeat onClick={()=>{hadnleUpdateOrder(ele.orderId)}} />}
              icon1={<GrFormView style={{fontSize:"2.5rem"}} onClick={()=>handleOrderView(ele.orderId)}/>}
            />
            }):<div className='text-center'><h2>No Completed Orders right now</h2></div>
          }
          

        </div>
        <ModalHelper
          show={viewModal}
          onHide={() => setViewModal(false)}
          icon={<FiRepeat onClick={hadnleUpdateOrder} />}
          text="Are you sure you want to Repeat this Order?"
          reply={handleModalReply}
        />
      </div>
    </>
  )
}

export default CompletedOrder;