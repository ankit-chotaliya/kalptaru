import React, { useState } from 'react'
import {Modal,Button} from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { createKarigar } from '../../actions';
import './AddKarigar.css';
const AddKarigar = (props) => {
    const [karigarID,setKarigarID]=useState("");
    const [karigarName,setKarigarName]=useState("");
    const [karigarCountry,setKarigarCountry]=useState("");
    const [karigarState,setKarigarState]=useState("");
    const [karigarCity,setKarigarCity]=useState("");
    // const [karigarEmail,setKarigarEmail]=useState("");
    // const [karigarMobile,setKarigarMobile]=useState("");
    const [karigarPincode,setKarigarPincode]=useState("");
    const [karigarEmail,setKarigarEmail]=useState("");
    const [karigarMobile,setKarigarMobile]=useState("");
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const AddKarigarSubmit=(e)=>{
        e.preventDefault();
        // console.log("Details Have Been Submitted");
        // console.log(karigarID);
        // console.log(karigarName);
        // console.log(karigarCountry);
        // console.log(karigarState);
        // console.log(karigarCity);
        // console.log(karigarEmail);
        // console.log(karigarMobile);
        // console.log(karigarPincode);
        const dataObj={
          karigar_name:karigarName,
          karigar_contact:karigarMobile,
          karigar_city:karigarCity,
          karigar_state:karigarCity,
          karigar_country:karigarCountry,
          karigar_pincode:karigarPincode,
          createdby:user.data.user._id
        }
        dispatch(createKarigar(dataObj));
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
              <AiOutlineArrowLeft onClick={props.onHide}/> Karigar Details
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <div className=' row'>
                <div className="col-md-6 col-sm-12 mt-4">
                <label >Karigar ID:</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder='Karigar ID'
                    value={karigarID}
                    onChange={(e)=>{setKarigarID(e.target.value)}}
                    />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                <label >Karigar Name*:</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder='Karigar Name'
                    value={karigarName}
                    onChange={(e)=>{setKarigarName(e.target.value)}}
                    />
                    </div>
                </div>
            </div>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
              <label >Karigar Email:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='Email Address'
                  value={karigarEmail}
                  onChange={(e)=>{setKarigarEmail(e.target.value)}}
                  />
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
              <label >Karigar Mobile No.*:</label>
                  <div className='d-flex justify-content-start'>
                  <input 
                  type="text" 
                  className="form-control no-input" 
                  placeholder='Mobile Number'
                  value={karigarMobile}
                  onChange={(e)=>{setKarigarMobile(e.target.value)}}
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
                    value={karigarCountry}
                    onChange={(e)=>{setKarigarCountry(e.target.value)}}
                    />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="qty">State*:</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder='State'
                    value={karigarState}
                    onChange={(e)=>{setKarigarState(e.target.value)}}
                    />
                    </div>
                </div>
            </div>
            <div className=' row'>
                <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="ref-num">City*:</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder='City'
                    value={karigarCity}
                    onChange={(e)=>{setKarigarCity(e.target.value)}}
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
                    value={karigarPincode}
                    onChange={(e)=>{setKarigarPincode(e.target.value)}}
                    />
                    </div>
                </div>
            </div>
            <div className='mt-4'><b>* Indicates Mandatory fields</b></div>
            <Modal.Footer>
                <button className="mt-3 w-25 no-sub-btn" onClick={AddKarigarSubmit}>Submit</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default AddKarigar