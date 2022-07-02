import React, { useEffect, useState } from 'react'
import './NewOrder.css'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import NewOrderComponent from './NewOrderComponent'
import NavBar from '../NavBar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { createNewOrder, emptyOrderConfirm } from '../../actions'
import Loader from '../Helper/Loader/Loader'
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
  const navigate = useNavigate();
  //form-variables
  let variableObject={ 
    clientName: "", 
    karigarName : "",
    category:"",
    ref:"",
    qty:"",
    weightFrom:"",
    weightTo:"",
    dDate:"",
    melting:"",
    priority:"",
    img:"",
    huid:"",
    oType:"",
  }
  const [formValues, setFormValues] = useState([variableObject])
  const user=useSelector(state=>state.user);
  const category=useSelector(state=>state.category);
  const order=useSelector(state=>state.order);
  const orderConfirm=useSelector(state=>state.orderConfirm);
  const [errFlag,seterrFlag]=useState(true);
  const dispatch=useDispatch();

  const handleChange=(i,e)=>{
    let newFormValues = [...formValues];
    const targetName=e.target.name.split(" ")[0];

        if(e.target.type=="file"){
          newFormValues[i][e.target.name] = e.target.files;
        }else if(e.target.type=="radio" || targetName=="melting"){
          newFormValues[i][targetName] = e.target.value;
        }else{
          newFormValues[i][e.target.name] = e.target.value;
        }
        setFormValues(newFormValues);
  }
  const addFormFields = (e) => {
    e.preventDefault();
    setFormValues([...formValues, variableObject]);
  }

  const removeFormFields = (i,e) => {
    e.preventDefault();
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  //   formValues.forEach(ele => {
  //     if (ele.clientName=="") {
  //         // alert("Client Not Selected");
  //         seterrFlag(true);
  //       }
  //     if (ele.karigarName=="") {
  //         // alert("Karigar Not Selected");
  //         seterrFlag(true);
  //       }
  //     if (ele.category=="") {
  //         // alert("Category Not Selected");
  //         // seterrFlag(true);
  //       }
  //     if (ele.qty=="") {
  //         // alert("Please Enter Quantity");
  //         seterrFlag(true);
  //       }
  //     if (ele.weightFrom=="") {
  //         // alert("Please Enter weight From");
  //         seterrFlag(true);
  //       }
  //     if (ele.weightTo=="") {
  //         // alert("Please Enter weight To");
  //         seterrFlag(true);
  //       }
  //     if (ele.dDate=="") {
  //         // alert("Please Enter delivery date");
  //         seterrFlag(true);
  //       }
  //     if (ele.melting=="") {
  //         // alert("Please Select Melting Point");
  //         seterrFlag(true);
  //       }
  //     if (ele.priority=="") {
  //         // alert("Please Select Priority");
  //         seterrFlag(true);
  //       }
  //     if (ele.img=="") {
  //         // alert("Please Upload Images");
  //         seterrFlag(true);
  //       }
  //     if (ele.huid=="") {
  //       // alert("Please select HUID");
  //       seterrFlag(true);
  //     }
  //     if (ele.oType=="") {
  //       // alert("Please select HUID");
  //       seterrFlag(true);
  //     }
  //  });
  //  if(errFlag){
  //   alert("All the information is required!!");
  //   return;
  //  }
    // if(karigar=="" || pCategory=="" || melting=="" || refNum=="" || qty=="" || weightFrom=="" || weightTo=="" || dDate=="" || priority=="" || huid=="" || oType==""){
    //   alert("All the Information Required 2!")
    //   return;
    // }
    const clientId=formValues[0].clientName;
    formValues.forEach(ele=>{
      const formData=new FormData();
      
      var target=ele.category;
      category.data.categories.forEach(element => {
        if(element._id==target){
          ele.ref=element.ref;
        }
      });


      Array.from(ele.img).forEach(ele=>{
        formData.append("orderImg",ele);
      })
      // console.log(ele.ref);
      formData.append("clientId",clientId);
      formData.append("karigarId",ele.karigarName);
      formData.append("orderCategory",ele.category);
      formData.append("refNo",ele.ref);
      formData.append("quantity",ele.qty);
      formData.append("weightFrom",ele.weightFrom);
      formData.append("weightTo",ele.weightTo);
      formData.append("deliveryDate",ele.dDate);
      formData.append("melting",ele.melting);
      formData.append("priority",ele.priority);
      formData.append("HUID",ele.huid);
      formData.append("orderType",ele.oType);
      formData.append("orderStatus",1);
      
      formData.append("createdby",user.data.user._id);
      dispatch(createNewOrder(formData));
    })


    
  }
  useEffect(()=>{
    if(order.dataAdded>0 && order.dataAdded==formValues.length && orderConfirm.isSet){
      // alert("Order Created Successfully");
      navigate("/orderConfirm");
    }
  },[order.dataAdded,orderConfirm.isSet])
  useEffect(()=>{
    dispatch(emptyOrderConfirm());
  },[])
  return (
    <>
        <NavBar/>
        {
          order.loading?<Loader msg="Generating PDF..."/>:<div className='container no-main no-border pageview'>
          <div className='no-heading'>
            <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> New Order
          </div>
          
          <div className='no-form'>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            {
              formValues.map((element,index)=>{
               return (
                <NewOrderComponent 
                key={index}
                index={index}
                orderNumber={index+1}
                ele={element}
                handleChange={handleChange}
                removeFormFields={removeFormFields}
                />
               ) 
              })
            }
              <div className='row'>
              <div className='mt-4'><b>* Indicates Mandatory fields</b></div>
              </div>
              
              <div className='row'>
                <div className='col-md-6 col-sm-6 mt-4'>
                <button className='no-add-more' onClick={addFormFields}>Add More</button>
                </div>
                <div className='col-md-6 col-sm-6 mt-4'>
                <button type="submit" className='no-sub-btn'>Submit Order</button>
                </div>
              </div>
            </form>
          </div>
         
      </div>
        }
        
    </>
  )
}

export default NewOrder