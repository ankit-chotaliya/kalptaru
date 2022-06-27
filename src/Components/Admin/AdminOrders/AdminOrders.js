import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminOrders.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Pagination from '../../Helper/Pagination/Pagination';

const dateFormat = (d) => {
    var date = new Date(d);
    const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
    return day;
}
function AdminOrders() {

    const navigate = useNavigate();
    const Orders = useSelector(state=>state.order);

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    useEffect(() => {
        setData(Orders.data.order);
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    let sum = 0;
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <>
            <AdminNavbar />
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Orders
                        <span style={{fontSize:"18px", fontWeight:"bold"}}>( {indexOfFirstRecord + 1 } - {indexOfLastRecord+currentRecords.length - 10} of {data.length})</span>
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
                                <th scope="col" className='text-center'>No</th>
                                <th scope="col" className='text-center'>Client Name</th>
                                <th scope="col" className='text-center'>Phone No</th>
                                <th scope="col" className='text-center'>Category</th>
                                <th scope="col" className="text-center">Placed By</th>
                                <th scope="col" className="text-center">Karigar Name</th>
                                <th scope="col" className="text-center">Order Status</th>
                                <th scope="col" className="text-center">Order Date</th>
                                <th scope="col" className="text-center">Due Date</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            currentRecords.map((o,index)=>{
                              return  <tr key={index} >
                                <th scope="row" className='text-center align-middle'>{index + 1 + indexOfLastRecord - 10}</th>
                                <td scope="row" className='text-center align-middle w-25'>{o.clientId?o.clientId.client_name:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle w-25'>{o.clientId?o.clientId.client_contact:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle'>{o.orderCategory.name}</td>
                                <td scope="row" className='text-center align-middle'>{o.createdby?o.createdby.fullname:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle'>{o.karigarId?o.karigarId.karigar_name:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle'>
                                {o.orderStatus==1 ?"New Order":null}
                                {o.orderStatus==2 ?"In Process":null}
                                {o.orderStatus==3 ?"Karigar Ccompleted":null}
                                {o.orderStatus==4 ?"Order Ready":null}
                                {o.orderStatus==5 ?"Delivery Pending":null}
                                {o.orderStatus==6 ?"Delivered":null}
                                </td>
                                <td scope="row" className='text-center align-middle'>{dateFormat(o.createdAt)}</td>
                                <td scope="row" className='text-center align-middle'>{dateFormat(o.deliveryDate)}</td>
                            </tr> ;
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />


            </div>

        </>
    )
}

export default AdminOrders