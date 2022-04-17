import React, { useState } from 'react'
import './NewOrder.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import NewOrderComponent from './NewOrderComponent'
import NavBar from '../NavBar/Navbar'
/*track
  test={}
  [{

  },{

  }]
*/
/*
client:"",
order:[
  {
    
  },{

  }
]
*/
const NewOrder = () => {
  //form-variables
  const [fData,setFData]=useState([{
    client:"",
    karigar:"",
    pCategory:"",
    refNum:"",
    qty:"",
    weightFrom:1,
    weightTo:1,
    dDate:"",
    melting:"",
    priority:"",
    img:[],
    huid:"",
    oType:""
  }]);
  const [client,setClient]=useState("");
  const [karigar,setKarigar]=useState("");
  const [pCategory,setPCategory]=useState("");
  const [refNum,setRefNum]=useState("");
  const [qty,setQty]=useState(1);
  const [weightFrom,setWeightFrom]=useState(1);
  const [weightTo,setWeightTo]=useState(1);
  const [dDate,setDDate]=useState("");
  const [melting,setMelting]=useState("");
  const [priority,setPriority]=useState("");
  const [img,setImg]=useState([]);
  const [huid,setHuid]=useState("");
  const [oType,setOType]=useState("");

  //formdata tracking functions
  const handleClient=(e)=>{
    setClient(e.target.value);
  }
  const handleKarigar=(e)=>{
    setKarigar(e.target.value)
  }
  const handlePCategory=(e)=>{
      setPCategory(e.target.value);
  }
  const handleRefNum=(e)=>{
    setRefNum(e.target.value);
  }
  const handleQty=(e)=>{
    setQty(e.target.value);
  }
  const handleWFrom=(e)=>{
    setWeightFrom(e.target.value);
  }
  const handleWTo=(e)=>{
    setWeightTo(e.target.value);
  }
  const handledDate=(e)=>{
    setDDate(e.target.value);
  }
  const handleMelting=(e)=>{
    setMelting(e.target.value);
  }
  const handlePriority=(e)=>{
    setPriority(e.target.value);
  }
  const handleimg=(e)=>{
    console.log(e.target.files);
    setImg(e.target.files)
  }
  const handleHUID=(e)=>{
    setHuid(e.target.value);
  }
  const handleOType=(e)=>{
    setOType(e.target.value);
  }
  //for Component and order tracking using count
  const [count,setCount]=useState(2);
  const [Component, setComponent] = useState([
    <NewOrderComponent 
    key="1"
    number="1"
    handleClient={handleClient}
    handleKarigar={handleKarigar}
    handlePCategory={handlePCategory}
    handleRefNum={handleRefNum}
    handleQty={handleQty}
    handleWFrom={handleWFrom}
    handleWTo={handleWTo}
    handledDate={handledDate}
    handleMelting={handleMelting}
    handlePriority={handlePriority}
    handleimg={handleimg}
    handleHUID={handleHUID}
    handleOType={handleOType}
    img={img}
    />
  ])

  //add-more and submit button event
  const handleAddMore=(e)=>{
    e.preventDefault();
    if(karigar=="" || pCategory=="" || melting=="" || refNum=="" || qty=="" || weightFrom=="" || weightTo=="" || dDate=="" || priority=="" || huid=="" || oType==""){
      alert("All the Information Required 1!")
      return;
    }
    setFData(fData=>[...fData,{
      client:client,
      karigar:karigar,
      pCategory:pCategory,
      refNum:refNum,
      qty:qty,
      weightFrom:weightFrom,
      weightTo:weightTo,
      dDate:dDate,
      melting:melting,
      priority:priority,
      img:img,
      huid:huid,
      oType:oType
    }]);
    setClient("");
    setKarigar("");
    setPCategory("");
    setRefNum("");
    setQty(1);
    setWeightFrom(1);
    setWeightTo(1);
    setDDate("");
    setMelting("");
    setPriority("");
    setImg([]);
    setHuid("");
    setOType("");
    setCount(count=>count+1);
    setComponent(Component=>
      [...Component,
        <NewOrderComponent 
        key={count}
        number={count}
        handleClient={handleClient}
        handleKarigar={handleKarigar}
        handlePCategory={handlePCategory}
        handleRefNum={handleRefNum}
        handleQty={handleQty}
        handleWFrom={handleWFrom}
        handleWTo={handleWTo}
        handledDate={handledDate}
        handleMelting={handleMelting}
        handlePriority={handlePriority}
        handleimg={handleimg}
        handleHUID={handleHUID}
        handleOType={handleOType}
        img={img}
        />])
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(karigar=="" || pCategory=="" || melting=="" || refNum=="" || qty=="" || weightFrom=="" || weightTo=="" || dDate=="" || priority=="" || huid=="" || oType==""){
      alert("All the Information Required 2!")
      return;
    }
    setFData(fData=>[...fData,{
      karigar:karigar,
      pCategory:pCategory,
      refNum:refNum,
      qty:qty,
      weightFrom:weightFrom,
      weightTo:weightTo,
      dDate:dDate,
      melting:melting,
      priority:priority,
      img:img,
      huid:huid,
      oType:oType
    }]);
    setKarigar("");
    setPCategory("");
    setRefNum("");
    setQty(1);
    setWeightFrom(1);
    setWeightTo(1);
    setDDate("");
    setMelting("");
    setPriority("");
    setImg([]);
    setHuid("");
    setOType("");
    
    console.log(fData[1].melting);
    
  }
  return (
    <>
        <NavBar/>
       
        <div className='container no-main no-border pageview'>
            <div className='no-heading'>
              <AiOutlineArrowLeft/> New Order
            </div>
            
            <div className='no-form'>
              <form onSubmit={handleSubmit}>
              {Component}
                <div className='row'>
                  <div className='col-md-6 col-sm-6 mt-4'>
                  <button className='no-add-more' onClick={handleAddMore}>Add More</button>
                  </div>
                  <div className='col-md-6 col-sm-6 mt-4'>
                  <button type="submit" className='no-sub-btn' onClick={handleSubmit}>Submit Order</button>
                  </div>
                  {console.log(fData)}
                </div>
              </form>
            </div>
           
        </div>
    </>
  )
}

export default NewOrder