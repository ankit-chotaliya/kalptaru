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
                
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default ModalHelper