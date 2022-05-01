import React from 'react'
import {GiCardExchange} from 'react-icons/gi'
import { FiEdit2 } from 'react-icons/fi'
import ringimg from '../../OrderStatus/ring.jpg'
const OrderStatusCard = (props) => {
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
                                    <GiCardExchange className='os-card-btn'/>
                                    <FiEdit2 className='os-card-btn'/>
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
    </>
  )
}

export default OrderStatusCard