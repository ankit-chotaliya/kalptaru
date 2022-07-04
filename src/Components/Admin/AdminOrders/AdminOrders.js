import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminOrders.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../Helper/Loader/Loader';
import AdminOrderTable from '../../Helper/AdminOrderTable/AdminOrderTable';

function AdminOrders() {

    const navigate = useNavigate();
    const Orders = useSelector(state=>state.order);

    const [data, setData] = useState([])

        useEffect(() => {
            if (Orders.success==true) {
                setData(Orders.data.order);
            }
        }, [Orders])

    return (
        <>
            <AdminNavbar />
            {
            Orders.data.loading?<Loader/>:
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Orders
                    </div>
                </div>
               <AdminOrderTable/>
            </div>
            }
        </>
    )
}

export default AdminOrders