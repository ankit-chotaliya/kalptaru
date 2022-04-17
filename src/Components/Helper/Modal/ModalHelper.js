import React from 'react'
import {Modal} from 'react-bootstrap'
import './ModalHelper.css'
const ModalHelper = (props) => {
  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='mh-modal-main'
      >
        <Modal.Body className='mh-modal'>
            <div className='mh-container'>
                <div className='mh-icon'>
                    {props.icon}
                </div>
                <div className='mh-title'>
                    {props.text}
                </div>
                <div className='mh-btn'>
                    <button className="mh-yes-btn" value={true} onClick={props.onReply}>Yes</button>
                    <button className="mh-no-btn" value={false} onClick={props.onReply}>No</button>
                </div>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default ModalHelper