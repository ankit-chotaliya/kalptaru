import React, { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { createClient } from '../../actions';
import { Country, State, City } from 'country-state-city';
import './AddClient.css';
const AddClient = (props) => {
  const [clientID, setClientID] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMobile, setClientMobile] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [clientState, setClientState] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientPincode, setClientPincode] = useState("");
  const [active, setActive] = useState(false);
  const [activeState, setActiveState] = useState(false);
  const [activeCity, setActiveCity] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const AddClientSubmit = (e) => {
    e.preventDefault();

    if (clientName == "" || !RegExp(/^[a-zA-Z ]{2,30}$/).test(clientName)) {
      alert("Client Name Incorrect");
      return;
    }

    if (clientID == "" || !RegExp(/^[a-zA-Z ]{4,30}$/).test(clientID)) {
      alert("Company Name Incorrect");
      return;
    }

    if (clientEmail == "" || !RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(clientEmail)) {
      alert("Email is not valid");
      return;
    }

    if (clientMobile.length < 10 || clientMobile.length > 10) {
      alert("Mobile No. is not valid!");
      return;
    }
    if (clientPincode.length < 6 || clientPincode.length > 6) {
      alert("Pincode is not valid!");
      return;
    }

    //   console.log("Details Have Been Submitted");
    //   console.log(clientID);
    //   console.log(clientName);
    //   console.log(clientEmail);
    //   console.log(clientMobile);
    //   console.log(clientCountry);
    //   console.log(clientState);
    //   console.log(clientCity);
    //   console.log(clientPincode);
    const dataObj = {
      client_company: clientID,
      client_email: clientEmail,
      client_name: clientName,
      client_contact: clientMobile,
      client_city: clientCity,
      client_state: clientState,
      client_country: clientCountry,
      client_pincode: clientPincode,
      createdby: user.data.user._id
    }
    dispatch(createClient(dataObj));
    props.onHide();
    setClientID("");
    setClientName("");
    setClientMobile("");
    setClientCity("");
    setClientState("");
    setClientCountry("");
    setClientEmail("");
    setClientPincode("");
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
              <AiOutlineArrowLeft onClick={props.onHide} /> Client Details
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >Client Company*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='client Company'
                    value={clientID}
                    onChange={(e) => { setClientID(e.target.value) }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >Client Name*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='client Name'
                    value={clientName}
                    onChange={(e) => { setClientName(e.target.value) }}
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
                    onChange={(e) => { setClientEmail(e.target.value) }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label >Client Mobile No.*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='Mobile Number'
                    value={clientMobile}
                    onChange={(e) => { setClientMobile(e.target.value) }}
                  />
                </div>
              </div>
            </div>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="ref-num">Country*:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(!active); setActiveState(false); setClientState(""); setActiveCity(false); setClientCity(""); setClientState(""); }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='Country'
                    value={clientCountry}
                    onChange={(e) => { setClientCountry(e.target.value); setActive(true); setClientState(""); setCountryCode(""); setClientCity(""); }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {
                      active && (
                        <div className='dropdown-content '>
                          {

                            Country.getAllCountries() && Country.getAllCountries().filter((val) => {

                              if (clientCountry == "") {
                                return val;
                              }
                              else if (val.name.toLowerCase().includes(clientCountry.toLowerCase())) {
                                return val;
                              }
                            }).map((c) => {

                              return <div className='options ' onClick={(e) => {
                                setClientCountry(c.name);
                                setCountryCode(c.isoCode);
                                setActive(false);
                              }}>{c.name}</div>
                            })
                          }
                        </div>
                      )
                    }


                  </div>
                </div>

              </div>
              <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="qty">State:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(false); setActiveState(!activeState); setActiveCity(false); setClientCity(""); }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='State'
                    value={clientState}
                    onChange={(e) => { setClientState(e.target.value);  setClientCity(""); setStateCode("") }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {

                      activeState && (

                        <div className='dropdown-content'>

                          {
                            countryCode ? (State.getStatesOfCountry(countryCode) <= 0 ? <div className='options'> States are not available </div> : State.getStatesOfCountry(countryCode) && State.getStatesOfCountry(countryCode).filter((val) => {

                              if (clientState == "") {
                                return val;
                              }
                              else if (val.name.toLowerCase().includes(clientState.toLowerCase())) {
                                return val;
                              }
                            }).map((s) => {

                              return <div className='options' onClick={(e) => {
                                setClientState(s.name);
                                setStateCode(s.isoCode);
                                setActiveState(false);
                              }}>{s.name}</div>
                            })) : <div className='options'> Please Select Country </div>
                          }
                        </div>
                      )
                    }

                  </div>

                </div>
              </div>
            </div>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="ref-num">City:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(false); setActiveState(false); setActiveCity(!activeCity) }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='City'
                    value={clientCity}
                    onChange={(e) => { setClientCity(e.target.value) }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {
                      activeCity && (
                        <div className='dropdown-content'>

                          {

                            stateCode ? (City.getCitiesOfState(countryCode, stateCode) <= 0 ? <div className='options'> Cities are not available </div> : City.getCitiesOfState(countryCode, stateCode) && City.getCitiesOfState(countryCode, stateCode).filter((val) => {

                              if (setClientCity == "") {
                                return val;
                              }
                              else if (val.name.toLowerCase().includes(clientCity.toLowerCase())) {
                                return val;
                              }
                            }).map((c) => {

                              return <div className='options' onClick={(e) => {
                                setClientCity(c.name);
                                setActiveCity(false);
                              }}>{c.name}</div>
                            })) : <div className='options'> Please Select State </div>
                          }
                        </div>
                      )
                    }

                  </div>

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
                    onChange={(e) => { setClientPincode(e.target.value) }}
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