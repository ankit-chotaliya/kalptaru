import React, { useState } from 'react'
import ModalHelper from '../Modal/ModalHelper';
import {FiRefreshCw} from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import repeatImg from './repeat.png'
const ModalButton = () => {
    const [modalReply,setModalReply]=useState(false);
    const [viewModal,setViewModal]=useState(false);
    const handleModalReply=(e)=>{
        const reply=e.target.value;
        console.log(reply);
        if(reply == "true"){
            setModalReply(reply);
            console.log("replied Positively");
        }else{
            setModalReply(reply);
            console.log("replid Negatively");
        }
        setViewModal(false);
    }
  return (
    <>
        <button onClick={()=>{setViewModal(true)}}>Show Repeat Modal</button>
        <ModalHelper
            show={viewModal}
            onHide={() => setViewModal(false)}
            icon={<RiDeleteBin6Line/>}
            text="Are you sure you want to repeat this order?"
            onReply={handleModalReply}
        />  
    </>
  )
}

export default ModalButton