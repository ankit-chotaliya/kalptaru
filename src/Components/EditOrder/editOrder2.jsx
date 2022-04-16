import React from 'react'
import './editOrder2.css'
import Navbar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";


function editOrder2() {
    return (
        <>
            <Navbar />

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className='col-md-8'>
                        <div className=" mt-4 editbackbtn d-flex " id='editbackbtn'>

                            <Link to='../Home'>
                                <BiArrowBack id='backbtn' />
                            </Link>
                            <p className='editorder-text' id='editorder-text' > &nbsp; Edit Order</p>
                            <p className='editicons'><HiOutlineTrash id='deleteicon' /> &nbsp; <VscEdit id='deleteicon' /></p>

                        </div>
                        <div className='clientdetails mt-5 mx-5'>
                            <p className='clienttitle'>Client Details</p>
                            <div className='clientdata'>
                                <p>
                                    Client Name: Harsh Panchal<br />
                                    Phone No: 12356789<br />
                                    Email ID: person@gmail.com
                                </p>
                            </div>

                            <div className='table-responsive-md'>
                                <table>
                                    <tr>
                                        <td >Client Name:</td>
                                        <td>Harsh Panchal</td>
                                    </tr>
                                    <tr>
                                        <td>Phone no:</td>
                                        <td>123456789</td>
                                    </tr>
                                    <tr>
                                        <td>Email Id:</td>
                                        <td>personal@gmail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default editOrder2