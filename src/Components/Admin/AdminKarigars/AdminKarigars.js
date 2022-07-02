import React, { useEffect,useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminKarigars.css';
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { adminDeleteKarigar, adminGetAllKarigar } from '../../../actions/admin.action';
import { HiOutlineTrash } from "react-icons/hi";
import ModalHelper from '../../Helper/Modal/ModalHelper';
import Pagination from '../../Helper/Pagination/Pagination';
import Loader from '../../Helper/Loader/Loader';

function AdminKarigars() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Karigars = useSelector(state=>state.karigar);

    const [viewModal,setViewModal] = useState(false);
    const [orderDeleteId,setOrderDeleteId] = useState("");
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
        if (Karigars.success==true) {
            setData(Karigars.data.karigar);
        }
    }, [Karigars])

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
    const handleModalReply = (e) =>{
        const reply = e.target.value;
        if(reply=="true"){
            dispatch(adminDeleteKarigar(orderDeleteId)).then(()=>{
                if (Karigars.success) {
                }
            })
            dispatch(adminGetAllKarigar());
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
            {
                Karigars.data.loading?<Loader/>:<div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Karigars
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
                                <th scope="col"  className='text-center'>No</th>
                                <th scope="col"  className='text-center'>Name</th>
                                <th scope="col"  className='text-center'>Phone No</th>
                                <th scope="col"  className='text-center'>City</th>
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
                                <button  onClick={() => handleDelete(v._id)}  className='adkarigar-btn del-icon'><HiOutlineTrash id='deleteicon'/></button>
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
                    text="Are you sure you want to delete this karigar?"
                    reply={(e) => handleModalReply(e)}
                />
                </>:<div className='text-center'><h2>No Karigars Available right now</h2></div>
                }        
            </div>
            }   
        </>
    )
}

export default AdminKarigars