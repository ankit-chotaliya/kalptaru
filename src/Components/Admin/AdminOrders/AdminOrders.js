import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminOrders.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const dateFormat = (d) => {
    var date = new Date(d);
    const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
    return day;
}
function AdminOrders() {

    const navigate = useNavigate();
    const Orders = useSelector(state=>state.order);

    return (
        <>
            <AdminNavbar />
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Orders
                    </div>
                </div>
                <div className='container mt-4'>
                    <div className='btns'>
                        <button className='btn1'>Urgent</button>
                        <button className='btn1 btn-bt'>Fast</button>
                        <button className='btn1'>Normal</button>
                    </div>
                </div>
                <div className='table-responsive-md'>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col"> Category</th>
                                <th scope="col" className="text-center">Placed By</th>
                                <th scope="col" className="text-center">Karigar Name</th>
                                <th scope="col" className="text-center">Order Status</th>
                                <th scope="col" className="text-center">Order Date</th>
                                <th scope="col" className="text-center">Due Date</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            Orders.data.order && Orders.data.order.map((o,index)=>{
                              return  <tr key={index} >
                                <th scope="row">{index+1}</th>
                                <td>{o.clientId?o.clientId.client_name:<>Null</>}</td>
                                <td>{o.clientId?o.clientId.client_contact:<>Null</>}</td>
                                <td>{o.orderCategory.name}</td>
                                <td className="text-center">{o.createdby.fullname}</td>
                                <td className="text-center">{o.karigarId?o.karigarId.karigar_name:<>Null</>}</td>
                                <td className="text-center">
                                {o.orderStatus==1 ?"New Order":null}
                                {o.orderStatus==2 ?"In Process":null}
                                {o.orderStatus==3 ?"Karigar Ccompleted":null}
                                {o.orderStatus==4 ?"Order Ready":null}
                                {o.orderStatus==5 ?"Delivery Pending":null}
                                {o.orderStatus==6 ?"Delivered":null}
                                </td>
                                <td className="text-center">{dateFormat(o.createdAt)}</td>
                                <td className="text-center">{dateFormat(o.deliveryDate)}</td>
                            </tr> ;
                            })
                        }
                        </tbody>
                    </table>
                </div>


            </div>

        </>
    )
}

export default AdminOrders