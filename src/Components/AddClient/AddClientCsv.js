import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { createClientCsv } from '../../actions';
import './AddClient.css';

const AddClientCsv = (props) => {

    const [clientCsv, setClientCsv] = useState(null);

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    var bool = new Boolean(false);

    const handleFile = (e) => {

        let file = e.target.files[0];
        setClientCsv(file);
    }

    const processCsv = (str, delim = ",") => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const sz = headers.length;

        headers[sz - 1] = headers[sz - 1].split('\r')[0];

        const rows = str.slice(str.indexOf('\n') + 1).split('\n');

        const dataObj = rows.map((row, index) => {
            if (index < rows.length - 1) {
                const values = row.split(delim);

                values[sz - 1] = values[sz - 1].split('\r')[0];

                const eachObject = headers.reduce((obj, header, i) => {
                    obj[header] = values[i];
                    if(user.authenticate==true){
                        obj["createdby"] = user.data.user._id;
                    }else{
                        obj["createdByAdmin"]=true;
                    }
                    
                    return obj;
                }, {})
                return eachObject;
            }
        })

        dataObj.map((data, index) => {
            if (index < dataObj.length - 1) {

                if (data.client_name == "" || !RegExp(/^[a-zA-Z ]{2,30}$/).test(data.client_name)) {

                    alert("Client Name Incorrect");
                    return;
                }
                else if (data.client_company == "" || !RegExp(/^[a-zA-Z ]{4,30}$/).test(data.client_company)) {

                    alert("Company Name Incorrect");
                    return;
                }
                else if (data.client_email == "" || !RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(data.client_email)) {

                    alert("Email is not valid");
                    return;
                }
                else if (data.client_contact == "" || !RegExp(/^\d{10}$/).test(data.client_contact)) {

                    alert("Mobile No. is not valid!");
                    return;
                }
                else if (data.client_pincode == "" || !RegExp(/^\d{6}$/).test(data.client_pincode)) {

                    alert("Pincode is not valid!");
                    return;
                }
                else if (data.client_country == "" || !RegExp(/^[a-zA-Z ]{2,30}$/).test(data.client_country)) {
                    alert("Country Name Incorrect");
                    return;
                }
                else if (!RegExp(/^[a-zA-Z ]{0,30}$/).test(data.client_state)) {
                    alert("State Name Incorrect");
                    return;
                }
                else if (!RegExp(/^[a-zA-Z ]{0,30}$/).test(data.client_city)) {
                    alert("City Name Incorrect");
                    return;
                }
                else {
                    bool = true;
                    return;
                }

            }
        })

        if (bool == true) {
            if(user.authenticate==true){
                dispatch(createClientCsv(dataObj,false));
            }else{
                dispatch(createClientCsv(dataObj,true));
            }
           
        }

        props.onHide();
    }

    const AddClientCsvSubmit = (e) => {

        e.preventDefault();

        const file = clientCsv;
        const reader = new FileReader();

        reader.onload = function (e) {

            const text = e.target.result;
            processCsv(text);
        }

        reader.readAsText(file);
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
                            <div className="mt-4">
                                <label  >Upload Csv File:</label>
                                <div className='d-flex justify-content-start'>
                                    <input
                                        type="file"
                                        className="form-control no-input mt-3"
                                        onChange={(e) => handleFile(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>
                            <button className="mt-3 w-25 no-sub-btn" onClick={(e) => AddClientCsvSubmit(e)}>Upload</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddClientCsv