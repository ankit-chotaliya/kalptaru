import React,{ useEffect,useState }from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminUsers.css';
import { AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import online from './online.ico';
import offline from './offline.ico';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineTrash } from "react-icons/hi";
import ModalHelper from '../../Helper/Modal/ModalHelper';
import { adminDeleteuser, adminGetAllUser, adminUActivateDeactivate } from '../../../actions/admin.action';
import Pagination from '../../Helper/Pagination/Pagination';
import Loader from '../../Helper/Loader/Loader';

function AdminUsers() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);

    const [viewModal,setViewModal] = useState(false);
    const [orderDeleteId,setOrderDeleteId] = useState("");
    const [uActivate,setUActivate] = useState(false);
    const [userId,setuserID] = useState();

    const [currentRecords,setCurrentRecords] = useState([]);
    const [nPages,setNPages] = useState(1);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [indexOfFirstRecord,setindexOfFirstRecord] = useState(0);
    const [indexOfLastRecord,setindexOfLastRecord] = useState(10);
    const recordsPerPage = 10;

    useEffect(() => {
        if(user.success==true){
            setData(user.data.user);
        }
    }, [user])
    useEffect(()=>{
        if (data.length > 0) {
            let d = currentPage * recordsPerPage;
            setindexOfLastRecord(d);
            setindexOfFirstRecord(d - recordsPerPage);
            setCurrentRecords(data.slice(d - recordsPerPage, d));
            setNPages( Math.ceil(data.length / recordsPerPage));
        }
        },[data,currentPage])

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

    const handleUactivateModalReply = (e) =>{
        const reply = e.target.value;

        if(reply=="true"){
            console.log(userId);
            dispatch(adminUActivateDeactivate({userId})).then(()=>{
                if (user.success) {
                    console.log("Successfull")
                }
            })
        }
        setViewModal(false);
    }

    const handleModalReply = (e) =>{
        const reply = e.target.value;

        if(reply=="true"){
            dispatch(adminDeleteuser(orderDeleteId)).then(()=>{
                if (user.success) {
                    console.log("Successfull")
                }
            })
            dispatch(adminGetAllUser());
        }
        setViewModal(false);
    }
    
    const handleDelete = (userId)=>{
        setOrderDeleteId(userId);
        setViewModal(true);
    }

    const handleUActivate = (userId)=>{
        setuserID(userId);
        console.log(userId);
        setUActivate(true);
        setViewModal(true);
    }

    return (
        <>
            <AdminNavbar />
            {
                // user.data.loading?<Loader/>:
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Users
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
                            <th scope="col" className="text-center w-25"> Status</th>
                            <th scope="col" className="text-center">Active / Deactive</th>
                            <th scope="col" className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        currentRecords.map((u,index)=>{
                            return <tr className='text-center align-middle' key={index}>
                            <th scope="row" className='text-center align-middle'>{index + 1 + indexOfLastRecord - 10}</th>
                            <td className='text-center align-middle'>{u.fullname}</td>
                            <td className='text-center align-middle'>{u.contact}</td>
                            <td className="text-center align-middle"><img className="status" src={u.loginstatus? online :offline} /></td>
                            <td className="text-center align-middle"><div className='co-customer-share'>
                                <button className='co-btn'  onClick={() => handleUActivate(u._id)}>
                                   { u.isActive ?<>Active &nbsp;<AiOutlineCheckCircle /></>  : <>Deactive &nbsp;<AiOutlineCloseCircle /></> } 
                                </button>
                            </div></td>
                            <td className="text-center"><div className='co-customer-share'>
                            <button onClick={() => handleDelete(u._id)} className='adkarigar-btn del-icon'><HiOutlineTrash id='deleteicon'/></button>
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
                    text="Are you sure you want to delete this User?"
                    reply={(e) => handleModalReply(e)}
                />
                <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<HiOutlineTrash />}
                    text="Are you sure you want to delete this User?"
                    onReply={(e) => handleUactivateModalReply(e)}
                />
                 </>:<div className='text-center'><h2>No Users Available right now</h2></div>
                }
            </div>
            }
        </>
    )
}

export default AdminUsers