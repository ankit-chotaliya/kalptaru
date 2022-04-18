import React from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import './SendReminder.css';
import ListView from '../Helper/ListView/ListView';
function SendReminder() {
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview' id="container">
            <div className='sr-heading'>
            <div className='sr-editorder'>
              <AiOutlineArrowLeft/> Send Reminder
              </div>
              <div className='sr-btns'>
              <button className='sr-btn'>Urgent</button>
              <button className='sr-btn'>Fast</button>
              <button className='sr-btn'>Normal</button>
              </div>
            </div>
            <div className='eo-container mt-4'>
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiSend/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiSend/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiSend/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiSend/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiSend/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiSend/>}
                />
            </div>

        </div>
        </>
  )
}

export default SendReminder