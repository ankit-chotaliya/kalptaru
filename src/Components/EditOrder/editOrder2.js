import React, { useState } from 'react'
import './editOrder2.css'
import Navbar from '../NavBar/Navbar';
import ModalHelper from '../Helper/Modal/ModalHelper';
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import ring from "./ring.jpg";
import demo from './demo.jpg';
import demo1 from './demo1.jpg';
import demo2 from './demo2.jpg';
import demo3 from './demo3.jpg';
import Slider from "react-slick";


function EditOrder2() {
    const navigate=useNavigate();

    const [viewModal, setViewModal] = useState(false);
    const handleModalReply = (e) => {
        const reply = e.target.value;
        console.log(reply);
        if (reply == "true") {
            alert("deleted successfully!");
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
    const products = [
        {
            img: ring,
            title: 'Ring1',
        },
        {
            img: demo,
            title: 'Ring2',
        },
        {
            img: demo1,
            title: 'Ring3',
        },
        {
            img: demo2,
            title: 'Ring4',
        },
        {
            img: demo3,
            title: 'Ring5',
        }
    ]

    const hadnleUpdateOrder = (e) => {
        e.preventDefault();
        setViewModal(true);
    }

    return (
        <>
            <Navbar />

            <div className="container no-main no-border pageview">

                    <div className='eo2-heading no-heading'>
                    <div className='eo2-editorder'>
                    <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>navigate(-1)}/> Order View
                    </div>
                    <div className='eo2-btns'>
                    <button className='eo2-btn'><HiOutlineTrash id='deleteicon' onClick={hadnleUpdateOrder} /></button>
                    <button className='eo2-btn'><VscEdit id='deleteicon' onClick={()=>{navigate("/EditOrderForm")}}/></button>
                    </div>
                    </div>

                    <ModalHelper
                        show={viewModal}
                        onHide={() => setViewModal(false)}
                        icon={<HiOutlineTrash onClick={hadnleUpdateOrder} />}
                        text="Are you sure you want to delete this Order?"
                        onReply={handleModalReply}
                    />


                    <div className='eo2-container mt-4'>
                        <p className='clienttitle'>Client Details</p>
                        <div className='table-responsive-md clientdata'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='twidth'>Name:</td>
                                        <td className='twidth'>Harsh Pathak</td>
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
                                        <img className="img" src={x.img} style={{"height" : "250px"}}/>
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

          
        </>
    )
}

export default EditOrder2;