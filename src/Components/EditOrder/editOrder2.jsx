import React from 'react'
import './editOrder2.css'
import Navbar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import {GrPrevious, GrNext} from "react-icons/gr";
import ring from "./ring.jpg";
import { Helmet } from "react-helmet";
import $ from 'jquery';
function editOrder2() {


    $(document).ready(function () {

        $('.items').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    });

    return (
        <>
            <Navbar />
            <Helmet>
            </Helmet>
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
                            <div className='table-responsive-md clientdata'>
                                <table>
                                    <tr>
                                        <td>Client Name:</td>
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
                            <hr />

                            <p className='clienttitle'>Order Details</p>


                            <div className='slider'>
                            <button className='btn-slider'><GrPrevious></GrPrevious></button>
                            <img className='img-slider' src={ring}></img>
                            <img className='img-slider' src={ring}></img>
                            <img className='img-slider' src={ring}></img>
                            <img className='img-slider' src={ring}></img>
                            <button className='btn-slider'><GrNext></GrNext></button>
                            
                            </div>
                        




                            <div className='table-responsive-md clientdata'>
                                <table>
                                    <tr>
                                        <td>Order No:</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Order Date:</td>
                                        <td>05/03/20</td>
                                    </tr>
                                    <tr>
                                        <td>Placed By:</td>
                                        <td>Sujit Sharma</td>
                                    </tr>
                                    <tr>
                                        <td>Ref No.</td>
                                        <td>1234</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity:</td>
                                        <td>1pcs</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td>12-22gm</td>
                                    </tr>
                                    <tr>
                                        <td>Due Date</td>
                                        <td>06/06/20</td>
                                    </tr>
                                    <tr>
                                        <td>Due In:</td>
                                        <td>5 days</td>
                                    </tr>
                                    <tr>
                                        <td>Melting</td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td>Priority</td>
                                        <td>Normal</td>
                                    </tr>
                                    <tr>
                                        <td>Client Type</td>
                                        <td>Customer Order</td>
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