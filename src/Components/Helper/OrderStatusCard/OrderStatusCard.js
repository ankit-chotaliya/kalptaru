import React from 'react'
import {RiExchangeBoxLine} from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'
import ringimg from '../../OrderStatus/ring.jpg'
import { useState } from 'react'
import ModalHelper from '../Modal/ModalHelper'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { orderStatusChange } from '../../../actions/order.action'
import { setToastMsg } from '../../../actions/toast.action'
const OrderStatusCard = (props) => {
    // const orderId=props.orderId;
    const navigate=useNavigate();
    const [viewModal,setViewModal]=useState(false);
    const [updateOrderId,setUpdateOrderId]=useState("");
    const dispatch=useDispatch();
    const handleModalReply=(e)=>{
        const reply=e.target.value;
        console.log(reply);
        if(reply == "true"){
            let dataObj={};
            if(props.label=='4'){
                dataObj={
                    orderId:updateOrderId,
                    confirm:true
                }
            }else{
                dataObj={
                    orderId:updateOrderId,
                    confirm:false
                }
            }
            props.handleemptyOrderData();
            dispatch(orderStatusChange(dataObj));
            
            // alert("updated successfully!");
        }else{
            let dataObj={};
            if(props.label=='4'){
                dataObj={
                    orderId:updateOrderId,
                    confirm:false
                }
                props.handleemptyOrderData();
                dispatch(orderStatusChange(dataObj));
                
                
            }else{
                dispatch(setToastMsg("Remain as it is!",false));
            }
            // alert("Not Updated!");
        }
        setViewModal(false);
    }
    const hadnleUpdateOrder=(orderId)=>{
        // e.preventDefault();
        setUpdateOrderId(orderId);
        setViewModal(true);
    }
    const handleopenEditForm=(orderId)=>{
        navigate('/OrderView/'+orderId);
    }
  return (
    <>
                    <div className='os-card mb-3'>
                        <div className='os-card-img'>
                            <img src={props.orderImage}/>
                        </div>
                        <div className='os-card-detail mx-2'>
                            <div className='os-card-detail-title'>
                                <div className='os-card-orderno'>
                                Client Name : {props.orderClient?props.orderClient:"None"}
                                </div>
                                <div className='os-card-btns'>
                                    <RiExchangeBoxLine className='os-card-btn' onClick={()=>hadnleUpdateOrder(props.orderId)}/>
                                    <FiEdit2 className='os-card-btn' onClick={()=>handleopenEditForm(props.orderId)}/>
                                </div>
                            </div>
                            <div className='os-card-detail-desc'>
                                 <div className='os-card-label'>
                                 {
                                    props.label=="1"?"New Order":null
                                 }
                                 {
                                    props.label=="2"?"Order In Process":null
                                 }
                                 {
                                    props.label=="3"?"Karigar Completed":null
                                 }
                                 {
                                    props.label=="4"?"Order Ready":null
                                 }
                                 {
                                    props.label=="5"?"Delivery Pending":null
                                 }
                                 {
                                    props.label=="6"?"Order Completed":null
                                 }
                                 </div>
                                 <div className='os-card-info mt-2'>
                                    <span>Category: <b>{props.orderCategory?props.orderCategory:"None"}</b></span>
                                    <span>Delivery Date: <b>{props.orderDeliveryDate?props.orderDeliveryDate:"None"}</b></span>
                                    <span>Created Date: <b>{props.orderCreatedDate?props.orderCreatedDate:"None"}</b></span>
                                    <span>HUID: <b>{props.orderHUID?props.orderHUID:"None"}</b></span>
                                 </div>    
                            </div>
                        </div>
                    </div>
                    <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<RiExchangeBoxLine onClick={hadnleUpdateOrder}/>}
                    text="Are you sure you want push order into next Status?"
                    onReply={handleModalReply}
                    />
    </>
  )
}

export default OrderStatusCard