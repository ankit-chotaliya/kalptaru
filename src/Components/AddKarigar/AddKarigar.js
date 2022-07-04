import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { createKarigar } from '../../actions';
import { Country, State, City } from 'country-state-city';
import './AddKarigar.css';
const AddKarigar = (props) => {
  const [karigarID, setKarigarID] = useState("");
  const [karigarName, setKarigarName] = useState("");
  const [karigarCountry, setKarigarCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [karigarState, setKarigarState] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [karigarCity, setKarigarCity] = useState("");
  const [karigarPincode, setKarigarPincode] = useState("");
  const [karigarEmail, setKarigarEmail] = useState("");
  const [karigarMobile, setKarigarMobile] = useState("");
  const [active, setActive] = useState(false);
  const [activeState, setActiveState] = useState(false);
  const [activeCity, setActiveCity] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const AddKarigarSubmit = (e) => {
    e.preventDefault();

    if (karigarName == "" || !RegExp(/^[a-zA-Z ]{2,30}$/).test(karigarName)) {
      alert("Karigar Name Incorrect");
      return;
    }

    // if (karigarEmail == "" || !RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(karigarEmail)) {
    //   alert("Email is not valid");
    //   return;
    // }

    if (karigarMobile.length < 10 || karigarMobile.length > 10) {
      alert("Mobile No. is not valid!");
      return;
    }
    if (karigarPincode.length < 6 || karigarPincode.length > 6) {
      alert("Pincode is not valid!");
      return;
    }
    // console.log("Details Have Been Submitted");
    // console.log(karigarID);
    // console.log(karigarName);
    // console.log(karigarCountry);
    // console.log(karigarState);
    // console.log(karigarCity);
    // console.log(karigarEmail);
    // console.log(karigarMobile);
    // console.log(karigarPincode);
    let dataObj={};
    if(user.authenticate==true){
      dataObj = {
        karigar_name: karigarName,
        karigar_contact: karigarMobile,
        karigar_city: karigarCity,
        karigar_state: karigarState,
        karigar_country: karigarCountry,
        karigar_pincode: karigarPincode,
        createdby: user.data.user._id
      }
      dispatch(createKarigar(dataObj,false));
    }else{
      dataObj = {
        karigar_name: karigarName,
        karigar_contact: karigarMobile,
        karigar_city: karigarCity,
        karigar_state: karigarState,
        karigar_country: karigarCountry,
        karigar_pincode: karigarPincode,
        createdByAdmin: true
      }
      dispatch(createKarigar(dataObj,true));
    }
    
    props.onHide();
    setKarigarName("");
    setKarigarMobile("");
    setKarigarPincode("");
    setKarigarState("");
    setKarigarCountry("");
    setKarigarCity("");
    setKarigarEmail("");
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
              <AiOutlineArrowLeft onClick={props.onHide} /> Karigar Details
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className=' row'>

              <div className="col-md-6 col-sm-12 mt-4">
                <label >Karigar Name*:</label>
                <div className='d-flex justify-content-start'>
                  <input
                    type="text"
                    className="form-control no-input"
                    placeholder='Karigar Name'
                    value={karigarName}
                    onChange={(e) => { setKarigarName(e.target.value) }}
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
                    onChange={(e) => { setKarigarEmail(e.target.value) }}
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
                    onChange={(e) => { setKarigarMobile(e.target.value) }}
                  />
                </div>
              </div>
            </div>
            <div className=' row'>
              <div className="col-md-6 col-sm-12 mt-4">
                <label htmlFor="ref-num">Country*:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(!active); setActiveState(false); setKarigarState(""); setActiveCity(false); setKarigarCity(""); setKarigarState(""); }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='Country'
                    value={karigarCountry}
                    onChange={(e) => { setKarigarCountry(e.target.value); setActive(true); setKarigarState(""); setCountryCode(""); setKarigarCity(""); }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {
                      active && (
                        <div className='dropdown-content '>
                          {

                            Country.getAllCountries() && Country.getAllCountries().filter((val) => {

                              if (karigarCountry == "") {
                                return val;
                              }
                              else if (val.name.toLowerCase().includes(karigarCountry.toLowerCase())) {
                                return val;
                              }
                            }).map((c) => {

                              return <div className='options ' onClick={(e) => {
                                setKarigarCountry(c.name);
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
                <label htmlFor="qty">State*:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(false); setActiveState(!activeState); setActiveCity(false); setKarigarCity(""); }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='State'
                    value={karigarState}
                    onChange={(e) => { setKarigarState(e.target.value); setKarigarCity(""); setStateCode(""); }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {

                      activeState && (

                        <div className='dropdown-content'>

                          {
                            countryCode ? (State.getStatesOfCountry(countryCode) <= 0 ? <div className='options'> States are not available </div> : State.getStatesOfCountry(countryCode) && State.getStatesOfCountry(countryCode).filter((val) => {

                              if (karigarState == "") {
                                return val;
                              }
                              else if (val.name.toLowerCase().includes(karigarState.toLowerCase())) {
                                return val;
                              }
                            }).map((s) => {

                              return <div className='options' onClick={(e) => {
                                setKarigarState(s.name);
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
                <label htmlFor="ref-num">City*:</label>
                <div className='d-flex' style={{ "flex-direction": "column" }} onClick={(e) => { setActive(false); setActiveState(false); setActiveCity(!activeCity) }}>
                  <input
                    type="text"
                    className="form-select no-select-full-row"
                    placeholder='City'
                    value={karigarCity}
                    onChange={(e) => { setKarigarCity(e.target.value) }}
                  />
                  <div className="dropdown1 no-select-full-row">
                    {
                      activeCity && (
                        <div className='dropdown-content'>

                          {

                            stateCode ? (City.getCitiesOfState(countryCode, stateCode) <= 0 ? <div className='options'> Cities are not available </div> : City.getCitiesOfState(countryCode, stateCode) && City.getCitiesOfState(countryCode, stateCode).filter((val) => {

                              if (setKarigarCity == "") {
                                return val;
                              }
                              else if (val.name.toLowerCase().includes(karigarCity.toLowerCase())) {
                                return val;
                              }
                            }).map((c) => {

                              return <div className='options' onClick={(e) => {
                                setKarigarCity(c.name);
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
                    value={karigarPincode}
                    onChange={(e) => { setKarigarPincode(e.target.value) }}
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