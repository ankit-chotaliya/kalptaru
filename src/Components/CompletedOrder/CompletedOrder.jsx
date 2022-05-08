import React,{useState} from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import ModalHelper from '../Helper/Modal/ModalHelper';
import './CompletedOrder.css';
import ListView from '../Helper/ListView/ListView';
import {FiRepeat} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
function CompletedOrder() {
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
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='cmt-o-heading no-heading'>
            <div className='cmt-o-editorder'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Completed Order
              </div>
              <div className='cmt-o-btns'>
              <button className='cmt-o-btn'>Urgent</button>
              <button className='cmt-o-btn cmt-o-btn-bt'>Fast</button>
              <button className='cmt-o-btn'>Normal</button>
              </div>
            </div>
            
            <div className='eo-container mt-4'>
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat onClick={hadnleUpdateOrder}/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat onClick={hadnleUpdateOrder}/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat onClick={hadnleUpdateOrder}/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat onClick={hadnleUpdateOrder}/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat onClick={hadnleUpdateOrder}/>}
                />
               
            </div>
            <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<FiRepeat onClick={hadnleUpdateOrder}/>}
                    text="Are you sure you want to Delete this Order?"
                    onReply={handleModalReply}
              />
        </div>
        </>
  )
}

export default CompletedOrder;