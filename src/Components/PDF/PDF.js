import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from 'react-router-dom';
import { PdfDocument } from "./Template";
import "./PDF.css"
import { useEffect } from "react";
import './PDF.css'
import axiosinstance from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setToastMsg } from "../../actions/toast.action";
import {AiOutlineCloudDownload} from 'react-icons/ai'

export default function PDF(props) {
  const [show, setHide] = useState(true);
  const [showKarigar, setHideKarigar] = useState(false);
  const [data,setData]=useState([]);
  const [loading1,setLoading1]=useState(true);
  const orderId=props.orderId;
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const dateFormat=(d)=>{
    var date = new Date(d);
    const day = date.getDate().toString().padStart(2,"0") +"/"+ (date.getMonth()+1).toString().padStart(2,"0") +"/"+ date.getFullYear();
    return day;
  } 
  useEffect(()=>{
    if(orderId!=""){
      axiosinstance.get("/order/getPDF/"+orderId)
      .then(res=>{
        if(res.status==200){
          res.data.data.deliveryDate=dateFormat(res.data.data.deliveryDate);
          res.data.data.createdAt=dateFormat(res.data.data.createdAt);
          if(res.data.data.orderStatus==1){
            res.data.data.orderStatus="New Order"
          }else if(res.data.data.orderStatus==2){
            res.data.data.orderStatus="Order In Progress"
          }else if(res.data.data.orderStatus==3){
            res.data.data.orderStatus="Karigar Completed"
          }else if(res.data.data.orderStatus==4){
            res.data.data.orderStatus="Order Ready"
          }else if(res.data.data.orderStatus==5){
            res.data.data.orderStatus="Pending Delivery"
          }else if(res.data.data.orderStatus==6){
            res.data.data.orderStatus="Order Completed"
          }else{
            res.data.data.orderStatus="Not Exist"
          }
          return res;
        }else{
          return res;
        }
      }).then((res)=>{
        if(res.status==200){
          setData(res.data.data);
          setHide(true);
          setHideKarigar(true);
          setLoading1(false);
          dispatch(setToastMsg("PDf Ready!",false));
        }else if(res.status==203){
          setHide(false);
          dispatch(setToastMsg(res.data.message,true));
          setHideKarigar(true);
          setLoading1(false);
          return res;
        }else{
          setHide(false);
          dispatch(setToastMsg(res.data.message,true));
          setHideKarigar(true);
          setLoading1(false);
          return res;
        }
      })
    }else{
      dispatch(setToastMsg("PDF orderId cant find!",true));
      navigate("/");
    }
    
  },[])
  return (
    loading1?"Loading...":
    <div className={!props.isRow?"container pdf-btn":"container pdf-btn pdf-display-flex"}>
  
    {show && (
        <PDFDownloadLink
          document={<PdfDocument isClient={true} data={data} />}
          fileName={"client_"+data.createdAt+"_"+data.referenceNo}
          className={!props.isRow?"pdf-btn-specific mt-2":"pdf-btn-specific mt-2 pdf-btn-specific-d"}
          style={{
            textDecoration: "none",
            padding: "10px",
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." :<>Download for Client <AiOutlineCloudDownload/></>
          }
        </PDFDownloadLink>
      )
    }

    {
      showKarigar && (
        <PDFDownloadLink
          document={<PdfDocument isClient={false} data={data} />}
          fileName={"karigar_"+data.createdAt+"_"+data.referenceNo}
          className={!props.isRow?"pdf-btn-specific mt-2":"pdf-btn-specific mt-2 pdf-btn-specific-d"}
          style={{
            textDecoration: "none",
            padding: "10px",
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : <>Download for Karigar <AiOutlineCloudDownload/></>
          }
        </PDFDownloadLink>
      )
    }
    </div>
  );
}
