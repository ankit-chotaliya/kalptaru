import React, { useEffect, useState } from 'react'
import './editOrder2.css'
import Navbar from '../NavBar/Navbar';
import ModalHelper from '../Helper/Modal/ModalHelper';
import { useNavigate, useParams } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import ring from "./ring.jpg";
import Slider from "react-slick";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../PDF/Template";
import { useDispatch, useSelector } from 'react-redux';
import PDF from '../PDF/PDF';


function EditOrder2() {
    const navigate=useNavigate();
    const serverURL="http://localhost:8080/uploads/orderImage/"
    const [viewModal, setViewModal] = useState(false);
    const [orderData,setOrderData]=useState([]);
    const [orderDataSpecific,setOrderDataSpecific]=useState([]);
    const [movieDetails, setDetails] = useState([]);
    const [show, setHide] = useState(true);
    const [showKarigar, setHideKarigar] = useState(true);
    const {orderId}=useParams()
    const handleModalReply = (e) => {
        const reply = e.target.value;
        console.log(reply);
        if (reply == "true") {
            alert("deleted successfully!");
        } else {
            alert("Not Updated!");
        }
        setViewModal(false);
    }
    const order=useSelector(state=>state.order);
    const client=useSelector(state=>state.client);
    const category=useSelector(state=>state.category);
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // width to change options
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    // console.log(config);
    if (window.innerWidth < 600) {
        const config = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        // console.log("hello");
    }
    else {
        const config = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
    }
    const products = [
        {
            img: ring,
            title: 'Ring1',
        },
        {
            img: ring,
            title: 'Ring2',
        },
        {
            img: ring,
            title: 'Ring3',
        },
        {
            img: ring,
            title: 'Ring4',
        },
        {
            img: ring,
            title: 'Ring5',
        }
    ]

    const hadnleUpdateOrder = (e) => {
        // console.log(" hii ")
        // e.preventDefault();
        setViewModal(true);
    }
    const duein=(d)=>{
        const date1=new Date(d);
        const date2=new Date();
        const diff=date1-date2;
        const inDays=Math.ceil(diff/(1000*60*60*24));
        return inDays;
    }
    const dateFormat=(d)=>{
        var date = new Date(d);
        const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
        return day;
      } 
    const orderDatacreate=()=>{
        if(order.data.orders && order.data.orders.length>0){
          order.data.orders.map((ele,index)=>{
            if(ele._id==orderId){
              let data={
                orderId:"",
                orderClient:"",
                orderClientEmail:"",
                orderClientContact:"",
                orderRefNo:"",
                orderCategory:"",
                orderPriority:"",
                orderCreateDate:"",
                orderDeliveryDate:"",
                orderPlacedBy:"",
                orderQty:"",
                orderWeight:"",
                orderDueIn:"",
                orderMelting:"",
                orderType:"",
                orderImg:"",
                orderhuid:"",
                orderPlacedBy:"",
                orderDueIn:"",
              }
              data.orderId=ele._id;
              var clientName,clientContact,clientEmail;
              client.data.client.map((c)=>{
                if(c._id==ele.clientId){
                  clientName=c.client_name;
                  clientContact=c.client_contact;
                  clientEmail=c.client_email;
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
              data.orderClientContact=clientContact;
              data.orderClientEmail=clientEmail;
              data.orderRefNo=ele.referenceNo;
              data.orderCategory=categoryName;
              data.orderPriority=ele.priority;
              data.orderQty=ele.quantity+" pcs";
              data.orderWeight=ele.weightFrom+"-"+ele.weightTo+" gm";
              data.orderMelting=ele.melting;
              data.orderImg=ele.orderImg;
              data.orderhuid=ele.HUID;
              data.orderType=ele.orderType+" Order";
              data.orderPlacedBy=user.data.user.name || user.data.user.fullname;
              data.orderCreateDate=dateFormat(ele.createdAt);
              data.orderDeliveryDate=dateFormat(ele.deliveryDate);
              let dueindate=duein(ele.deliveryDate);
              if(dueindate<=0){
                dueindate="Delivered";
              }else{
                dueindate+=" Days";
              }
              data.orderDueIn=dueindate;
              setOrderData(pstate=>[...pstate,data]);
            }
          })
        }
      }

      useEffect(()=>{
        // dispatch(getAllOrders());
        // console.log("hiii");
        if(order.data.orders && client.data.client && category.data.categories && orderData.length==0 && orderId!=""){
          orderDatacreate();
        }
        // console.log("hiii 2");
      },[order.data.orders,client.data.client,category.data.categories])
    
      useEffect(()=>{
        console.log("hii");
        setOrderDataSpecific(orderData);
      },[orderData])

      useEffect(()=>{
        if(orderId==""){
            navigate(-1);
        }
      },[])
    return (
        <>
            <Navbar />

            <div className="container no-main no-border pageview">

                    <div className='eo2-heading no-heading'>
                    <div className='eo2-editorder'>
                    <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Order View
                    </div>
                    {
                        orderDataSpecific.length>0?<div className='eo2-btns'>
                        <button className='eo2-btn app-icon' onClick={()=>hadnleUpdateOrder(orderDataSpecific[0].orderId)} ><HiOutlineTrash  id='deleteicon' /></button>
                        <button className='eo2-btn app-icon' onClick={()=>{navigate("/EditOrderForm/"+orderDataSpecific[0].orderId)}}><VscEdit  id='deleteicon' /></button>
                        </div>:null
                    }
                    
                    </div>
{
    console.log(orderDataSpecific)
}
                    
        	        {
                        orderDataSpecific.length>0?<div className='eo2-container mt-4'>
                        <p className='clienttitle'>Client Details</p>
                        <div className='table-responsive-md clientdata'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='twidth'>Name:</td>
                                        <td className='twidth'>{orderDataSpecific[0].orderClient?orderDataSpecific[0].orderClient:"Not Exist"}</td>
                                    </tr>
                                    <tr>
                                        <td className='twidth'>Phone no:</td>
                                        <td className='twidth'>{orderDataSpecific[0].orderClientContact?orderDataSpecific[0].orderClientContact:"Not Exist"}</td>
                                    </tr>
                                    <tr>
                                        <td className='twidth'>Email Id:</td>
                                        <td className='twidth'>{orderDataSpecific[0].orderClientEmail?orderDataSpecific[0].orderClientEmail:"Not Exist"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />

                        <p className='clienttitle'>Order Details</p>

                        <div className='slider'>
                            <Slider {...config}>
                                {
                                    orderDataSpecific[0].orderImg.map((x, i) => {
                                    return <div key={i} className="img-card">
                                        <img className="img" src={serverURL+x.img}  alt="Order Image"/>
                                    </div>
                                })
                                }
                                {
                                    orderDataSpecific[0].orderImg.length==1?<><div className="img-card">
                                    <img className="img" src={serverURL+orderDataSpecific[0].orderImg[0].img}   alt="Order Image"/>
                                </div>   
                                    <div className="img-card">
                                        <img className="img" src={serverURL+orderDataSpecific[0].orderImg[0].img}   alt="Order Image"/>
                                    </div></>:null
                                
                                }
                                {
                                        orderDataSpecific[0].orderImg.length==2?   
                                        <div className="img-card">
                                            <img className="img" src={serverURL+orderDataSpecific[0].orderImg[0].img}   alt="Order Image"/>
                                        </div>:null
                                    
                                }
                            </Slider>
                        </div>

                        <div className='table-responsive-md mt-5 clientdata'>
                            <table>
                                <tr>
                                    <td className='bwidth'>Order Reference no:</td>
                                    <td className='bwidth'>{orderDataSpecific[0].orderRefNo?orderDataSpecific[0].orderRefNo:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Order Date:</td>
                                    <td>{orderDataSpecific[0].orderCreateDate?orderDataSpecific[0].orderCreateDate:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Placed By:</td>
                                    <td>{orderDataSpecific[0].orderPlacedBy?orderDataSpecific[0].orderPlacedBy:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Category:</td>
                                    <td>{orderDataSpecific[0].orderCategory?orderDataSpecific[0].orderCategory:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Quantity:</td>
                                    <td>{orderDataSpecific[0].orderQty?orderDataSpecific[0].orderQty:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>{orderDataSpecific[0].orderWeight?orderDataSpecific[0].orderWeight:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Due Date:</td>
                                    <td>{orderDataSpecific[0].orderDeliveryDate?orderDataSpecific[0].orderDeliveryDate:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Due In:</td>
                                    <td>{orderDataSpecific[0].orderDueIn?orderDataSpecific[0].orderDueIn:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Melting:</td>
                                    <td>{orderDataSpecific[0].orderMelting?<>{orderDataSpecific[0].orderMelting} &#8451;</>:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Priority:</td>
                                    <td>{orderDataSpecific[0].orderPriority?orderDataSpecific[0].orderPriority:"Not Exist"}</td>
                                </tr>
                                <tr>
                                    <td>Order Type:</td>
                                    <td>{orderDataSpecific[0].orderType?orderDataSpecific[0].orderType:"Not Exist"}</td>
                                </tr>
                            </table>
                        </div>
                        <PDF orderId={orderId} isRow={true}/>
                    </div>:<div className='mt-5 text-center'><h2>Order Details were not found!</h2></div>
                    }
                    <ModalHelper
                    show={viewModal}
                    onHide={() => setViewModal(false)}
                    icon={<HiOutlineTrash onClick={hadnleUpdateOrder} />}
                    text="Are you sure you want to delete this Order?"
                    onReply={handleModalReply}
                     />
                    
                    
            </div>

          
        </>
    )
}

export default EditOrder2;