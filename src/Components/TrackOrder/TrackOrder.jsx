import React from 'react'
import Navbar from '../NavBar/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {RiEqualizerLine} from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'
import './TrackOrder.css';
import ListView from '../Helper/ListView/ListView';
function TrackOrder() {
  return (
    <>
    <Navbar/>
        <div className='container pageview'>
            <div className='to-heading'>
            <div className='to-editorder'>
              <AiOutlineArrowLeft/> Track Order
              </div>
              <div className='to-btns'>
              <button className='to-btn'>Urgent</button>
              <button className='to-btn'>Fast</button>
              <button className='to-btn'>Normal</button>
              </div>
            </div>
            <div className='to-heading2 mt-4'>
            <div className='to-editorder2'>
             This Week
              </div>
              <div className='to-btns'>
              <RiEqualizerLine style={{cursor:'pointer'}}/>
              <div className='to-moretext'>More</div>
              </div>
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
                <ListView
                property1="Client Name: "
                property2="Ref No: "
                value1="Parth Goti"
                value2="1234"
                icon={<FiEdit2/>}
                />
            </div>

        </div>
        <div className='container pageview'>
            <div className='to-heading2'>
            <div className='to-editorder2'>
             This Month
              </div>
              <div className='to-btns'>
              <RiEqualizerLine/>
              <div className='to-moretext'>More</div>
              </div>
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

export default TrackOrder