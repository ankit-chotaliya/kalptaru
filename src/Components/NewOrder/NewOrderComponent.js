import React, { useState } from 'react'
import {AiOutlineUpload} from 'react-icons/ai'
import {ImAttachment} from 'react-icons/im'
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
const NewOrderComponent = (props) => {
    const [imglen,setImglen]=useState(0);
    const [addClientModal,setAddClientModal]=useState(false);
    const [addKarigarModal,setAddKarigarModal]=useState(false);
    const handleimgchange=(e)=>{
        setImglen(e.target.files.length);
        props.handleimg(e);
    }

    const handleClient=(e)=>{
        e.preventDefault();
        setAddClientModal(true);
    }

    const handleAddKarigar=(e)=>{
        e.preventDefault();
        setAddKarigarModal(true);
    }
    return (

    <>

    <div className='row'>
        <div className={props.number==1?'col-md-12 mt-4 no-order-number':'col-md-12 mt-4 no-order-number mt-5'}>
        Order #{props.number}
        </div>
    </div>
    <div className="row">
        {props.number=="1"?<div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-client">Select Client*</label>
        <div className='d-flex justify-content-start'>
            <select className="form-select no-select" aria-label="Default select example" id='select-client' onChange={props.handleClient}>
            <option selected disabled>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            <button className='no-add-btn' onClick={handleClient}> Add </button>
            <AddClient
            show={addClientModal}
            onHide={() => setAddClientModal(false)}
            />
        </div>
        </div>:null}
        
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-karigar">Select Karigar*</label>
        <div className='d-flex justify-content-start'>
            <select className="form-select no-select" aria-label="Default select example" id="select-karigar" data-number={props.number} onChange={props.handleKarigar}>
            <option selected disabled>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            <button className='no-add-btn' onClick={handleAddKarigar}> Add </button>
            <AddKarigar
            show={addKarigarModal}
            onHide={() => setAddKarigarModal(false)}
            />
        </div>
        </div>
    </div>


    <div className='row mt-4'>
        <label htmlFor="product-category">Product Category*</label>
        <div className='d-flex justify-content-start'>
            <select className="form-select no-select-full-row" aria-label="Default select example" id="product-category" data-number={props.number} onChange={props.handlePCategory}>
                <option selected disabled>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
        placeholder="Reference Number"
        id="ref-num"
        onChange={props.handleRefNum}
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
        onChange={props.handleQty}
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
        onChange={props.handleWFrom}
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
        onChange={props.handleWTo}
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
        onChange={props.handledDate}
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
            <select onChange={props.handlePriority} className="form-select no-select-full-row" aria-label="Default select example" id="select-priority" >
            <option selected>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            
        </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="select-img">Attach upto 5 images</label>
        <div className='d-flex justify-content-start'>
            {imglen>0?<span className='no-browse-text'>{imglen} Files Uploaded <ImAttachment className='no-browse-icon'/></span>
            :<span className='no-browse-text'>Browse Now <AiOutlineUpload className='no-browse-icon'/></span>}
            
            <input onChange={handleimgchange} className='no-browse' id='select-img' type='file' multiple accept="image/png, image/gif, image/jpeg"/>
        </div>
        </div>
    </div>

    <div className='row'>
        <div className="col-md-6 col-sm-12 mt-4">
        <label htmlFor="huid">HUID</label>
        <div className='d-flex justify-content-start'>
            <div className="form-check">
            <input className="form-check-input no-radio" type="radio" name={"huid"+props.number} id={"ophuid1"+props.number} value="1" onChange={props.handleHUID}/>
            <label className="form-check-label" htmlFor={"ophuid1"+props.number}>
                YES
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input no-radio" type="radio" name={"huid"+props.number} id={"ophuid2"+props.number} value="0" onChange={props.handleHUID}/>
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
            <input className="form-check-input no-radio no-order-type" type="radio" name={"order-type"+props.number} id={"order-type1"+props.number} value="Custom Order" onChange={props.handleOType}/>
            <label className="form-check-label" htmlFor={"order-type1"+props.number}>
                Custom Order
            </label>
            </div>
            
            <div className="form-check">
            <input className="form-check-input no-radio no-order-type" type="radio" name={"order-type"+props.number} id={"order-type2"+props.number} value="Stock Order" onChange={props.handleOType}/>
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

export default NewOrderComponent