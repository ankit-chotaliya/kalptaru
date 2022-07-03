import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminClients.css';
import ModalHelper from '../../Helper/Modal/ModalHelper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineTrash } from "react-icons/hi";
import { adminDeleteClient, adminGetAllClient } from '../../../actions/admin.action';
import Pagination from '../../Helper/Pagination/Pagination';
import Loader from '../../Helper/Loader/Loader';
import AdminClientTable from '../../Helper/AdminClientTable/AdminClientTable';

function AdminClients() {

    const navigate = useNavigate();
    const clients = useSelector(state => state.client);

    const [viewModal, setViewModal] = useState(false);
    const [orderDeleteId, setOrderDeleteId] = useState("");
    const [data, setData] = useState([])

   


    useEffect(() => {
        if (clients.success==true) {
            setData(clients.data.client);
        }
    }, [clients])




    return (
        <>
            <AdminNavbar />
            {
              clients.loading?<Loader/>: <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Clients    
                    </div>
                </div>
              <AdminClientTable/>
            </div>
            }
        </>
    )
}

export default AdminClients