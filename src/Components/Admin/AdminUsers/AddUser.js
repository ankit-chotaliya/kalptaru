import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { adminAddUser } from '../../../actions/admin.action';
import './AdminUsers.css';
const AddUser = (props) => {


  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const AddUserSubmit = (e) => {

    e.preventDefault();

    if (userName == "" || !RegExp(/^[a-zA-Z ]{2,30}$/).test(userName)) {
      alert("User Name Incorrect");
      return;
    }
    else if (!RegExp(/^$|^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(userEmail)) {
      alert("Email is not valid");
      return;
    }
    else if (userMobile == "" || !RegExp(/^\d{10}$/).test(userMobile)) {

      alert("Mobile No. is not valid!");
      return;
    }
    else if (userPassword == "" || !RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).test(userPassword)) {
      alert("Please Enter the Storng Password!");
      return;
    }
    else if (userPassword != confirmPassword) {
      alert("Password does not match with confirm password!");
      return;
    }
    else if(userLocation != "Mumbai" && userLocation != "Bangalore")
    {
      alert("Please Select Valid Location!");
      return;
    }





    const dataObj = {
      fullname: userName,
      password: userPassword,
      emailId: userEmail,
      contact: userMobile,
      location: userLocation
    }
    dispatch(adminAddUser(dataObj));

    props.onHide();
    setUserName("");
    setUserEmail("");
    setUserMobile("");
    setUserLocation("");
    setUserPassword("");
    setConfirmPassword("");

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
              <AiOutlineArrowLeft onClick={props.onHide} /> User Details
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >User Name*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='User Name'
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >User Email:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='Email Address'
                    value={userEmail}
                    onChange={(e) => { setUserEmail(e.target.value) }}
                  />
                </div>
              </div>
            </div>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >User Mobile No.*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='Mobile Number'
                    value={userMobile}
                    onChange={(e) => { setUserMobile(e.target.value) }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="ref-num">Location*:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(!active) }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='Location'
                    value={userLocation}
                    onChange={(e) => { setUserLocation(e.target.value); setActive(true); }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {
                      active && (
                        <div className='dropdown-content '>
                          <div className='options ' onClick={(e) => { setUserLocation("Mumbai"); }}>Mumbai</div>
                          <div className='options ' onClick={(e) => { setUserLocation("Bangalore"); }}>Bangalore</div>
                        </div>
                      )
                    }
                  </div>
                </div>

              </div>
            </div>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >Password*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="password"
                    className="form-control no-input"
                    placeholder='Password'
                    value={userPassword}
                    onChange={(e) => { setUserPassword(e.target.value) }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="qty">Confirm Password*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="password"
                    className="form-control no-input"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                  />
                </div>
              </div>
            </div>

            <div className='mt-4'><b>* Indicates Mandatory fields</b></div>
            <Modal.Footer>

              <button className="mt-3 w-25 no-sub-btn" onClick={AddUserSubmit}>Submit</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default AddUser