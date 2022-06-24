import React,{ useState }from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminUsers.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import online from './online.ico';
import offline from './offline.ico';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineTrash } from "react-icons/hi";
import ModalHelper from '../../Helper/Modal/ModalHelper';
import { adminDeleteuser } from '../../../actions/admin.action';

function AdminUsers() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Users = useSelector(state=>state.user);

    const [viewModal,setViewModal] = useState(false);
    const [orderDeleteId,setOrderDeleteId] = useState("");

    const handleModalReply = (e) =>{
        const reply = e.target.value;

        if(reply=="true"){
            dispatch(adminDeleteuser(orderDeleteId)).then(()=>{
                if (Users.success) {
                    console.log("Successfull")
                }
            })
        }
        setViewModal(false);
    }
    
    const handleDelete = (userId)=>{
        setOrderDeleteId(userId);
        setViewModal(true);
    }

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
                            <th scope="col"  className='text-center'>No</th>
                            <th scope="col"  className='text-center'>Name</th>
                            <th scope="col"  className='text-center'>Phone No</th>
                            <th scope="col" className="text-center w-25"> Status</th>
                            <th scope="col" className="text-center">Active / Deactive</th>
                            <th scope="col" className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        Users.data.user && Users.data.user.map((u,index)=>{
                            return <tr className='text-center align-middle' key={index}>
                            <th scope="row" className='text-center align-middle'>{index+1}</th>
                            <td className='text-center align-middle'>{u.fullname}</td>
                            <td className='text-center align-middle'>{u.contact}</td>
                            <td className="text-center align-middle"><img className="status" src={u.loginstatus? online :offline} /></td>
                            <td className="text-center align-middle"><div className='co-customer-share'>
                                <button className='co-btn'>
                                   {u.isActive ?<>Active &nbsp;<AiOutlineCheckCircle /></>  : <>Deactive &nbsp;<AiOutlineCloseCircle /></> } 
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                            <button className='adkarigar-btn del-icon'><HiOutlineTrash id='deleteicon' onClick={() => handleDelete(u._id)} /></button>
                            </div></td>
                        </tr>
                        })
                    }
                    </tbody>
                </table>
                </div>
                <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<HiOutlineTrash />}
                    text="Are you sure you want to delete this User?"
                    onReply={(e) => handleModalReply(e)}
                />
            </div>

        </>
    )
}

export default AdminUsers