import axios from 'axios'
import { saveAs } from 'file-saver'
import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineCloudDownload} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { emptyOrderConfirm, getAllOrders } from '../../actions'
import Navbar from '../NavBar/Navbar'
import './ConfirmOrder.css'
import coImg from './orderConfirmFinal.png'
import noCoImg from './noCoImg.jpg'
const ConfirmOrder = () => {
    const navigate=useNavigate();
    const [clientBlob,setClientBlob]=useState([{}]);
    const [count,setCount]=useState(1);
    const [karigarBlob,setKarigarBlob]=useState([{}]);
    const [clientFileObj,setClientFileObj]=useState([{}]);
    const [karigarFileObj,setKarigarFileObj]=useState([{}]);
    const dispatch=useDispatch();
    const orderConfirm=useSelector(state=>state.orderConfirm);
    const order=useSelector(state=>state.order);
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const title="PDF For Confirm Order-Shree Kalptaru";
    const text="Order Confirmed!"
    const shareDetails={url:"http://localhost:3000",title:title,text:text};
    useEffect(()=>{
        if(orderConfirm.isSet && count<orderConfirm.data.length+1){

            orderConfirm.data && orderConfirm.data.map((ele,index)=>{
                axios.get(`http://localhost:8080/uploads/pdf/karigar/${ele}_orderKarigar.pdf`,{responseType:"blob"}).then(res=>{
                    // console.log(res);
                    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                    // console.log(pdfBlob);
                    const fil2=new File([pdfBlob],"Karigar.pdf",{
                        type:"application/pdf"
                    })
                    // console.log(fil1);
                    setKarigarBlob((data)=>{
                        return [...data,pdfBlob];
                    });
                    setKarigarFileObj((data)=>{
                        return [...data,fil2]
                    });
                    // setKarigarBlob(pdfBlob);
                    // setKarigarFileObj(fil2);
                    // console.log(fil2);
        
                }).catch(err=>{
                    console.log("Error in file downloading Karigar",err);
                })
                axios.get(`http://localhost:8080/uploads/pdf/client/${ele}_orderClient.pdf`,{responseType:"blob"}).then(res=>{
                    // console.log(res);
                    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                    // console.log(pdfBlob);
                    const fil2=new File([pdfBlob],"client.pdf",{
                        type:"application/pdf"
                    })
                    setClientBlob((data)=>{
                        return [...data,pdfBlob];
                    });
                    setClientFileObj((data)=>{
                        return [...data,fil2]
                    });
                    // setClientBlob(pdfBlob);
                    // setClientFileObj(fil2);
                    
                    // console.log(fil1);
                    // console.log(fil2);
                    // dispatch(emptyOrderConfirm());
                }).catch(err=>{
                    console.log("Error in file downloading Client",err);
                    alert("Pdf not exist! try again");
                })

                setCount(count+1);
            })
            // console.log("orderId",orderId);
            
        }
    },[orderConfirm.isSet])

    useEffect(()=>{
        if(!order.data.orders){
            dispatch(getAllOrders());
        }
    },[order.data])

    // let blob = fetch("http://localhost:8080/uploads/pdf/karigar/62a9f36a7eace28bda65aa58_orderKarigar.pdf").then(r => r.blob());
    // console.log(blob);
    
    const handleShare=async (fileObj)=>{
        // console.log(testPDF)
        // console.log(url);
        // console.log(shareDetails)
        const shareObj={...shareDetails,files:[fileObj]};
        // console.log("öbj",obj)
        if(navigator.share){
            try{
                await navigator
                .share(shareObj)
                .then(()=>{
                    console.log("shared succuesfully");
                })
            }catch(err){
                console.log(err);
                console.log("Error Occured",err);
            }
        }else{
            console.log("Error in if condition");
        }

    }

    const handleDownload=(blob,clientflag)=>{
        if(clientflag){
            saveAs(blob,"client.pdf");
        }else{
            saveAs(blob,"karigar.pdf");
        }
    }
    // const noOrdersSet=()=>{
    //     return <div>
    //     </div>
    // }
    // if(!orderConfirm.isSet){
    //     return <p className='center'>No Order has been Created Right Now!</p> 
    // }
  return (
    <>
        <Navbar/>
        {
            
        }
        {
            // console.log(clientFileObj)
            orderConfirm.isSet?order.loading?<div className='loader'>Loading...</div>:
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}/> Order Confirm
            </div>
            
            <div className='co-container mt-4'>
                
                <div className='co-icon'>
                    
                    <img src={coImg}/>
                </div>
                {
                    orderConfirm.data && clientBlob.length>0 && orderConfirm.data.map((ele,index)=>{
                        console.log("count",count);
                        
                        console.log(orderConfirm.data);

                        return <span key={index}>
                        <div className='co-title'>
            
                            Order #{index+1} has been Confirmed!
                        </div>
                        <div className='co-customer-share mt-2'>
                           <button className='co-share-btn' onClick={()=>handleShare(clientFileObj[index+1])}>
                                Share PDF to Client &nbsp;<BsWhatsapp/>
                           </button>
                        </div>
                        <div className='co-karigar-share mt-2'>
                            <button className='co-share-btn' onClick={()=>handleShare(karigarFileObj[index+1])}>
                                Share PDF to Karigar &nbsp;<BsWhatsapp/>
                           </button>
                        </div>
                        <div className='co-title mt-2'>
                            <h4><i>OR</i></h4>
                        </div>
                        <div className='co-title'>
            
                            Download PDFs!
                        </div>
                        <div className='co-customer-share mt-2'>
                           <button className='co-share-btn' onClick={()=>handleDownload(clientBlob[index+1],true)}>
                             PDF for Client &nbsp;<AiOutlineCloudDownload/>
                           </button>
                        </div>
                        <div className='co-karigar-share mt-2'>
                            <button className='co-share-btn' onClick={()=>handleDownload(karigarBlob[index+1],false)}>
                             PDF for Karigar &nbsp;<AiOutlineCloudDownload/>
                           </button>
                        </div>
                        </span>
                    })
                }
                
            </div>
           
        </div>:<div className='container no-main no-border pageview'>
        <div className='no-heading'>
          <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}/> Order Confirm
        </div>
        
        <div className='co-container mt-4'>
            
            <div className='co-icon'>
                
                <img src={noCoImg}/>
            </div>
                 <span>
                    <div className='co-title'>
                        There are no Orders created right now! Please, <strong>create order</strong> first or Check into <strong>track order</strong> for previously created orders!
                    </div>
                </span>  
        </div>
       
    </div>
        }
    </>
  )
}

export default ConfirmOrder