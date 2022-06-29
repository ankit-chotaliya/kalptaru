import React, { useEffect, useState }  from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
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
function AdminCompletedOrders() {

    const navigate = useNavigate();
    const Orders = useSelector(state=>state.order);

    const [currentRecords,setCurrentRecords] = useState([]);
    const [nPages,setNPages] = useState(1);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [indexOfFirstRecord,setindexOfFirstRecord] = useState(0);
    const [indexOfLastRecord,setindexOfLastRecord] = useState(10);
    const recordsPerPage = 10;

    let array = [];

    useEffect(() => {

        Orders.data.order && Orders.data.order.map((o,index) => {
            if(o.orderStatus==6){
                array.push(Orders.data.order[index]);
              }
          })
          setData(array);
    }, [])

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
            if (Orders.success==true) {
                setData(array);
            }
        }, [Orders])
    
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


    return (
        <>
            <AdminNavbar />
            {
                Orders.data.loading?<Loader/>:
            <div className='container no-main no-border pageview'>
                <div className='to-heading no-heading'>
                    <div className='to-editorder'>
                        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Completed Orders
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
                                <th scope="col" className='text-center'>No</th>
                                <th scope="col" className='text-center'>Client Name</th>
                                <th scope="col" className='text-center'>Phone No</th>
                                <th scope="col" className='text-center'>Category</th>
                                <th scope="col" className="text-center">Placed By</th>
                                <th scope="col" className="text-center">Karigar Name</th>
                                <th scope="col" className="text-center">Order Status</th>
                                <th scope="col" className="text-center">Order Date</th>
                                <th scope="col" className="text-center">Delivery Date</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {
                            currentRecords.map((o,index)=>{
                                console.log(currentRecords);
                                if(o.orderStatus==6){
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
                                }
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
                </>:<div className='text-center'><h2>No Completed Orders Available right now</h2></div>
                }
            </div>
            }
        </>
    )
}

export default AdminCompletedOrders