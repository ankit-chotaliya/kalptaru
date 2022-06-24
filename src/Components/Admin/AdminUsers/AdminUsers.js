import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminUsers.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import online from './online.ico';
import offline from './offline.ico';

import AdminListView from '../../Helper/AdminListView/AdminListView';
import { useSelector } from 'react-redux';

function AdminUsers() {

    const navigate = useNavigate();
    const Users = useSelector(state=>state.user);

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
                    {
                        Users.data.user && Users.data.user.map((u,index)=>{
                            return <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{u.fullname}</td>
                            <td>{u.contact}</td>
                            <td className="text-center"><img className="status" src={u.loginstatus? online :offline} /></td>
                            <td className="text-center"><div className='co-customer-share'>
                                <button className='co-btn'>
                                   {u.isActive ?<>Active &nbsp;<AiOutlineCheckCircle /></>  : <>Deactive &nbsp;<AiOutlineCloseCircle /></> } 
                                </button>
                            </div></td>
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

export default AdminUsers