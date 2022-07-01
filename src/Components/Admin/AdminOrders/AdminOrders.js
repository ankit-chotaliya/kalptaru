import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './AdminOrders.css';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Pagination from '../../Helper/Pagination/Pagination';
import Loader from '../../Helper/Loader/Loader';


const dateFormat = (d) => {
    var date = new Date(d);
    const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
    return day;
}
function AdminOrders() {

    const navigate = useNavigate();
    const Orders = useSelector(state=>state.order);

    const [currentRecords,setCurrentRecords] = useState([]);
    const [nPages,setNPages] = useState(1);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [indexOfFirstRecord,setindexOfFirstRecord] = useState(0);
    const [indexOfLastRecord,setindexOfLastRecord] = useState(10);
    const [isUrgent,setIsUrgent]=useState(false);
    const [isFast,setIsFast]=useState(false);
    const [isNormal,setIsNormal]=useState(false);
    const [isDefault,setIsDefault]=useState(true);
    const [isSorting,setIsSorting]=useState(false);
    const recordsPerPage = 10;

    useEffect(()=>{
        if (data.length > 0 && isSorting==false) {
            let d = currentPage * recordsPerPage;
            setindexOfLastRecord(d);
            setindexOfFirstRecord(d - recordsPerPage);
            setCurrentRecords(data.slice(d - recordsPerPage, d));
            setNPages( Math.ceil(data.length / recordsPerPage));
        }
        if (isSorting==true) {
            let d = currentPage * recordsPerPage;
            setindexOfLastRecord(d);
            setindexOfFirstRecord(d - recordsPerPage);
            setNPages( Math.ceil(currentRecords.length / recordsPerPage));
        }
        },[data,currentPage,isNormal,isDefault,isFast,isUrgent])
        useEffect(() => {
            if (Orders.success==true) {
                setData(Orders.data.order);
            }
        }, [Orders])

        useEffect(()=>{
            if(currentRecords.length==0){
                    if (currentPage==1) {
                        // console.log("currentpage:",currentPage);
                        setCurrentPage(1)
                    } else {
                        setCurrentPage(currentPage-1);
                        // console.log("currentpage:",currentPage);
                    }
                }
        },[currentRecords])
        
        const handleUrgent=()=>{
            setIsUrgent(true);
            setIsNormal(false);
            setIsFast(false);
            setIsDefault(false);
            setIsSorting(true);
            setCurrentRecords(data.filter(x=>x.priority=='Urgent'));
            setCurrentPage(1);
          }
          const handleFast=()=>{
            setIsUrgent(false);
            setIsNormal(false);
            setIsFast(true);
            setIsDefault(false);
            setIsSorting(true);
            setCurrentPage(1);
            setCurrentRecords(data.filter(x=>x.priority=='Fast'));
          }
          const handleNormal=()=>{
            setIsUrgent(false);
            setIsNormal(true);
            setIsFast(false);
            setIsDefault(false);
            setIsSorting(true);
            setCurrentPage(1);
            setCurrentRecords(data.filter(x=>x.priority=='Normal'));
          }
          const handleDefault=()=>{
            setIsUrgent(false);
            setIsNormal(false);
            setIsFast(false);
            setIsDefault(true);
            setIsSorting(false);
            setCurrentPage(1);
          }

    return (
        <>
            <AdminNavbar />
            {
            Orders.data.loading?<Loader/>:
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Orders
                        <span style={{fontSize:"18px", fontWeight:"bold"}}>
                        {
                                data.length>0?<>{indexOfFirstRecord + 1 } - {indexOfLastRecord+currentRecords.length - 10} of {data.length}</>:null
                        }
                        </span>
                    </div>
                </div>
                {console.log(data)}
                <div className='container mt-4'>
                    <div className='btns'>
                        <button className={isUrgent?'btn1 btn1-active':'btn1'} onClick={handleUrgent}>Urgent</button>
                        <button className={isFast?'btn1 btn-bt btn1-active':'btn1 btn-bt'} onClick={handleFast}>Fast</button>
                        <button className={isNormal?'btn1 btn-bt btn1-active':'btn1 btn-bt'} onClick={handleNormal}>Normal</button>
                        <button className={isDefault?'btn1 btn1-active':'btn1'} onClick={handleDefault}>Default</button>
                    </div>
                </div>
                {data.length>0?<>
                <div className='table-responsive-md'>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'>No</th>
                                <th scope="col" className='text-center'>Client Name</th>
                                <th scope="col" className='text-center'>Phone No</th>
                                <th scope="col" className='text-center'>Category</th>
                                <th scope="col" className="text-center">Placed By</th>
                                <th scope="col" className="text-center">Karigar Name</th>
                                <th scope="col" className="text-center">Order Status</th>
                                <th scope="col" className="text-center">Order Date</th>
                                <th scope="col" className="text-center">Due Date</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            currentRecords.map((o,index)=>{
                              return  <tr key={index} >
                                <th scope="row" className='text-center align-middle'>{index + 1 + indexOfLastRecord - 10}</th>
                                <td scope="row" className='text-center align-middle w-25'>{o.clientId?o.clientId.client_name:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle w-25'>{o.clientId?o.clientId.client_contact:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle'>{o.orderCategory.name}</td>
                                <td scope="row" className='text-center align-middle'>{o.createdby?o.createdby.fullname:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle'>{o.karigarId?o.karigarId.karigar_name:<>Null</>}</td>
                                <td scope="row" className='text-center align-middle'>
                                {o.orderStatus==1 ?"New Order":null}
                                {o.orderStatus==2 ?"In Process":null}
                                {o.orderStatus==3 ?"Karigar Ccompleted":null}
                                {o.orderStatus==4 ?"Order Ready":null}
                                {o.orderStatus==5 ?"Delivery Pending":null}
                                {o.orderStatus==6 ?"Delivered":null}
                                </td>
                                <td scope="row" className='text-center align-middle'>{dateFormat(o.createdAt)}</td>
                                <td scope="row" className='text-center align-middle'>{dateFormat(o.deliveryDate)}</td>
                            </tr> ;
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
                </>:<div className='text-center'><h2>No Orders Available right now</h2></div>
                }

            </div>
            }

        </>
    )
}

export default AdminOrders