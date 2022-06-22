import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminKarigars.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function AdminKarigars() {

    const navigate = useNavigate();
    const Karigars = useSelector(state=>state.karigar);

    return (
        <>
            <AdminNavbar />
            {/* {
                Karigars.data.karigar && Karigars.data.karigar.map((v)=>{
                    return v.karigar_name;
                })
            } */}
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
                            {
                                Karigars.data.karigar && Karigars.data.karigar.map((v,index)=>{
                                    return <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{v.karigar_name}</td>
                                <td>{v.karigar_contact}</td>
                                <td>{v.karigar_city}</td>
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

export default AdminKarigars