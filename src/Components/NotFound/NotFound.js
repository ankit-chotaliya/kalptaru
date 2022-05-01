import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom';
import image from './NotFound.png'
const NotFound = () => {
  return (
    <>
    <div className='page-section'>
    <div className="full-width-screen">
    <div className="container-fluid">
        <div className="content-detail">
            <h1 className="global-title"><span>4</span><span>0</span><span>4</span></h1>

            <h4 className="sub-title">Oops!</h4>

            <p className="detail-text">We're sorry,<br/> The page you were looking for doesn't exist anymore.</p> 

            <div className="back-btn">
                <Link to="/" className="btn">Back to Home</Link>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default NotFound