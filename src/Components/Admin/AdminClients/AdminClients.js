import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminClients.css';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { adminDeleteClient } from '../../../actions/admin.action';

function AdminClients() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clients = useSelector(state => state.client);


    const handleDelete = (clientId, e)=>{
        e.preventDefault();


        dispatch(adminDeleteClient(clientId)).then(() => {
            console.log(clientId);

            if (clients.success) {
                console.log("Successfull");
            }
        })

    }

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
                                            <button className='delete-btn' onClick={(e)=>handleDelete(c._id, e)}>
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