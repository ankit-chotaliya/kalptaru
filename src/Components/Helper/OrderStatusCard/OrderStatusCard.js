import React from 'react'
import {RiExchangeBoxLine} from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'
import ringimg from '../../OrderStatus/ring.jpg'
import { useState } from 'react'
import ModalHelper from '../Modal/ModalHelper'
import { useNavigate } from 'react-router-dom'
const OrderStatusCard = (props) => {
    const navigate=useNavigate();
    const [viewModal,setViewModal]=useState(false);
  const handleModalReply=(e)=>{
    const reply=e.target.value;
    console.log(reply);
    if(reply == "true"){
        alert("updated successfully!");
    }else{
        alert("Not Updated!");
    }
    setViewModal(false);
}
  const hadnleUpdateOrder=(e)=>{
    e.preventDefault();
    setViewModal(true);
}
const handleopenEditForm=()=>{
    navigate('/OrderView');
}
  return (
    <>
                    <div className='os-card mb-3'>
                        <div className='os-card-img'>
                            <img src={ringimg}/>
                        </div>
                        <div className='os-card-detail'>
                            <div className='os-card-detail-title'>
                                <div className='os-card-orderno'>
                                Order NO:1
                                </div>
                                <div className='os-card-btns'>
                                    <RiExchangeBoxLine className='os-card-btn' onClick={hadnleUpdateOrder}/>
                                    <FiEdit2 className='os-card-btn' onClick={handleopenEditForm}/>
                                </div>
                            </div>
                            <div className='os-card-detail-desc'>
                                 <div className='os-card-label'>
                                    {props.label}
                                 </div>
                                 <div className='os-card-info'>
                                    <span>Client Name: ABCDE</span>
                                    <span>Placed By: Sakshi Jain</span>
                                    <span>Description: ajsdakjsdn oaisjdansd ahsdasdo aihsdahsdib ahsdasdj hasjdasdkl</span>
                                 </div>    
                            </div>
                        </div>
                    </div>
                    <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<RiExchangeBoxLine onClick={hadnleUpdateOrder}/>}
                    text="Are you sure you want to Change the Status?"
                    onReply={handleModalReply}
                    />
    </>
  )
}

export default OrderStatusCard