import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminClients.css';
import ModalHelper from '../../Helper/Modal/ModalHelper';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { adminDeleteClient, adminGetAllClient } from '../../../actions/admin.action';
import Pagination from '../../Helper/Pagination/Pagination';
import Loader from '../../Helper/Loader/Loader';

function AdminClients() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clients = useSelector(state => state.client);

    const [viewModal, setViewModal] = useState(false);
    const [orderDeleteId, setOrderDeleteId] = useState("");
    const [currentRecords,setCurrentRecords] = useState([]);
    const [nPages,setNPages] = useState(1);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [indexOfFirstRecord,setindexOfFirstRecord] = useState(0);
    const [indexOfLastRecord,setindexOfLastRecord] = useState(10);
    const recordsPerPage = 10;
   
    useEffect(()=>{
    if (data.length > 0) {
        let d = currentPage * recordsPerPage;
        setindexOfLastRecord(d);
        setindexOfFirstRecord(d - recordsPerPage);
        setCurrentRecords(data.slice(d - recordsPerPage, d));
        setNPages( Math.ceil(data.length / recordsPerPage));
    }
    },[data,currentPage])

    useEffect(() => {
        if (clients.success==true) {
            setData(clients.data.client);
        }
    }, [clients])

    useEffect(()=>{
        if(currentRecords.length==0){
                if (currentPage==1) {
                    console.log("currentpage:",currentPage);
                    setCurrentPage(1)
                } else {
                    setCurrentPage(currentPage-1);
                    console.log("currentpage:",currentPage);
                }
            }
    },[currentRecords])


    const handleModalReply = (e) => {
        const reply = e.target.value;
        if (reply == "true") {
            dispatch(adminDeleteClient(orderDeleteId)).then(() => {
                if (clients.success) {
                    // console.log("Successfull");
                }
            })
            dispatch(adminGetAllClient());
        }
        setViewModal(false);
    }

    const handleDelete = (clientId) => {
        setOrderDeleteId(clientId);
        setViewModal(true);
    }

    return (
        <>
            <AdminNavbar />
            {
                clients.data.loading?<Loader/>: <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Clients
                        <span style={{fontSize:"18px", fontWeight:"bold"}}>
                        {
                                data.length>0?<>{indexOfFirstRecord + 1 } - {indexOfLastRecord+currentRecords.length - 10} of {data.length}</>:null
                        }
                        </span>
                    </div>
                </div>
                {data.length>0?<>
                <div className='table-responsive-md'>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center' >No</th>
                                <th scope="col" className='text-center'>Name</th>
                                <th scope="col" className='text-center'>Phone No</th>
                                <th scope="col" className='text-center'> City</th>
                                <th scope="col" className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">

                            {
                              currentRecords.map((c, index) => {

                                    return <tr key={index}>
                                        <th scope="row" className='text-center align-middle'>{index + 1 + indexOfLastRecord - 10}</th>
                                        <td scope="row" className='text-center align-middle'>{c.client_name}</td>
                                        <td scope="row" className='text-center align-middle'>{c.client_contact}</td>
                                        <td scope="row" className='text-center align-middle'>{c.client_city}</td>
                                        <td className="text-center"><div className='co-customer-share'>
                                            <button className='adclient-btn del-icon'><HiOutlineTrash id='deleteicon' onClick={() => handleDelete(c._id)} /></button>
                                        </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<HiOutlineTrash />}
                    text="Are you sure you want to delete this Client?"
                    onReply={(e) => handleModalReply(e)}
                />
                </>:<div className='text-center'><h2>No Clients Available right now</h2></div>
                }
            </div>
            }
        </>
    )
}

export default AdminClients