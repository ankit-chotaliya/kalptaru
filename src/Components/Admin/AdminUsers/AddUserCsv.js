import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { adminAddUserCsv, adminGetAllUser } from '../../../actions/admin.action';
import './AdminUsers.css';

const AddUserCsv = (props) => {

    const [userCsv, setUserCsv] = useState(null);

    const Users = useSelector(state => state.user);

    const dispatch = useDispatch();

    var bool = new Boolean(false);

    const handleFile = (e) => {

        let file = e.target.files[0];
        setUserCsv(file);
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
                    return obj;
                }, {})
                return eachObject;
            }
        })

        var error_flag = 0;

        dataObj.map((data, index) => {
            if (index < dataObj.length - 1) {

                Users.data.user.forEach(value => {

                    if (value.contact == data.contact) {
                        error_flag = error_flag + 1;
                        return
                    }
                })

                if (data.fullname == "" || !RegExp(/^[a-zA-Z ]{2,30}$/).test(data.fullname)) {
                    alert("User Name Incorrect");
                    return;
                }
                else if (!RegExp(/^$|^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(data.emailId)) {
                    alert("Email is not valid");
                    return;
                }
                else if (data.contact == "" || !RegExp(/^\d{10}$/).test(data.contact)) {

                    alert("Mobile No. is not valid!");
                    return;
                }
                else if (data.password == "" || !RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).test(data.password)) {
                    alert("Please Enter the Storng Password!");
                    return;
                }
                else if (data.location != "Mumbai" && data.location != "Secunderabad") {
                    alert("Please Select Valid Location!");
                    return;
                }
            }
        })

        if(error_flag > 0){
            alert("User Already Exists");
        }
        else{
            dispatch(adminAddUserCsv(dataObj));
            dispatch(adminGetAllUser());
        }

        props.onHide();
    }

    const AddUserCsvSubmit = (e) => {

        e.preventDefault();

        const file = userCsv;
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
                            <AiOutlineArrowLeft onClick={props.onHide} /> User Details
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
                            <button className="mt-3 w-25 no-sub-btn" onClick={(e) => AddUserCsvSubmit(e)}>Upload</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddUserCsv