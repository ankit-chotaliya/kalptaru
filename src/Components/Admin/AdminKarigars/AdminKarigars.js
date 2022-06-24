import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminKarigars.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { adminDeleteKarigar } from '../../../actions/admin.action';

function AdminKarigars() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Karigars = useSelector(state=>state.karigar);
    
    const handleDelete = (karigarId)=>{

        dispatch(adminDeleteKarigar(karigarId))
        .then(()=>{
            console.log(karigarId);
            if (Karigars.success) {
                console.log('Successful');
            }   
        })
    }

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
                            {
                                Karigars.data.karigar && Karigars.data.karigar.map((v,index)=>{
                                    return <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{v.karigar_name}</td>
                                <td>{v.karigar_contact}</td>
                                <td>{v._id}</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='delete-btn' onClick={()=>{handleDelete(v._id)}}>
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