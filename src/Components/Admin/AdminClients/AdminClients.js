import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AddClient from '../../AddClient/AddClient';
import './AdminClients.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddClientCsv from '../../AddClient/AddClientCsv';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Loader from '../../Helper/Loader/Loader';
import AdminClientTable from '../../Helper/AdminClientTable/AdminClientTable';

function AdminClients() {

    const navigate = useNavigate();
    const clients = useSelector(state => state.client);


    const [addClientModal, setAddClientModal] = useState(false);
    const [addClientCsvModal, setAddClientCsvModal] = useState(false);
    const [data, setData] = useState([])
  


    useEffect(() => {
        if (clients.success == true) {
            setData(clients.data.client);
        }
    }, [clients])
    // console.log(data)

    const handleClient = (e) => {
        e.preventDefault();
        setAddClientModal(true);
    }
    const handleClientCsv = (e) => {
        e.preventDefault();
        setAddClientCsvModal(true);
    }
    
    return (
        <>
            <AdminNavbar />
            {
                clients.loading ? <Loader /> : <div className='container no-main no-border pageview'>
                    <div className='to-heading no-heading'>
                        <div className='to-editorder'>
                            <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Clients
                        </div>
                    </div>
                    <button className='no-add-btn mt-4 w-25' style={{ marginRight: "414px" }} onClick={handleClient} > Add Client </button>
                    <AddClient
                        show={addClientModal}
                        onHide={() => setAddClientModal(false)}
                    />
                    <button className='no-add-btn mt-4 w-25' onClick={handleClientCsv} > Add Client using CSV </button>
                    <AddClientCsv
                        show={addClientCsvModal}
                        onHide={() => setAddClientCsvModal(false)}
                    />
                   <AdminClientTable/>
                   
                </div>
            }
        </>
    )
}

export default AdminClients