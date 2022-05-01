import React from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import './editOrder.css';
import ListView from '../Helper/ListView/ListView';
import { useNavigate } from 'react-router-dom';
const EditOrder=()=> {
  const navigate=useNavigate();
  return (
    <>
    <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Edit Order
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

export default EditOrder