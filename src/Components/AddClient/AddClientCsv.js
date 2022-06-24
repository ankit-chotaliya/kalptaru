import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { createClient } from '../../actions';
import './AddClient.css';

const AddClientCsv = (props) => {
    const [clientCsv, setClientCsv] = useState(null);
   
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleFile = (e)=> {

        let file = e.target.files[0];
        setClientCsv(file);
    }

    const AddClientCsvSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData();
        
        formdata.append('files', clientCsv);
        formdata.append('createdby', user.data.user._id)

        console.log(formdata);


        const dataObj = {
             createdby: user.data.user._id
         }
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
                                        onChange = {(e)=>handleFile(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <Modal.Footer>

                            <button className="mt-3 w-25 no-sub-btn" onClick={AddClientCsvSubmit}>Upload</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddClientCsv