import React, { useState } from 'react'
import './editOrder2.css'
import Navbar from '../NavBar/Navbar';
import ModalHelper from '../Helper/ModalButton/ModalButton'
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import ring from "./ring.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalHelper from '../Helper/Modal/ModalHelper';


function editOrder2() {
    

    const [viewModal, setViewModal] = useState(false);
    const handleModalReply = (e) => {
        const reply = e.target.value;
        // console.log(reply);
        if (reply == "true") {
            alert("updated successfully!");
        } else {
            alert("Not Updated!");
        }
        setViewModal(false);
    }

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // width to change options
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    // console.log(config);
    if (window.innerWidth < 600) {
        const config = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        // console.log("hello");
    }
    else {
        const config = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
    }
    const products = [
        {
            img: ring,
            title: 'Ring1',
        },
        {
            img: ring,
            title: 'Ring2',
        },
        {
            img: ring,
            title: 'Ring3',
        },
        {
            img: ring,
            title: 'Ring4',
        },
        {
            img: ring,
            title: 'Ring5',
        }
    ]
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);

    const hadnleUpdateOrder = (e) => {
        e.preventDefault();
        setViewModal(true);
    }

    return (
        <>
            <Navbar />

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className='col-md-8 mb-5'>
                        <div className=" mt-4 editbackbtn d-flex " id='editbackbtn'>

                            <Link to='../Home'>
                                <BiArrowBack id='backbtn' />
                            </Link>
                            <p className='editorder-text' id='editorder-text' > &nbsp; Edit Order</p>
                            <p className='editicons'><HiOutlineTrash id='deleteicon' onClick={hadnleUpdateOrder} /> &nbsp; <VscEdit id='deleteicon' /></p>

                        </div>
                        <div className='clientdetails mt-5'>
                            <p className='clienttitle'>Client Details</p>
                            <div className='table-responsive-md clientdata'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='twidth'>Name:</td>
                                            <td className='twidth'>Harsh Panchal</td>
                                        </tr>
                                        <tr>
                                            <td className='twidth'>Phone no:</td>
                                            <td className='twidth'>123456789</td>
                                        </tr>
                                        <tr>
                                            <td className='twidth'>Email Id:</td>
                                            <td className='twidth'>personalabcd@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />

                            <p className='clienttitle'>Order Details</p>

                            <div className='slider'>
                                <Slider {...config}>
                                    {products.map((x, i) => {
                                        return <div key="{i}" className="img-card">
                                            <img className="img" src={x.img} />
                                        </div>
                                    })}
                                </Slider>
                            </div>




                            <div className='table-responsive-md mt-5 clientdata'>
                                <table>
                                    <tr>
                                        <td className='bwidth'>Order No:</td>
                                        <td className='bwidth'>12</td>
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
            <ModalHelper
                show={viewModal}
                onHide={() => setViewModal(false)}
                icon={<HiOutlineTrash onClick={hadnleUpdateOrder} />}
                text="Are you sure you want to Delete this Order?"
                reply={handleModalReply}
            />
        </>
    )
}

export default editOrder2;
