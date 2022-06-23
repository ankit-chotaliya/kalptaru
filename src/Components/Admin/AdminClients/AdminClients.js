import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminClients.css';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { adminGetAllClient } from "../../../actions/admin.action"

function AdminClients() {

    const navigate = useNavigate();
    const clients = useSelector(state => state.client);

    return (
        <>
            <AdminNavbar />
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Clients
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
                        
                            {
                                clients.data.client && clients.data.client.map((c, index) => {

                                   return  <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{c.client_name}</td>
                                        <td>{c.client_contact}</td>
                                        <td>{c.client_city}</td>
                                        <td className="text-center"><div className='co-customer-share'>
                                            <button className='delete-btn'>
                                                Delete
                                            </button>
                                        </div></td>
                                    </tr>

                                })
                            }
                            
                        </tbody>
                    </table>
                </div>


            </div>

        </>
    )
}

export default AdminClients