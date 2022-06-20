import React, { useEffect, useState } from 'react'
import {Modal,Button} from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddCategoryData, getAllCategory } from '../../actions';
import './AddCategory.css';
const AddCategory = (props) => {
    const [categoryName,setCategoryName]=useState("");
    const [categoryref,setCategoryref]=useState("");
    const category=useSelector(state=>state.category);
    const dispatch=useDispatch();
    const AddCategorySubmit=(e)=>{
        e.preventDefault();
        const cateObj={
            name:categoryName,
            ref:categoryref
        }
        dispatch(AddCategoryData(cateObj));
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
              <AiOutlineArrowLeft onClick={props.onHide}/> Category Details
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <div className=' row'>
                <div className="col-md-6 col-sm-12 mt-4">
                <label >Category Name*:</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder='Category Name'
                    value={categoryName}
                    onChange={(e)=>{setCategoryName(e.target.value)}}
                    />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                <label >Category Reference Name*:</label>
                    <div className='d-flex justify-content-start'>
                    <input 
                    type="text" 
                    className="form-control no-input" 
                    placeholder='Category Reference (ex=gold chain==>gc)'
                    value={categoryref}
                    onChange={(e)=>{setCategoryref(e.target.value)}}
                    />
                    </div>
                </div>
            </div>
            <div className='mt-4'><b>* Indicates Mandatory fields</b></div>
            <Modal.Footer>
                <button className="mt-3 w-25 no-sub-btn" onClick={AddCategorySubmit}>Submit</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default AddCategory