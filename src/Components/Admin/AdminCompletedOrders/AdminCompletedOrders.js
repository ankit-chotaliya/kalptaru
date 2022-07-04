import React, { useEffect, useState }  from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../Helper/Loader/Loader';
import AdminCOrderTable from '../../Helper/AdminCOrderTable/AdminCOrderTable';


function AdminCompletedOrders() {

    const navigate = useNavigate();
    const Orders = useSelector(state=>state.order);

    const [data, setData] = useState([])


    let array = [];

    useEffect(() => {

        Orders.data.order && Orders.data.order.map((o,index) => {
            if(o.orderStatus==6){
                array.push(Orders.data.order[index]);
              }
          })
          setData(array);
    }, [])

    
        useEffect(() => {
            if (Orders.success==true) {
                setData(array);
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
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Completed Orders
                    </div>
                </div>
                <AdminCOrderTable/>
            </div>
            }
        </>
    )
}

export default AdminCompletedOrders