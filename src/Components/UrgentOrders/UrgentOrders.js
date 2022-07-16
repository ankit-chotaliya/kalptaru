import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowUp, AiOutlineCloudDownload } from 'react-icons/ai'
import { RiExchangeBoxLine,RiEqualizerLine } from 'react-icons/ri'
import { GrFormView } from 'react-icons/gr'
import { Modal, Button } from 'react-bootstrap'
import './UrgentOrder.css';
import ListView from '../Helper/ListView/ListView';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { orderStatusChange } from '../../actions/order.action'
import { setToastMsg } from '../../actions/toast.action'
import ModalHelper from '../Helper/Modal/ModalHelper'
import Loader from '../Helper/Loader/Loader'
const UrgentOrders=()=> {
  const navigate = useNavigate();
  const [orderData,setOrderData]=useState([]);
  const [orderForthisWeek,setOrderForthisWeek]=useState([]);
  const [orderForthisMonth,setOrderForthisMonth]=useState([]);
  const [orderForthisOther,setOrderForthisOther]=useState([]);
  const [filterModal,setFilterModal]=useState(false);
  const [filterClientId,setFilterClientId]=useState("");
  const [filterCategoryId,setFilterCategoryId]=useState("");
  const [filterKarigarId,setFilterKarigarId]=useState("");
  const [issorting,setIssorting]=useState("0");
  const [viewModal,setViewModal]=useState(false);
  const [updateOrderId,setUpdateOrderId]=useState("");
  const [statusNumber,setStatusNumber]=useState("");
  const [count,setCount]=useState(0);
  const order=useSelector(state=>state.order);
  const client=useSelector(state=>state.client);
  const category=useSelector(state=>state.category);
  const karigar=useSelector(state=>state.karigar);
  const dispatch=useDispatch();
  

  //render functions
  const handleopenEditForm = (orderId) => {
    navigate('/OrderView/'+orderId);
  }
  const handleChangeStatus=(orderId,statusNumber)=>{
    // console.log(orderId,statusNumber);
    setUpdateOrderId(orderId);
    setStatusNumber(statusNumber);
    setViewModal(true);
  }
  const handleModalReply=(e)=>{
        const reply=e.target.value;
        // console.log(reply);
        if(reply == "true"){
            let dataObj={};
            if(statusNumber=='4'){
                dataObj={
                    orderId:updateOrderId,
                    confirm:true
                }
            }else{
                dataObj={
                    orderId:updateOrderId,
                    confirm:false
                }
            }

            dispatch(orderStatusChange(dataObj));
            setOrderData([]);
            // alert("updated successfully!");
        }else{
            let dataObj={};
            if(statusNumber=='4'){
                dataObj={
                    orderId:updateOrderId,
                    confirm:false
                }
                dispatch(orderStatusChange(dataObj));
                setOrderData([]);
            }else{
                dispatch(setToastMsg("Remain as it is!",false));
            }
        }
        setViewModal(false);
    }
  //Filter from order state function
  const orderDatacreate=()=>{
    if(order.data.orders && order.data.orders.length>0){
      order.data.orders.map((ele,index)=>{
        if(ele.orderStatus!=6){
          let data={
            orderId:"",
            orderClient:"",
            orderClientId:"",
            orderKarigarId:"",
            orderCategoryId:"",
            orderCategory:"",
            orderStatus:"",
            orderDeliveryDate:"",
          }
          data.orderId=ele._id;
          var clientName;
          client.data.client.map((c)=>{
            if(c._id==ele.clientId){
              clientName=c.client_name;
              return;
            }
          })
          var categoryName;
          category.data.categories.map((c)=>{
            if(c._id==ele.orderCategory){
              categoryName=c.name;
              return;
            }
          })
          data.orderClient=clientName;
          data.orderCategory=categoryName;
          if(ele.orderStatus==1){
            data.orderStatus="New Order";
          }else if(ele.orderStatus==2){
            data.orderStatus="Order In Process"
          }else if(ele.orderStatus==3){
            data.orderStatus="Karigar Completed"
          }else if(ele.orderStatus==4){
            data.orderStatus="Order Ready"
          }else{
            data.orderStatus="Delivery Pending"
          }
          data.orderStatusNumber=ele.orderStatus;
          data.orderDeliveryDate=ele.deliveryDate;
          data.orderClientId=ele.clientId;
          data.orderCategoryId=ele.orderCategory;
          data.orderKarigarId=ele.karigarId;
          setOrderData(pstate=>[...pstate,data]);
          setCount(count+1);
        }
      })
    }
  }
  const dateFormat=(d)=>{
    var date = new Date(d);
    const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
    return day;
  }
  const duein=(d)=>{
    const date1=new Date(d);
    const date2=new Date();
    const diff=date1-date2;
    const inDays=Math.ceil(diff/(1000*60*60*24));
    return inDays;
  }
  const dueinmonth=(d)=>{
    const today=new Date();
    const lastdate=new Date(today.getFullYear(),today.getMonth()+1,0);
    const date=new Date(d);
    if(date>=today && date<=lastdate){
      return true;
    }
    return false;
  } 
  useEffect(()=>{
    if(order.data.orders && client.data.client && category.data.categories && orderData.length==0){
      orderDatacreate();
    }
  },[order.data.orders,client.data.client,category.data.categories])

  useEffect(()=>{
    handlethisweek(orderData);
    handlethismonth(orderData);
    handlethisother(orderData);
  },[orderData])
  const handlethisweek=(orderData)=>{
    let obj=[];
    if(orderData.length>0){
      orderData.forEach(item => {
        let duedays=duein(item.orderDeliveryDate);
        if(duedays<=7){
          obj.push(item);
        }
      });
    }
    if(filterClientId){
      obj=obj.filter(a=>a.orderClientId==filterClientId);
    }
    if(filterCategoryId){
      obj=obj.filter(a=>a.orderCategoryId==filterCategoryId);
    }
    if(filterKarigarId){
      obj=obj.filter(a=>a.orderKarigarId==filterKarigarId);
    }
    if(issorting=='1'){
      obj.sort((a,b)=>{
        const date1=a.orderDeliveryDate;
        const date2=b.orderDeliveryDate;
        const c=new Date(date1);
        const d=new Date(date2);
        return d-c;  
      })
      setOrderForthisWeek(obj);
    }else if(issorting=='2'){
      obj.sort((a,b)=>{
        const date1=a.orderDeliveryDate;
        const date2=b.orderDeliveryDate;
        const c=new Date(date1);
        const d=new Date(date2);
        return c-d;  
      })
      setOrderForthisWeek(obj);
    }else{
      setOrderForthisWeek(obj);
    }
  }
  const handlethismonth=(orderData)=>{
    let obj=[];
    if(orderData.length>0){
      orderData.forEach(item => {
        const duedays=dueinmonth(item.orderDeliveryDate);
        if(duedays){
            obj.push(item);
          }
      });
    }
    if(filterClientId){
      obj=obj.filter(a=>a.orderClientId==filterClientId);
    }
    if(filterCategoryId){
      obj=obj.filter(a=>a.orderCategoryId==filterCategoryId);
    }
    if(filterKarigarId){
      obj=obj.filter(a=>a.orderKarigarId==filterKarigarId);
    }
    if(issorting=='1'){
      obj.sort((a,b)=>{
        const date1=a.orderDeliveryDate;
        const date2=b.orderDeliveryDate;
        const c=new Date(date1);
        const d=new Date(date2);
        return d-c;  
      })
      setOrderForthisMonth(obj);
    }else if(issorting=='2'){
      obj.sort((a,b)=>{
        const date1=a.orderDeliveryDate;
        const date2=b.orderDeliveryDate;
        const c=new Date(date1);
        const d=new Date(date2);
        return c-d;  
      })
      setOrderForthisMonth(obj);
    }else{
      setOrderForthisMonth(obj);
    }
    
  }
  const handlethisother=(orderData)=>{
    let obj=[];
    if(orderData.length>0){
    orderData.forEach(item => {
      obj.push(item);
    });
    }
    if(filterClientId){
      obj=obj.filter(a=>a.orderClientId==filterClientId);
    }
    if(filterCategoryId){
      obj=obj.filter(a=>a.orderCategoryId==filterCategoryId);
    }
    if(filterKarigarId){
      obj=obj.filter(a=>a.orderKarigarId==filterKarigarId);
    }
    if(issorting=='1'){
      obj.sort((a,b)=>{
        const date1=a.orderDeliveryDate;
        const date2=b.orderDeliveryDate;
        const c=new Date(date1);
        const d=new Date(date2);
        return d-c;  
      })
      setOrderForthisOther(obj);
    }else if(issorting=='2'){
      obj.sort((a,b)=>{
        const date1=a.orderDeliveryDate;
        const date2=b.orderDeliveryDate;
        const c=new Date(date1);
        const d=new Date(date2);
        return c-d;  
      })
      setOrderForthisOther(obj);
    }else{
      setOrderForthisOther(obj);
    }
    
  }
  const handlefilterClientChange=(e)=>{
    e.preventDefault();
    setFilterClientId(e.target.value);
  }

  const handlefilterKarigarChange=(e)=>{
    e.preventDefault();
    setFilterKarigarId(e.target.value);
  }
  const handlefilterCategoryChange=(e)=>{
    e.preventDefault();
    setFilterCategoryId(e.target.value);
  }
  const handlefilterSortingChange=(e)=>{
    setIssorting(e.target.value);
  }
  const handleFilterApply=(e)=>{
    e.preventDefault();
    handlethisweek(orderData);
    handlethismonth(orderData);
    handlethisother(orderData);
    setFilterModal(false);
  }

  const handleRestFilter=(e)=>{
    e.preventDefault();
    setFilterKarigarId("");
    setFilterClientId("");
    setFilterCategoryId("");
    setIssorting('0');
    // setFilterModal(false);
  }
  return (
    <>
      <Navbar />
      <Modal
        show={filterModal}
        onHide={()=>setFilterModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='no-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <div className='no-heading'>
            <AiOutlineArrowLeft onClick={()=>setFilterModal(false)}/> Filters
          </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleFilterApply}>
        <div className="row">
        {
          <div className="col-md-6 col-sm-12 mt-4">
          <label htmlFor="select-client">Select Client*:</label>
          <div className='d-flex justify-content-start'>
              <select className="form-select no-select-full-row" aria-label="Default select example" id='select-client' name="clientName" onChange={handlefilterClientChange}>
              <option selected={filterClientId==""?true:false}>Select</option>
              {
                  client.data.client && client.data.client.map((c,index)=>{
                      return <option value={c._id} selected={c._id==filterClientId?true:false}>{c.client_name}</option>;
                  })
              }
              </select>
          </div>
          </div>
        }
        
          <div className="col-md-6 col-sm-12 mt-4">
          <label htmlFor="select-karigar">Select Karigar*:</label>
          <div className='d-flex justify-content-start'>
              <select className="form-select no-select-full-row" aria-label="Default select example" id="select-karigar" name="karigarName"  onChange={handlefilterKarigarChange}>
              <option selected={filterKarigarId==""?true:false}>Select</option>
              {
                  karigar.data.karigar && karigar.data.karigar.map((k,index)=>{
                      return <option value={k._id} selected={k._id==filterKarigarId?true:false}>{k.karigar_name}</option>;
                  })
              }
              </select>
          </div>
          </div>
        </div>
        <div className='row mt-4'>
            <label htmlFor="product-category">Product Category*:</label>
            <div className='d-flex justify-content-start'>
                <select className="form-select no-select-full-row" aria-label="Default select example" id="product-category" name="category" onChange={handlefilterCategoryChange}>
                    <option selected={filterCategoryId==""?true:false}>Select</option>
                    {
                        category.data.categories && category.data.categories.map((c,index)=>{
                            return <option value={c._id} selected={c._id==filterCategoryId?true:false}>{c.name}</option>;
                        })
                    }
                </select>
            </div>
        </div>
        <div className='row'>
            <div className="col-md-6 col-sm-12 mt-4">
              <label htmlFor="huid">Sorting:</label>
              <div className='d-flex justify-content-start'>
                  <div className="form-check">
                    <input className="form-check-input no-radio no-order-type p-2" type="radio" name="sorting" value='1' checked={issorting=='1'?true:false} id="des" onChange={handlefilterSortingChange}/>
                    <label className="form-check-label" htmlFor="des">
                        Recent Delivery <AiOutlineArrowDown/>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input no-radio no-order-type p-2" type="radio" name="sorting" value='2' checked={issorting=='2'?true:false} id="aes" onChange={handlefilterSortingChange}/>
                    <label className="form-check-label" htmlFor="aes">
                        Recent Delivery <AiOutlineArrowUp/>
                    </label>
                  </div>
              </div>
            </div>
        </div>

          <Modal.Footer>
              <button type='reset' className="mt-3 w-25 no-add-more" onClick={handleRestFilter}>Reset Default</button>
              <button type='submit' className="mt-3 w-25 no-sub-btn">Apply Filter</button>
          </Modal.Footer>
        </form>
        </Modal.Body>
      </Modal>
      {
        order.loading?<Loader/>:<div className='container no-main no-border pageview'>
        <div className='uo-heading no-heading'>
          <div className='uo-editorder'>
            <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={() => navigate(-1)} /> Urgent Orders
          </div>
        </div>
        <div className='uo-heading2 mt-4'>
          <div className='uo-editorder2'>
            This Week
          </div>
          <button className='uo-more-btn' onClick={()=>setFilterModal(true)}>
            <RiEqualizerLine style={{ cursor: 'pointer' }} />
            <div className='uo-moretext'>More</div>
          </button>
        </div>

        <div className='eo-container mt-4'>
          {
            orderForthisWeek && orderForthisWeek.length>0?orderForthisWeek.map((ele,index)=>{
              return <ListView
              mobile={true}
              indexnum={index+1}
              property1="Client Name:"
              property2="Category:"
              property3="Delivery Date:"
              propertyLabel="Order Status:"
              value1={!ele.orderClient?"None":ele.orderClient}
              value2={!ele.orderCategory?"None":ele.orderCategory}
              value3={!ele.orderDeliveryDate?"None":dateFormat(ele.orderDeliveryDate)}
              valueLabel={!ele.orderStatus?"Not Decided":ele.orderStatus}
              icon={<GrFormView className='app-icon' onClick={()=>{handleopenEditForm(ele.orderId)}} />}
              icon1={<RiExchangeBoxLine className='app-icon' onClick={()=>handleChangeStatus(ele.orderId,ele.orderStatusNumber)}/>}
            />
            }):<div className='text-center'><h2>No Delivery Orderes were available in this week!</h2></div>
          }
        </div>
        <div className='uo-heading2 mt-5'>
          <div className='uo-editorder2'>
            This Month
          </div>
         
        </div>

        <div className='eo-container mt-4'>
        {
          orderForthisMonth && orderForthisMonth.length>0?orderForthisMonth.map((ele,index)=>{
            return <ListView
            mobile={true}
            indexnum={index+1}
            property1="Client Name:"
            property2="Category:"
            property3="Delivery Date:"
            propertyLabel="Order Status:"
            value1={ele.orderClient==""|| !ele.clientName?"None":ele.orderClient}
            value2={ele.orderCategory=="" || !ele.orderCategory?"None":ele.orderCategory}
            value3={ele.orderDeliveryDate=="" || !ele.orderDeliveryDate?"None":dateFormat(ele.orderDeliveryDate)}
            valueLabel={ele.orderStatus=="" || !ele.orderStatus?"Not Decided":ele.orderStatus}
            icon={<GrFormView className='app-icon' onClick={()=>{handleopenEditForm(ele.orderId)}} />}
            icon1={<RiExchangeBoxLine className='app-icon' onClick={()=>handleChangeStatus(ele.orderId)}/>}
          />
          }):<div className='text-center'><h2>No Delivery Orderes were available in this Month!</h2></div>
        }
        </div>

        <div className='uo-heading2 mt-5'>
          <div className='uo-editorder2'>
            Other
          </div>
          
        </div>

        <div className='eo-container mt-4'>
        {
          orderForthisOther && orderForthisOther.length>0?orderForthisOther.map((ele,index)=>{
            return <ListView
            mobile={true}
            indexnum={index+1}
            property1="Client Name:"
            property2="Category:"
            property3="Delivery Date:"
            propertyLabel="Order Status:"
            value1={ele.orderClient==""|| !ele.orderClient?"None":ele.orderClient}
            value2={ele.orderCategory=="" || !ele.orderCategory?"None":ele.orderCategory}
            value3={ele.orderDeliveryDate=="" || !ele.orderDeliveryDate?"None":dateFormat(ele.orderDeliveryDate)}
            valueLabel={ele.orderStatus=="" || !ele.orderStatus?"Not Decided":ele.orderStatus}
            icon={<GrFormView className='app-icon' onClick={()=>{handleopenEditForm(ele.orderId)}} />}
            icon1={<RiExchangeBoxLine className='app-icon' onClick={()=>handleChangeStatus(ele.orderId)}/>}
          />
          }):<div className='text-center'><h2>No Delivery Orderes were available above month!</h2></div>
        }
        </div>
      </div>
      }
      
      <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<RiExchangeBoxLine/>}
                    text="Are you sure you want push order into next Status?"
                    reply={handleModalReply}
                    />

    </>
  )
}

export default UrgentOrders