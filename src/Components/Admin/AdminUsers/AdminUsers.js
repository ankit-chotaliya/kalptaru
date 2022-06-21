import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminUsers.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import online from './online.ico';
import offline from './offline.ico';

import AdminListView from '../../Helper/AdminListView/AdminListView';

function AdminUsers() {

    const navigate = useNavigate();

    return (
        <>
            <AdminNavbar />
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Users
                    </div>
                </div>
                <div className='table-responsive-md'>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone No</th>
                            <th scope="col" className="text-center w-25"> Status</th>
                            <th scope="col" className="text-center">Active / Deactive</th>
                            <th scope="col" className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Sagar Desai</td>
                            <td>9712599217</td>
                            <td className="text-center"><img className="status" src={online} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                    Active &nbsp;<AiOutlineCheckCircle />
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Ankit Chotaliya</td>
                            <td>123456789</td>
                            <td className="text-center"><img className="status" src={offline} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                    Deactive &nbsp;<AiOutlineCloseCircle />
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Parth Goti</td>
                            <td>1256347892</td>
                            <td className="text-center"><img className="status" src={online} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                    Active &nbsp;<AiOutlineCheckCircle />
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Sakhshi Jain</td>
                            <td>1234567896</td>
                            <td className="text-center"><img className="status" src={online} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                    Active &nbsp;<AiOutlineCheckCircle />
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Shruti Jain</td>
                            <td>6325478912</td>
                            <td className="text-center"><img className="status" src={offline} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                    Deactive &nbsp;<AiOutlineCloseCircle />
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn'>
                                    Delete
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Bhavika Balasara</td>
                            <td>8529637415</td>
                            <td className="text-center"><img className="status" src={online} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                    Active &nbsp;<AiOutlineCheckCircle />
                                </button>
                            </div></td>
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

export default AdminUsers