import React, { useEffect, useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setToastMsg } from '../../actions/toast.action';
import axiosinstance from '../../utils/axios';
import ModalHelper from '../Helper/Modal/ModalHelper';
import { GrDocumentUpdate } from 'react-icons/gr'
import Loader from '../Helper/Loader/Loader';
import './editOrder.css'
import { editOrder } from '../../actions/order.action';
const EditOrderFormHelper = (props) => {
    const [imglen, setImglen] = useState(0);
    const [loading, setLoading] = useState(false);
    //dispatch Variable
    const dispatch = useDispatch();

    //state variables
    const clients = useSelector(state => state.client);
    const karigars = useSelector(state => state.karigar);
    const category = useSelector(state => state.category);
    const order = useSelector(state => state.order);
    const navigate = useNavigate();
    //Form Variables
    const [clientName, setClientName] = useState("");
    const [addClient, setAddClient] = useState("");
    const [activeClient, setActiveClient] = useState(false);
    const [karigarName, setKarigarName] = useState("");
    const [addKarigar, setAddKarigar] = useState("");
    const [activeKarigar, setActiveKarigar] = useState(false);
    const [addCategory, setAddCategory] = useState("");
    const [activeCategory, setActiveCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [refNo, setRefNo] = useState("");
    const [zindex, setZindex] = useState(1); 
    const [qty, setQty] = useState(true);
    const [weightFrom, setWeightFrom] = useState(1);
    const [weightTo, setWeightTo] = useState(1);
    const [dDate, setDdate] = useState("");
    const [melting, setMelting] = useState("");
    const [priority, setPriority] = useState("");
    const [imgurls, setImg] = useState([]);
    const [imgobj, setImgObj] = useState([]);
    const [huid, setHuid] = useState("");
    const [oType, setOtype] = useState("");
    const { orderId } = useParams();
    const [viewModal, setViewModal] = useState(false);
    //Form Trackers
    const handleClientChange = (e) => {
        e.preventDefault();
        setClientName(e.target.value);
    }
    const handleKariarChange = (e) => {
        e.preventDefault();
        setKarigarName(e.target.value);
    }
    const handleCatChange = (e) => {
        e.preventDefault();       
        setCategoryName(e.target.value);
    }
    const handleQtyChange = (e) => {
        e.preventDefault();
        setQty(e.target.value);
    }

    const handleWFromChange = (e) => {
        e.preventDefault();
        setWeightFrom(e.target.value);
    }
    const handleWToChange = (e) => {
        e.preventDefault();
        setWeightTo(e.target.value);
    }
    const handlePriorityChange = (e) => {
        e.preventDefault();
        setPriority(e.target.value);
    }
    const handleOtypeChange = (e) => {
        // e.preventDefault();
        setOtype(e.target.value);
    }
    const handleMeltingChange = (e) => {
        // e.preventDefault();
        setMelting(e.target.value);
    }
    const handleHuidChange = (e) => {
        // e.preventDefault();
        setHuid(e.target.value);
    }
    const handleimgChange = (e) => {
        e.preventDefault();
        setImg("");
        setImgObj(e.target.files);
    }
    const handleDdateChange = (e) => {
        e.preventDefault();
        setDdate(e.target.value);
    }
    const handleRefChange = (e) => {
        e.preventDefault();
        setRefNo(e.target.value);
    }
    const handleorderStatusChange = (e) => {
        e.preventDefault();
        setOrderStatus(e.target.value);
    }
    const handleZIndex = (active) => {

        if(active == true)
        {
            setZindex(-1);
        }
        else
        {
            setZindex(1);
        }

    }
    const handleImgShow = (e) => {
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

        const ele = document.getElementById("img");
        ele.innerHTML = htmlData;
        handleimgChange(e);
    }


    //Major Action Calling...
    const handleModalReply = (e) => {

        const reply = e.target.value;
        // console.log(reply);
        if (reply == "true") {
            //dispatch success action
            const formData = new FormData();

            category.data.categories.forEach(element => {
                if (element._id == categoryName) {
                    setRefNo(element.ref);
                }
            });

            if (imgobj.length > 0) {
                Array.from(imgobj).forEach(ele => {
                    formData.append("orderImg", ele);
                })
            }

            //   console.log(ele.ref);
            formData.append("clientId", clientName);
            formData.append("karigarId", karigarName);
            formData.append("orderCategory", categoryName);
            formData.append("refNo", refNo);
            formData.append("quantity", qty);
            formData.append("weightFrom", weightFrom);
            formData.append("weightTo", weightTo);
            formData.append("deliveryDate", dDate);
            formData.append("melting", melting);
            formData.append("priority", priority);
            formData.append("HUID", huid);
            formData.append("orderType", oType);
            formData.append("orderStatus", orderStatus);
            // console.log(clientName);
            window.scrollTo(0, 0);
            dispatch(editOrder(formData, orderId));
        } else {
            //Simple pass the toast
            dispatch(setToastMsg("Remain As it is", false));
        }
        setViewModal(false);
    }
    const hadnleUpdateOrder = (e) => {
        e.preventDefault();
        setViewModal(true);
    }
    //userEffect call

    useEffect(() => {
        setLoading(true);
        axiosinstance.get(`order/getOrder/${orderId}`).then(res => {
            if (res.status == 200) {
                // console.log(res.data);
                // console.log(res.data.order[0].clientId);
                clients.data.client && clients.data.client.map((c)=>{
                    if(c._id == res.data.order[0].clientId){
                        setAddClient(c.client_name);
                    }

                })
                karigars.data.karigar && karigars.data.karigar.map((k)=>{
                    if(k._id == res.data.order[0].karigarId){
                        setAddKarigar(k.karigar_name);
                    }
                })

                category.data.categories && category.data.categories.map((c)=>{
                    if(c._id == res.data.order[0].orderCategory){
                        setAddCategory(c.name);
                        setRefNo(c.ref);

                    }
                })

                setClientName(res.data.order[0].clientId);
                setKarigarName(res.data.order[0].karigarId);
                setCategoryName(res.data.order[0].orderCategory);
                setQty(res.data.order[0].quantity);
                //setRefNo(res.data.order[0].referenceNo);
                setHuid(res.data.order[0].HUID);
                setOtype(res.data.order[0].orderType);
                setWeightFrom(res.data.order[0].weightFrom);
                setWeightTo(res.data.order[0].weightTo);
                setMelting(res.data.order[0].melting);
                setDdate(res.data.order[0].deliveryDate);
                setOrderStatus(res.data.order[0].orderStatus);
                setPriority(res.data.order[0].priority);
                const url = "https://shreekalptaru-backend.herokuapp.com/uploads/orderImage/"

                if(imgurls.length > 0){
                    setImg([]);
                }
                res.data.order[0].orderImg.map(ele => {
                    setImg(pstate => [...pstate, url + ele.img]);
                })
            } else if (res.status == 203) {
                navigate('/');
                dispatch(setToastMsg("Order Can't Find! Try Again!", true));
            }

        }).then(() => {
            setLoading(false);
            // dispatch(setToastMsg("Edit Order Fetched",false));
        }).catch((err) => {

        })

        return()=>{
            setImg([]);
        }
    }, [orderId])
    useEffect(() => {
        if (order.editsuccess) {
            navigate('/editorder');
        }
    }, [order.editsuccess]);

    return (
        <>

            <div className='row'>
                <div className={props.number == 1 ? 'col-md-12 mt-4 no-order-number' : 'col-md-12 mt-4 no-order-number mt-5'}>
                    Order Id #{props.number}
                </div>
            </div>
            {

            }
            <form onSubmit={hadnleUpdateOrder}>
                <div className="row">


                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: 1 }}>
                        <label htmlFor="select-client">Select Client*</label>
                        <div className='d-flex' onClick={(e) => { setActiveClient(!activeClient); handleZIndex(!activeClient); setActiveKarigar(false); setActiveCategory(false) }}>
                            <input type="text"
                                className="form-select no-select-full-row"
                                placeholder='Select Client'
                                value={addClient}
                                onChange={(e) => { setAddClient(e.target.value); setActiveClient(true); handleZIndex(true); }}
                            />
                        </div>
                        <div className="dropdown1 no-select-full-row">
                            {
                                activeClient && (
                                    <div className='dropdown-content '>
                                        {

                                            clients.data.client.length > 0 ? clients.data.client && clients.data.client.filter((val) => {

                                                if (addClient == "") {

                                                    return val;
                                                }
                                                else if (val.client_name.toLowerCase().includes(addClient.toLowerCase())) {
                                                    return val;
                                                }
                                            }).map((c, index) => {
                                                return <button value={c._id}  className='options1' onClick={(e) => {

                                                    setAddClient(c.client_name);
                                                    setActiveClient(false);
                                                    handleZIndex(false);
                                                    handleClientChange(e);
                                                }} >{c.client_name}</button>;
                                            }) : <button className='options1'> No Clients</button>
                                        }

                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: 0 }}>
                        <label htmlFor="select-karigar">Select Karigar*</label>
                        <div className='d-flex' onClick={(e) => { setActiveClient(false); setActiveKarigar(!activeKarigar); handleZIndex(!activeKarigar); setActiveCategory(false) }}>
                            <input type="text"
                                className="form-select no-select-full-row"
                                placeholder='Select Karigar'
                                value={addKarigar}
                                onChange={(e) => { setAddKarigar(e.target.value); setActiveKarigar(true); handleZIndex(true); }} />
                        </div>
                        <div className="dropdown1 no-select-full-row">

                            {
                                activeKarigar && (
                                    <div className='dropdown-content '>
                                        {

                                            karigars.data.karigar.length > 0 ? karigars.data.karigar && karigars.data.karigar.filter((val) => {

                                                if (addKarigar == "") {

                                                    return val;
                                                }
                                                else if (val.karigar_name.toLowerCase().includes(addKarigar.toLowerCase())) {
                                                    return val;
                                                }
                                            }).map((k, index) => {
                                                return <button value={k._id} className='options1' onClick={(e) => {

                                                    setAddKarigar(k.karigar_name);
                                                    setActiveKarigar(false);
                                                    handleZIndex(false);
                                                    handleKariarChange(e);

                                                }}>{k.karigar_name}</button>

                                            }) : <button className='options1'> No Karigars</button>
                                        }
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>


                <div className='row'>
                    <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="product-category">Order Status*</label>
                        <div className='d-flex justify-content-start'>
                            <select className="form-select no-select-full-row" aria-label="Default select example" id="product-category" data-number={props.number} onChange={handleorderStatusChange}>
                                <option value="1" selected={orderStatus == 1 ? true : false}>New Order</option>
                                <option value="2" selected={orderStatus == 2 ? true : false}>Order in process</option>
                                <option value="3" selected={orderStatus == 3 ? true : false}>Karigar Completed</option>
                                <option value="4" selected={orderStatus == 4 ? true : false}>Order Ready</option>
                                <option value="5" selected={orderStatus == 5 ? true : false}>Delivery Pending</option>
                                <option value="6" selected={orderStatus == 6 ? true : false}>Order Delivered/Order Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="product-category">Product Category*</label>
                        <div className='d-flex' onClick={(e) => { setActiveClient(false); setActiveKarigar(false); setActiveCategory(!activeCategory); handleZIndex(!activeCategory)}}>
                            <input type="text"
                                className="form-select no-select-full-row"
                                placeholder='Select Category'
                                value={addCategory}
                                onChange={(e) => { setAddCategory(e.target.value); setActiveCategory(true); handleZIndex(true);}} />
                        </div>
                        <div className="dropdown1 no-select-full-row">

                            {
                                activeCategory && (
                                    <div className='dropdown-content '>
                                        {

                                            category.data.categories.length > 0 ? category.data.categories && category.data.categories.filter((val) => {

                                                if (addCategory == "") {

                                                    return val;
                                                }
                                                else if (val.name.toLowerCase().includes(addCategory.toLowerCase())) {
                                                    return val;
                                                }
                                            }).map((c, index) => {
                                                return <button value={c._id} data-number={props.number}  className='options1' onClick={(e) => {

                                                    setAddCategory(c.name);
                                                    setRefNo(c.ref);
                                                    setActiveCategory(false);
                                                    handleZIndex(false);
                                                    handleCatChange(e);

                                                }} >{c.name}</button>;
                                            }) : <button className='options1'> No Categories</button>

                                        }

                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: -1 }}>
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
                    <div className="col-md-6 col-sm-12 mt-4"  style={{ zIndex: `${zindex}` }} >
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
                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: `${zindex}` }} >
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
                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: `${zindex}` }} >
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
                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: `${zindex}` }}>
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
                    <div className="col-md-6 col-sm-12 mt-4" style={{ zIndex: `${zindex}` }}>
                        <label htmlFor="melting">Melting</label>
                        <div className='d-flex justify-content-around'>

                            <div className="form-check">
                                <input className="form-check-input no-radio" type="radio" name="melting" id="op1" value="18" checked={melting == "18" ? true : false} onChange={handleMeltingChange} />
                                <label className="form-check-label" htmlFor="op1">
                                    18
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input no-radio" type="radio" name="melting" id="op2" value="22" checked={melting == "22" ? true : false} onChange={handleMeltingChange} />
                                <label className="form-check-label" htmlFor="op2">
                                    22
                                </label>
                            </div>

                            <input
                                type="number"
                                className="form-control no-checkbtn-text"
                                name={"melting" + props.number}
                                placeholder='Custom'
                                min="1"
                                value={(melting != "18") && (melting != "22") ? melting : ""}
                                onChange={handleMeltingChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="select-priority">Select Priority*</label>
                        <div className='d-flex justify-content-start'>
                            <select onChange={handlePriorityChange} className="form-select no-select-full-row" aria-label="Default select example" id="select-priority" >
                                <option value="Normal" selected={priority == "Normal" ? true : false}>Normal</option>
                                <option value="Fast" selected={priority == "Fast" ? true : false}>Fast</option>
                                <option value="Urgent" selected={priority == "Urgent" ? true : false}>Urgent</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="select-img">Attach upto 5 images</label>
                        <div className='d-flex justify-content-start'>
                            {imglen > 0 ? <span className='no-browse-text'>{imglen} Files Uploaded <ImAttachment className='no-browse-icon' /></span>
                                : <span className='no-browse-text'>Browse Now <AiOutlineUpload className='no-browse-icon' /></span>}

                            <input onChange={handleImgShow} className='no-browse' id='select-img' type='file' multiple accept="image/png, image/gif, image/jpeg" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 mt-4" id="img">

                    </div>
                    {
                        imgobj ? <div className="col-md-12 col-sm-12 mt-4">
                            {
                                imgurls && imgurls.map(ele => {
                                    {/* console.log(imgurls); */}
                                    return <img src={ele} width="150px" height="150px" alt="Order Image" />
                                })
                            }
                            {
                                imgurls && imgurls.length == 0 ? <p>*No Images for this order</p> : null
                            }
                        </div> : null
                    }

                </div>

                <div className='row'>
                    <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="huid">HUID</label>
                        <div className='d-flex justify-content-start'>
                            <div className="form-check">
                                <input className="form-check-input no-radio" type="radio" name={"huid" + props.number} id={"ophuid1" + props.number} value="Yes" checked={huid == "Yes" ? true : false} onChange={handleHuidChange} />
                                <label className="form-check-label" htmlFor={"ophuid1" + props.number}>
                                    YES
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input no-radio" type="radio" name={"huid" + props.number} id={"ophuid2" + props.number} value="No" checked={huid == "No" ? true : false} onChange={handleHuidChange} />
                                <label className="form-check-label" htmlFor={"ophuid2" + props.number}>
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-4">
                        <label htmlFor="order-type">Order Type*</label>
                        <div className='d-flex justify-content-start'>

                            <div className="form-check">
                                <input className="form-check-input no-radio no-order-type" type="radio" name={"order-type" + props.number} id={"order-type1" + props.number} value="Custom" checked={oType == "Custom" ? true : false} onChange={handleOtypeChange} />
                                <label className="form-check-label" htmlFor={"order-type1" + props.number}>
                                    Custom Order
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input no-radio no-order-type" type="radio" name={"order-type" + props.number} id={"order-type2" + props.number} value="Stock" checked={oType == "Stock" ? true : false} onChange={handleOtypeChange} />
                                <label className="form-check-label" htmlFor={"order-type2" + props.number}>
                                    Stock Order
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row eof-mob'>
                    <div className='col-md-12 col-sm-12 mt-4'>
                        <button type="submit" className='no-sub-btn' onClick={(e)=>hadnleUpdateOrder(e)}>Update Order</button>
                        <ModalHelper
                            show={viewModal}
                            onHide={() => setViewModal(false)}
                            icon={<GrDocumentUpdate />}
                            text="Are you sure do you want to edit this order?"
                            onReply={(e)=>handleModalReply(e)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditOrderFormHelper