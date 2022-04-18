import React from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiRepeat } from 'react-icons/fi'
import './CompletedOrder.css';
import ListView from '../Helper/ListView/ListView';
function CompletedOrder() {
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='cmt-o-heading no-heading'>
            <div className='cmt-o-editorder'>
              <AiOutlineArrowLeft/> Completed Order
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
                icon={<FiRepeat/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiRepeat/>}
                />
            </div>
        </div>
        </>
  )
}

export default CompletedOrder;