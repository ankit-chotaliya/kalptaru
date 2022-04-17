import React from 'react'
import './editOrder2.css'
import Navbar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import ring from "./ring.jpg";


function editOrder2() {

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        if (document.getElementsByClassName("mySlides") && document.getElementsByClassName("demo") && document.getElementById("caption")) {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("demo");
            let captionText = document.getElementById("caption");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }


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
                            {/* <div className='clientdata'>
                                <p>
                                    Client Name: Harsh Panchal<br />
                                    Phone No: 12356789<br />
                                    Email ID: person@gmail.com
                                </p>
                            </div> */}

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

                            <div class="container">


                                <a class="prev" onclick="plusSlides(-1)">Prev</a>
                                <a class="next" onclick="plusSlides(1)">Next</a>


                                <div class="row">
                                    <div class="column">
                                        <img class="demo cursor" src={ring} style={{ width: '20%' }} onclick="currentSlide(1)" alt="The Woods" />
                                    </div>
                                    <div class="column">
                                        <img class="demo cursor" src={ring} style={{ width: '20%' }} onclick="currentSlide(2)" alt="Cinque Terre" />
                                    </div>
                                    <div class="column">
                                        <img class="demo cursor" src={ring} style={{ width: '20%' }} onclick="currentSlide(3)" alt="Mountains and fjords" />
                                    </div>
                                    <div class="column">
                                        <img class="demo cursor" src={ring} style={{ width: '20%' }} onclick="currentSlide(4)" alt="Northern Lights" />
                                    </div>
                                    <div class="column">
                                        <img class="demo cursor" src={ring} style={{ width: '20%' }} onclick="currentSlide(5)" alt="Nature and sunrise" />
                                    </div>
                                    <div class="column">
                                        <img class="demo  cursor" src={ring} style={{ width: '20%' }} onclick="currentSlide(6)" alt="Snowy Mountains" />
                                    </div>
                                </div>
                            </div>





                            {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="single-box">
                                                    <div className="img-area">
                                                        <img class="d-block w-100" src={ring} alt="First slide" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-box">
                                                    <div className="img-area">
                                                        <img class="d-block w-100" src={ring} alt="Second slide" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-box">
                                                    <div className="img-area">
                                                        <img class="d-block w-100" src={ring} alt="Third slide" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-box">
                                                    <div className="img-area">
                                                        <img class="d-block w-100" src={ring} alt="Forth slide" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-box">
                                                    <div className="img-area">
                                                        <img class="d-block w-100" src={ring} alt="Fifth slide" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

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