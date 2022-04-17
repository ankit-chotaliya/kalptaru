import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import Navbar from '../NavBar/Navbar'
import './ConfirmOrder.css'
import coImg from './orderConfirmFinal.png'
import testPDF from './test.pdf'
const ConfirmOrder = () => {
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const title="Name";
    const text="Ankit Chotaliya"
    const fil1=new File([Blob],testPDF,{
        type:"application/pdf"
    });
    const filesArray=[fil1];
    const shareDetails={url:url,title:title,text:text,files:filesArray};
    const handleShareCustomer=async ()=>{
        console.log(testPDF)
        console.log(shareDetails)
        if(navigator.share){
            try{
                await navigator
                .share(shareDetails)
                .then(()=>{
                    console.log("shared succuesfully");
                })
            }catch(err){
                console.log(err);
                console.log("Error Occured");
            }
        }else{
            console.log("Error in if condition");
        }

    }
    const handleShareKarigar=async ()=>{
        console.log(testPDF)
        console.log(shareDetails)
        if(navigator.share){
            try{
                await navigator
                .share(shareDetails)
                .then(()=>{
                    console.log("shared succuesfully");
                })
            }catch(err){
                console.log(err);
                console.log("Error Occured");
            }
        }else{
            console.log("Error in if condition");
        }
    }
  return (
    <>
        <Navbar/>
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft/> Order Confirm
            </div>
            
            <div className='co-container mt-4'>
                
                <div className='co-icon'>
                    
                    <img src={coImg}/>
                </div>
                <div className='co-title'>
                    Order has been Confirmed!
                </div>
                <div className='co-customer-share mt-2'>
                   <button className='co-share-btn' onClick={handleShareCustomer}>
                        Send PDF to Client &nbsp;<BsWhatsapp/>
                   </button>
                </div>
                <div className='co-karigar-share mt-2'>
                    <button className='co-share-btn' onClick={handleShareKarigar}>
                        Send PDF to Karigar &nbsp;<BsWhatsapp/>
                   </button>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default ConfirmOrder