import React from 'react'
import newOrder from './icons/plus.png'
import editOrder from './icons/edit.png'
import trackOrder from './icons/search.png'
import completedOrders from './icons/clipboard.png'
import sendReminder from './icons/notification.png'
import urgentOrders from './icons/exclamation-mark.png'
import './Home.css'
function Home() {
    return (
        <>
            <div className="bg-home">
                <div className="title-home">Order Status</div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card box-home">
                            <div className="card-body">
                                <img className="newOrderlogo-home" src={newOrder} alt="New Order" />
                                <h5 className="card-title boxname-home">New Order</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card box-home">
                            <div className="card-body">
                            <img className="editOrderlogo-home" src={editOrder} alt="Edit Order" />
                                <h5 className="card-title boxname-home">Edit Order</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card box-home">
                            <div className="card-body">
                            <img className="trackOrderlogo-home" src={trackOrder} alt="Track Order" />
                                <h5 className="card-title boxname-home">Track Order</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row boxrow-home">
                    <div className="col-md-4">
                        <div className="card box-home">
                            <div className="card-body">
                                <img className="newOrderlogo-home" src={completedOrders} alt="New Order" />
                                <h5 className="card-title boxname-home">Completed Orders</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card box-home">
                            <div className="card-body">
                            <img className="editOrderlogo-home" src={sendReminder} alt="Edit Order" />
                                <h5 className="card-title boxname-home">Send Reminder</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card box-home">
                            <div className="card-body">
                            <img className="trackOrderlogo-home" src={urgentOrders} alt="Track Order" />
                                <h5 className="card-title boxname-home">Urgent Orders</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home