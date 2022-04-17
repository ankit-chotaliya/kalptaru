import React from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import './editOrder.css';
import ListView from '../Helper/ListView/ListView';
function editOrder() {
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft/> Edit Order
            </div>

            <div className='eo-container mt-4'>
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
            </div>

        </div>
        </>
  )
}

export default editOrder