import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminKarigars.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function AdminKarigars() {

    const navigate = useNavigate();

    return (
        <>
            <AdminNavbar />
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Karigars
                    </div>
                </div>
                <div className='table-responsive-md'>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col"> City</th>
                                <th scope="col" className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>Sagar Desai</td>
                                <td>1234567896</td>
                                <td>Ahmedabad</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Parth Goti</td>
                                <td>1234567896</td>
                                <td>Ahmedabad</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Ankit Chotaliya</td>
                                <td>1234567896</td>
                                <td>Ahmedabad</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Sakshi Jain</td>
                                <td>1234567896</td>
                                <td>Ahmedabad</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Shruti Jain</td>
                                <td>1234567896</td>
                                <td>Ahmedabad</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Bhavika Balsara</td>
                                <td>1234567896</td>
                                <td>Ahmedabad</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>

        </>
    )
}

export default AdminKarigars