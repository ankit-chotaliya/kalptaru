import React, { useEffect, useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineTrash } from "react-icons/hi";
import AddClient from '../AddClient/AddClient';
import AddKarigar from '../AddKarigar/AddKarigar';
import AddCategory from '../AddCategory/AddCategory';
import imgtest from '../EditOrder/ring.jpg';
import { getAllCategory, getAllClient, getAllKarigar } from '../../actions';
import { setToastMsg } from '../../actions/toast.action';
const NewOrderComponent = (props) => {
    const [imglen, setImglen] = useState(0);
    const [addClientModal, setAddClientModal] = useState(false);
    const [addKarigarModal, setAddKarigarModal] = useState(false);
    const [addCategoryModal, setAddCategoryModal] = useState(false);
    const clients = useSelector(state => state.client);
    const karigars = useSelector(state => state.karigar);
    const category = useSelector(state => state.category);
    const date = new Date();
    var day = date.getDate() + 1;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    const today = year + "-" + month + "-" + day;
    const dispatch = useDispatch();
    const handleimgchange = (e) => {
        setImglen(e.target.files.length);
        props.handleimg(e);
    }

    const handleClient = (e) => {
        e.preventDefault();
        setAddClientModal(true);
    }

    const handleAddKarigar = (e) => {
        e.preventDefault();
        setAddKarigarModal(true);
    }

    const handleAddCategory = (e) => {
        e.preventDefault();
        setAddCategoryModal(true);
    }
    const handleCustomMelting = (i, e) => {
        e.preventDefault();
        const targetName = e.target.name;
        const elements = document.getElementsByName(targetName);
        elements.forEach(e => {
            if (e.type == "radio") {
                e.checked = false;
            }

        });
        props.handleChange(i, e)
    }
    const handleNoCustomMelting = (i, e) => {
        const targetName = e.target.name;
        const elements = document.getElementsByName(targetName);
        elements.forEach(e => {
            if (e.type == "number") {
                e.value = "";
            }

        });
        props.handleChange(i, e)
    }
    const handlePCategory = (i, e) => {
        var target = e.target.value;
        const ele = document.getElementById("ref " + i);
        category.data.categories.forEach(element => {
            if (element._id == target) {
                ele.value = element.ref;
            }
        });
        props.handleChange(i, e);
    }

    const handleImgShow = (i, e) => {
        const files = e.target.files;
        // console.log(files);
        var htmlData = "";
        Array.from(files).forEach(f => {
            var imgsrc = URL.createObjectURL(f);
            htmlData += `<img className="no-img" src=${imgsrc} width="150px" height="150px" style="margin:10px" alt="img"/>`
        })
        const MAX_LENGTH = 5;
        if (Array.from(e.target.files).length > MAX_LENGTH) {
            e.preventDefault();
            // alert(`Cannot upload files more than ${MAX_LENGTH}`);
            dispatch(setToastMsg(`Cannot upload files more than ${MAX_LENGTH}`, true))
            return;
        }

        const ele = document.getElementById("img " + i);
        ele.innerHTML = htmlData;
        props.handleChange(props.index, e)
    }

    return (

        <>

            <div className='row no-order-number'>
                <div className={props.orderNumber == 1 ? 'mt-4 mb-2' : 'no-ordernum mt-5 mb-2'}>
                    Order #{props.orderNumber}
                </div>
                {props.index ? <div className='no-ordernum-1 mt-5 mb-2'>
                    <button className="btn btn-outline-danger no-cancel-btn" onClick={(e) => props.removeFormFields(props.index, e)}><HiOutlineTrash /></button>
                </div> : null}

            </div>
            <div className="row">
                {!props.index ? <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="select-client">Select Client*:</label>
                    <div className='d-flex justify-content-start'>
                        <select className="form-select no-select" aria-label="Default select example" id='select-client' name="clientName" onChange={e => props.handleChange(props.index, e)} >
                            <option selected disabled>Select</option>
                            {
                                clients.data.client && clients.data.client.map((c, index) => {
                                    return <option value={c._id} >{c.client_name}</option>;
                                })
                            }
                        </select>
                        <button className='no-add-btn' onClick={handleClient}> Add </button>
                        <AddClient
                            show={addClientModal}
                            onHide={() => setAddClientModal(false)}
                        />
                    </div>
                </div> : null}

                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="select-karigar">Select Karigar*:</label>
                    <div className='d-flex justify-content-start'>
                        <select className="form-select no-select" aria-label="Default select example" id="select-karigar" name="karigarName" onChange={e => props.handleChange(props.index, e)}>
                            <option selected disabled>Select</option>
                            {
                                karigars.data.karigar && karigars.data.karigar.map((k, index) => {
                                    return <option value={k._id}>{k.karigar_name}</option>;
                                })
                            }
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
                <label htmlFor="product-category">Product Category*:</label>
                <div className='d-flex justify-content-start'>
                    <select className="form-select no-select-full-row" aria-label="Default select example" id="product-category" name="category" onChange={e => handlePCategory(props.index, e)}>
                        <option selected disabled>Select</option>
                        {
                            category.data.categories && category.data.categories.map((c, index) => {
                                return <option value={c._id}>{c.name}</option>;
                            })
                        }
                    </select>
                    <button className='no-add-btn' onClick={handleAddCategory}> Add </button>
                    <AddCategory
                        show={addCategoryModal}
                        onHide={() => setAddCategoryModal(false)}
                    />
                </div>
            </div>
            <div className='row'>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="ref-num">Reference Number*:</label>
                    <div className='d-flex justify-content-start'>
                        <input
                            type="text"
                            className="form-control no-input"
                            placeholder="Reference Number (Auto)"
                            id={"ref" + " " + props.index}
                            name="ref"
                            onChange={e => props.handleChange(props.index, e)}
                            disabled
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="qty">Quantity*:</label>
                    <div className='d-flex justify-content-start'>
                        <input
                            type="number"
                            className="form-control no-input"
                            placeholder="Quantity"
                            id="qty"
                            min="1"
                            name="qty"
                            onChange={e => props.handleChange(props.index, e)}
                        />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="from">Weight(in grams)*:</label>
                    <div className='d-flex justify-content-start'>
                        <input
                            type="number"
                            className="form-control no-input"
                            placeholder="From"
                            id="from"
                            min="1"
                            name="weightFrom"
                            onChange={e => props.handleChange(props.index, e)}
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
                            name="weightTo"
                            onChange={e => props.handleChange(props.index, e)}
                        />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="d-date">Delivery Date*:</label>
                    <div className='d-flex justify-content-start'>
                        <input
                            type="date"
                            className="form-control no-select"
                            placeholder="Pick a Date"
                            id="d-date"
                            name="dDate"
                            min={today}
                            onChange={e => props.handleChange(props.index, e)}
                        />
                        <span className='no-validity'></span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="melting">Melting*:</label>
                    <div className='d-flex justify-content-around'>

                        <div className="form-check">
                            <input className="form-check-input no-radio" type="radio" id={"op1" + props.orderNumber} value="18" name={"melting" + " " + props.index} onChange={e => handleNoCustomMelting(props.index, e)} />
                            <label className="form-check-label" htmlFor={"op1" + props.orderNumber}>
                                18
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input no-radio" type="radio" id={"op2" + props.orderNumber} value="22" name={"melting" + " " + props.index} onChange={e => handleNoCustomMelting(props.index, e)} />
                            <label className="form-check-label" htmlFor={"op2" + props.orderNumber}>
                                22
                            </label>
                        </div>

                        <input
                            type="number"
                            className="form-control no-checkbtn-text"
                            name={"melting" + " " + props.index}
                            placeholder='Custom'
                            min="1"
                            onChange={e => handleCustomMelting(props.index, e)}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="select-priority">Select Priority*:</label>
                    <div className='d-flex justify-content-start'>
                        <select name="priority" onChange={e => props.handleChange(props.index, e)} className="form-select no-select-full-row" aria-label="Default select example" id="select-priority" >
                            <option selected disabled>Select</option>
                            <option value="Normal">Normal</option>
                            <option value="Fast">Fast</option>
                            <option value="Urgent">Urgent</option>
                        </select>

                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="select-img">Attach upto 5 images*:</label>
                    <div className='d-flex justify-content-start'>
                        {imglen > 0 ? <span className='no-browse-text'>{imglen} Files Uploaded <ImAttachment className='no-browse-icon' /></span>
                            : <span className='no-browse-text'>Browse Now <AiOutlineUpload className='no-browse-icon' /></span>}

                        <input name="img" onChange={e => handleImgShow(props.index, e)} className='no-browse' id='select-img' type='file' multiple accept="image/png, image/gif, image/jpeg" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 mt-4" id={"img" + " " + props.index}>

                </div>
            </div>
            <div className='row'>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="huid">HUID*:</label>
                    <div className='d-flex justify-content-start'>
                        <div className="form-check">
                            <input className="form-check-input no-radio" type="radio" name={"huid" + " " + props.index} id={"ophuid1" + props.orderNumber} value="Yes" onChange={e => props.handleChange(props.index, e)} />
                            <label className="form-check-label" htmlFor={"ophuid1" + props.orderNumber}>
                                YES
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input no-radio" type="radio" name={"huid" + " " + props.index} id={"ophuid2" + props.orderNumber} value="No" onChange={e => props.handleChange(props.index, e)} />
                            <label className="form-check-label" htmlFor={"ophuid2" + props.orderNumber}>
                                NO
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                    <label htmlFor="order-type">Order Type*:</label>
                    <div className='d-flex justify-content-start'>

                        <div className="form-check">
                            <input className="form-check-input no-radio no-order-type" type="radio" id={"order-type1" + props.orderNumber} value="Custom" name={"oType" + " " + props.index} onChange={e => props.handleChange(props.index, e)} />
                            <label className="form-check-label" htmlFor={"order-type1" + props.orderNumber}>
                                Custom Order
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input no-radio no-order-type" type="radio" id={"order-type2" + props.orderNumber} value="Stock" name={"oType" + " " + props.index} onChange={e => props.handleChange(props.index, e)} />
                            <label className="form-check-label" htmlFor={"order-type2" + props.orderNumber}>
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