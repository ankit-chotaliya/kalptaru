import React,{ useEffect, useState } from 'react'
import {AiOutlineUpload} from 'react-icons/ai'
import {ImAttachment} from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setToastMsg } from '../../actions/toast.action';
import axiosinstance from '../../utils/axios';
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import Loader from '../Helper/Loader/Loader';
import './editOrder.css'
const EditOrderFormHelper = (props) => {
    const [imglen,setImglen]=useState(0);
    const [loading,setLoading]=useState(false);
    //dispatch Variable
    const dispatch=useDispatch();

    //state variables
    const client=useSelector(state=>state.client);
    const karigar=useSelector(state=>state.karigar);
    const category=useSelector(state=>state.category);
    //Form Variables
    const [clientName,setClientName]=useState("");
    const [karigarName,setKarigarName]=useState("");
    const [categoryName,setCategoryName]=useState("");
    const [refNo,setRefNo]=useState("");
    const [qty,setQty]=useState(1);
    const [weightFrom,setWeightFrom]=useState(1);
    const [weightTo,setWeightTo]=useState(1);
    const [dDate,setDdate]=useState("");
    const [melting,setMelting]=useState("");
    const [priority,setPriority]=useState("");
    const [img,setImg]=useState([]);
    const [huid,setHuid]=useState("");
    const [oType,setOtype]=useState("");
    const {orderId}=useParams();

    //Form Trackers
    const handleClientChange=(e)=>{
        e.preventDefault();
        setClientName(e.target.value);
    }
    const handleKariarChange=(e)=>{
        e.preventDefault();
        setKarigarName(e.target.value);
    }
    const handleCatChange=(e)=>{
        e.preventDefault();
        setCategoryName(e.target.value);
    }
    const handleQtyChange=(e)=>{
        e.preventDefault();
        setQty(e.target.value);
    }

    const handleWFromChange=(e)=>{
        e.preventDefault();
        setWeightFrom(e.target.value);
    }
    const handleWToChange=(e)=>{
        e.preventDefault();
        setWeightTo(e.target.value);
    }
    const handlePriorityChange=(e)=>{
        e.preventDefault();
        setPriority(e.target.value);
    }
    const handleOtypeChange=(e)=>{
        e.preventDefault();
        setOtype(e.target.value);
    }
    const handleMeltingChange=(e)=>{
        e.preventDefault();
        setMelting(e.target.value);
    }
    const handleHuidChange=(e)=>{
        e.preventDefault();
        setHuid(e.target.value);
    }
    const handleimgChange=(e)=>{
        e.preventDefault();
        setImg(e.target.value);
    }
    const handleDdateChange=(e)=>{
        e.preventDefault();
        setDdate(e.target.value);
    }
    const handleRefChange=(e)=>{
        e.preventDefault();
        setRefNo(e.target.value);
    }

    // const handleimgchange=(e)=>{
    //     setImglen(e.target.files.length);
    //     props.handleimg(e);
    // }
    //userEffect call
    useEffect(()=>{
        setLoading(true);
        axiosinstance.get(`order/getOrder/${orderId}`).then(res=>{
            if(res.status==200){
                console.log(res.data);
                // console.log(res.data.order[0].clientId);
                setClientName(res.data.order[0].clientId);
                setKarigarName(res.data.order[0].karigarId);
                setCategoryName(res.data.order[0].orderCategory);
                setQty(res.data.order[0].quantity);
                setRefNo(res.data.order[0].referenceNo);
                setHuid(res.data.order[0].HUID);
                setOtype(res.data.order[0].orderType);
                setWeightFrom(res.data.order[0].weightFrom);
                setWeightTo(res.data.order[0].weightTo);
                setMelting(res.data.order[0].melting);
                setDdate(res.data.order[0].deliveryDate);
                res.data.order[0].orderImg.map(ele=>{
                    setImg(pstate=>[...pstate,ele.img]);
                })
            }else if(res.status==203){
                // dispatch(setToastMsg("Edit Order Can't Fetched Try Again!",true));
            }
            
        }).then(()=>{
            setLoading(false);
            // dispatch(setToastMsg("Edit Order Fetched",false));
        })
    },[orderId])
  return (
    <>
    <div className='row'>
        <div className={props.number==1?'col-md-12 mt-4 no-order-number':'col-md-12 mt-4 no-order-number mt-5'}>
        Order Id #{props.number}
        </div>
    </div>
    <div className="row">
        {loading?<Loader msg="Order Getting Ready.."/>:null}
        {props.number=="1"?<div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-client">Select Client*</label>
        <div className='d-flex justify-content-start'>
            <select className="form-select no-select-full-row" aria-label="Default select example" id='select-client' onChange={props.handleClient}>
            {
                client.data.client && client.data.client.map((c,index)=>{
                    return <option value={c._id} selected={c._id==clientName?true:false}>{c.client_name}</option>;
                })
            }
            </select>
            
            
        </div>
        </div>:null}
        
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-karigar">Select Karigar*</label>
        <div className='d-flex justify-content-start'>
            <select className="form-select no-select-full-row" aria-label="Default select example" id="select-karigar" data-number={props.number} onChange={props.handleKarigar}>
            {
                karigar.data.karigar && karigar.data.karigar.map((c,index)=>{
                    return <option value={c._id} selected={c._id==karigarName?true:false}>{c.karigar_name}</option>;
                })
            }
            </select>
            
        </div>
        </div>
    </div>


    <div className='row mt-4'>
        <label htmlFor="product-category">Product Category*</label>
        <div className='d-flex justify-content-start'>
            <select className="form-select no-select-full-row" aria-label="Default select example" id="product-category" data-number={props.number} onChange={props.handlePCategory}>
            {
                category.data.categories && category.data.categories.map((c,index)=>{
                    return <option value={c._id} selected={c._id==categoryName}>{c.name}</option>;
                })
            }
            </select>
        </div>
    </div>
    <div className='row'>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="ref-num">Reference Number</label>
        <div className='d-flex justify-content-start'>
        <input 
        type="text" 
        className="form-control no-input" 
        placeholder="Reference Number (Auto)"
        id="ref-num"
        value={refNo}
        onChange={handleRefChange}
        disabled
        />
        </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="qty">Quantity*</label>
        <div className='d-flex justify-content-start'>
        <input 
        type="number" 
        className="form-control no-input" 
        placeholder="Quantity"
        id="qty"
        min="1"
        value={qty}
        onChange={handleQtyChange}
        />
        </div>
        </div>
    </div>

    <div className='row'>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="from">Weight(in grams)*</label>
        <div className='d-flex justify-content-start'>
        <input 
        type="number" 
        className="form-control no-input" 
        placeholder="From"
        id="from"
        min="1"
        value={weightFrom}
        onChange={handleWFromChange}
        />
        </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="to"></label>
        <div className='d-flex justify-content-start'>
        <input 
        type="number" 
        className="form-control no-input" 
        placeholder="to"
        id="To"
        min="1"
        value={weightTo}
        onChange={handleWToChange}
        />
        </div>
        </div>
    </div>

    <div className='row'>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="d-date">Delivery Date*</label>
        <div className='d-flex justify-content-start'>
        <input 
        type="date" 
        className="form-control no-select" 
        placeholder="Pick a Date"
        id="d-date"
        value={dDate}
        onChange={handleDdateChange}
        />
        <span className='no-validity'></span>
        </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="melting">Melting</label>
        <div className='d-flex justify-content-around'>
        
        <div className="form-check">
            <input className="form-check-input no-radio" type="radio" name={"melting"+props.number} id={"op1"+props.number} value="18" onChange={props.handleMelting}/>
            <label className="form-check-label" htmlFor={"op1"+props.number}>
            18
            </label>
        </div>
        
        <div className="form-check">
            <input className="form-check-input no-radio" type="radio" name={"melting"+props.number} id={"op2"+props.number} value="22" onChange={props.handleMelting}/>
            <label className="form-check-label" htmlFor={"op2"+props.number}>
            22
            </label>
        </div>

        <input 
        type="number" 
        className="form-control no-checkbtn-text" 
        name={"melting"+props.number}
        placeholder='Custom'
        min="1"
        onChange={props.handleMelting}
        />
        </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-priority">Select Priority*</label>
        <div className='d-flex justify-content-start'>
            <select onChange={handlePriorityChange} className="form-select no-select-full-row" aria-label="Default select example" id="select-priority" >
            <option value="Normal" selected={priority=="Normal"?true:false}>Normal</option>
            <option value="Fast" selected={priority=="Fast"?true:false}>Fast</option>
            <option value="Urgent" selected={priority=="Urgent"?true:false}>Urgent</option>
            </select>
            
        </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-img">Attach upto 5 images</label>
        <div className='d-flex justify-content-start'>
            {imglen>0?<span className='no-browse-text'>{imglen} Files Uploaded <ImAttachment className='no-browse-icon'/></span>
            :<span className='no-browse-text'>Browse Now <AiOutlineUpload className='no-browse-icon'/></span>}
            
            <input onChange={handleimgChange} className='no-browse' id='select-img' type='file' multiple accept="image/png, image/gif, image/jpeg"/>
        </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12 col-sm-12 mt-4">
                <img
                src="http://localhost:8080/uploads/orderImage/Z9e6qwLw4-1655810002501.jpg"
                alt="Order Image"
                width="150px" height="150px"
                />
        </div>
    </div>

    <div className='row eof-mob'>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="huid">HUID</label>
        <div className='d-flex justify-content-start'>
            <div className="form-check">
            <input className="form-check-input no-radio" type="radio" name={"huid"+props.number} id={"ophuid1"+props.number} value="Yes" checked={huid=="Yes"?true:false} onChange={handleHuidChange}/>
            <label className="form-check-label" htmlFor={"ophuid1"+props.number}>
                YES
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input no-radio" type="radio" name={"huid"+props.number} id={"ophuid2"+props.number} value="No" checked={huid=="No"?true:false} onChange={handleHuidChange}/>
            <label className="form-check-label" htmlFor={"ophuid2"+props.number}>
            NO
            </label>
        </div>
        </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="order-type">Order Type*</label>
        <div className='d-flex justify-content-start'>
        
            <div className="form-check">
            <input className="form-check-input no-radio no-order-type" type="radio" name={"order-type"+props.number} id={"order-type1"+props.number} value="Custom" checked={oType=="Custom"?true:false} onChange={handleOtypeChange}/>
            <label className="form-check-label" htmlFor={"order-type1"+props.number}>
                Custom Order
            </label>
            </div>
            
            <div className="form-check">
            <input className="form-check-input no-radio no-order-type" type="radio" name={"order-type"+props.number} id={"order-type2"+props.number} value="Stock" checked={oType=="Stock"?true:false} onChange={handleOtypeChange}/>
            <label className="form-check-label" htmlFor={"order-type2"+props.number}>
                Stock Order
            </label>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default EditOrderFormHelper