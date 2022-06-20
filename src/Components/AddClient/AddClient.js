import React, { useState } from 'react'
import {Modal,Button} from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { createClient } from '../../actions';
import './AddClient.css';
const AddClient = (props) => {
  const [clientID,setClientID]=useState("");
  const [clientName,setClientName]=useState("");
  const [clientEmail,setClientEmail]=useState("");
  const [clientMobile,setClientMobile]=useState("");
  const [clientCountry,setClientCountry]=useState("");
  const [clientState,setClientState]=useState("");
  const [clientCity,setClientCity]=useState("");
  const [clientPincode,setClientPincode]=useState("");
  const user=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const AddClientSubmit=(e)=>{
      e.preventDefault();
    //   console.log("Details Have Been Submitted");
    //   console.log(clientID);
    //   console.log(clientName);
    //   console.log(clientEmail);
    //   console.log(clientMobile);
    //   console.log(clientCountry);
    //   console.log(clientState);
    //   console.log(clientCity);
    //   console.log(clientPincode);
      const dataObj={
        client_company:clientID,
        client_name:clientName,
        client_contact:clientMobile,
        client_city:clientCity,
        client_state:clientState,
        client_country:clientCountry,
        client_pincode:clientPincode,
        createdby:user.data.user._id
      }
      dispatch(createClient(dataObj));
      props.onHide();
  }
  return (
    <>
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='no-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <div className='no-heading'>
            <AiOutlineArrowLeft onClick={props.onHide}/> Client Details
          </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
              <label >client Company*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='client Company'
                  value={clientID}
                  onChange={(e)=>{setClientID(e.target.value)}}
                  />
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
              <label >client Name*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='client Name'
                  value={clientName}
                  onChange={(e)=>{setClientName(e.target.value)}}
                  />
                  </div>
              </div>
          </div>
          <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
              <label >Client Email*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='Email Address'
                  value={clientEmail}
                  onChange={(e)=>{setClientEmail(e.target.value)}}
                  />
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
              <label >client Mobile No.*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='Mobile Number'
                  value={clientMobile}
                  onChange={(e)=>{setClientMobile(e.target.value)}}
                  />
                  </div>
              </div>
          </div>
          <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
              <label htmlFor="ref-num">Country*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='Country'
                  value={clientCountry}
                  onChange={(e)=>{setClientCountry(e.target.value)}}
                  />
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
              <label htmlFor="qty">State:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='State'
                  value={clientState}
                  onChange={(e)=>{setClientState(e.target.value)}}
                  />
                  </div>
              </div>
          </div>
          <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
              <label htmlFor="ref-num">City:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='City'
                  value={clientCity}
                  onChange={(e)=>{setClientCity(e.target.value)}}
                  />
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
              <label htmlFor="qty">Pincode*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="number" 
                  className="form-control no-input" 
                  placeholder='Pincode'
                  value={clientPincode}
                  onChange={(e)=>{setClientPincode(e.target.value)}}
                  />
                  </div>
              </div>
          </div>

          <div className='mt-4'><b>* Indicates Mandatory fields</b></div>
          <Modal.Footer>
              
              <button className="mt-3 w-25 no-sub-btn" onClick={AddClientSubmit}>Submit</button>
          </Modal.Footer>
        </form>
        </Modal.Body>
      </Modal>
    
  </>
  )
}

export default AddClient