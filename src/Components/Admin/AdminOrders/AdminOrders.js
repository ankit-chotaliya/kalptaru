import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminOrders.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function AdminOrders() {

    const navigate = useNavigate();

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
                        <button className='btn'>Urgent</button>
                        <button className='btn btn-bt'>Fast</button>
                        <button className='btn'>Normal</button>
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Sagar Desai</td>
                                <td>1234567896</td>
                                <td>Rose Gold</td>
                                <td className="text-center">Parth Goti</td>
                                <td className="text-center">Shrui Jain</td>
                                <td className="text-center">In Process</td>
                                <td className="text-center">12/01/2022</td>
                                <td className="text-center">14/01/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Ankit chotaliya</td>
                                <td>1234567896</td>
                                <td>Rose Gold</td>
                                <td className="text-center">Parth Goti</td>
                                <td className="text-center">Shrui Jain</td>
                                <td className="text-center">In Process</td>
                                <td className="text-center">12/01/2022</td>
                                <td className="text-center">14/01/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Parth Goti</td>
                                <td>1234567896</td>
                                <td>Rose Gold</td>
                                <td className="text-center">Parth Goti</td>
                                <td className="text-center">Shrui Jain</td>
                                <td className="text-center">In Process</td>
                                <td className="text-center">12/01/2022</td>
                                <td className="text-center">14/01/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Sakhsi Jain</td>
                                <td>12345678796</td>
                                <td>Rose Gold</td>
                                <td className="text-center">Parth Goti</td>
                                <td className="text-center">Shrui Jain</td>
                                <td className="text-center">In Process</td>
                                <td className="text-center">12/01/2022</td>
                                <td className="text-center">14/01/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Shruti Jain</td>
                                <td>1234567896</td>
                                <td>Rose Gold</td>
                                <td className="text-center">Parth Goti</td>
                                <td className="text-center">Shrui Jain</td>
                                <td className="text-center">In Process</td>
                                <td className="text-center">12/01/2022</td>
                                <td className="text-center">14/01/2022</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Bhavika Balasara</td>
                                <td>1234567896</td>
                                <td>Rose Gold</td>
                                <td className="text-center">Parth Goti</td>
                                <td className="text-center">Shrui Jain</td>
                                <td className="text-center">In Process</td>
                                <td className="text-center">12/01/2022</td>
                                <td className="text-center">14/01/2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>

        </>
    )
}

export default AdminOrders