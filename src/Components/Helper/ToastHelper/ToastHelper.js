import React, { useState } from 'react'
import {Toast,ToastContainer} from 'react-bootstrap'
const ToastHelper = (props) => {
    const [show, setShow] = useState(true);
  return (
    <>
        <ToastContainer className="p-3" position="bottom-end" key={props.key}>
            <Toast bg={props.bg} show={show} onClose={() => setShow(false)} delay={props.delay} autohide>
                <Toast.Body className='text-white'>{props.msg}</Toast.Body>
            </Toast>
        </ToastContainer>
        {
          props.inc()
        }
    </>
  )
}

export default ToastHelper