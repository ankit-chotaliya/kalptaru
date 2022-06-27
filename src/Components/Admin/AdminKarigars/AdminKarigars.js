import React, { useEffect,useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminKarigars.css';
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { adminDeleteKarigar } from '../../../actions/admin.action';
import { HiOutlineTrash } from "react-icons/hi";
import ModalHelper from '../../Helper/Modal/ModalHelper';
import Pagination from '../../Helper/Pagination/Pagination';

function AdminKarigars() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Karigars = useSelector(state=>state.karigar);

    const [viewModal,setViewModal] = useState(false);
    const [orderDeleteId,setOrderDeleteId] = useState("");

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    useEffect(() => {
        setData(Karigars.data.karigar);
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    const handleModalReply = (e) =>{
        const reply = e.target.value;

        if(reply=="true"){
            dispatch(adminDeleteKarigar(orderDeleteId)).then(()=>{
                if (Karigars.success) {
                    console.log("Successfull")
                }
            })
        }
        setViewModal(false);
    }
    
    const handleDelete = (karigarId)=>{
        setOrderDeleteId(karigarId);
        setViewModal(true);
    }

    return (
        <>
            <AdminNavbar />
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Karigars
                        <span style={{fontSize:"18px", fontWeight:"bold"}}>( {indexOfFirstRecord + 1 } - {indexOfLastRecord+currentRecords.length - 10} of {data.length})</span>
                    </div>
                </div>
                <div className='table-responsive-md'>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col"  className='text-center'>No</th>
                                <th scope="col"  className='text-center'>Name</th>
                                <th scope="col"  className='text-center'>Phone No</th>
                                <th scope="col"  className='text-center'> City</th>
                                <th scope="col" className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {
                                currentRecords.map((v,index)=>{
                                    return <tr key={index}>
                                <th className='text-center align-middle' scope="row">{index + 1 + indexOfLastRecord - 10}</th>
                                <td scope="row" className='text-center align-middle'>{v.karigar_name}</td>
                                <td scope="row" className='text-center align-middle'>{v.karigar_contact}</td>
                                <td scope="row" className='text-center align-middle'>{v.karigar_city}</td>
                                <td className="text-center"><div className='co-customer-share'>
                                <button className='adkarigar-btn del-icon'><HiOutlineTrash id='deleteicon' onClick={() => handleDelete(v._id)} /></button>
                            </div></td>
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
            </div>
        </>
    )
}

export default AdminKarigars