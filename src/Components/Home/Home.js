import React, { useEffect, useState } from "react";
import Navbar from '../NavBar/Navbar';
import Loader from '../Helper/Loader/Loader';
import newOrder from "./icons/plus.png";
import editOrder from "./icons/edit.png";
import trackOrder from "./icons/search.png";
import { Link,useNavigate } from 'react-router-dom';
import completedOrders from "./icons/clipboard.png";
import sendReminder from "./icons/notification.png";
import urgentOrders from "./icons/exclamation-mark.png";
import orderStatus from  "./icons/status.png"
import "./Home.css";
import { useSelector } from "react-redux";
import { emptyOrderConfirm, getAllOrders } from "../../actions";
import { useDispatch } from "react-redux";
function Home() {
  const order=useSelector(state=>state.order);
  const karigar=useSelector(state=>state.karigar);
  const dispatch=useDispatch();
  const [online, isOnline] = useState(navigator.onLine);

  const setOnline = () => {
    console.log('We are online!');
    isOnline(true);
  };
  const setOffline = () => {
    console.log('We are offline!');
    isOnline(false);
  };

  // Register the event listeners
  useEffect(() => {
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
    }
  }, []);
  useEffect(()=>{
    dispatch(getAllOrders());
    dispatch(emptyOrderConfirm());
  },[])
  if(order.loading){
    return <Loader/>
  }
  return (
    <>
    <Navbar />
      {
        // order.data.orders && order.data.orders.map((ele,index)=>{
        //   return <div key={ele._id}>
        //     <p>Id-{index} {ele._id}</p>
        //     <br/>
        //     <p>Category-{index} {ele.orderCategory}</p>
        //   </div>
        // })
      }
      {
        // karigar.data.karigar && karigar.data.karigar.map((ele,index)=>{
        //   return <div key={ele._id}>
        //     <p>Id-{index} {ele._id}</p>
        //     <br/>
        //     <p>Karigar-Name-{index} {ele.karigar_name}</p>
        //   </div>
        // })
      }
      <div className="container-fluid bg-home">
      <div>Hii {online}</div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 colcenter-home mb-5">
            <div className="parent_box-home"> <div className="title-home mt-5">Order Status</div></div>
            <div className="parent_box-home">
              <div className="row contentaround-home ">
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                  <Link to="/create" className="link-style">
                  <div className="card box-home">
                    <div className="card-body box-body ">
                      <img className="logo-home" src={newOrder} alt="New Order" />
                      <h5 className="card-title boxname-home">New Order</h5>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                <Link to="/OrderStatus" className="link-style">
                  <div className="card box-home ">
                    <div className="card-body box-body">
                      <img
                        className="logo-home"
                        src={orderStatus}
                        alt="New Order"
                      />
                      <h5 className="card-title boxname-home">
                        Order Status
                      </h5>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                <Link to="/EditOrder" className="link-style">
                  <div className="card box-home ">
                    <div className="card-body box-body">
                      <img
                        className="logo-home"
                        src={editOrder}
                        alt="Edit Order"
                      />
                      <h5 className="card-title boxname-home">Edit Order</h5>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                <Link to="/TrackOrder" className="link-style">
                  <div className="card box-home ">
                    <div className="card-body box-body">
                      <img
                        className="logo-home"
                        src={trackOrder}
                        alt="Track Order"
                      />
                      <h5 className="card-title boxname-home">Track Order</h5>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                <Link to="/CompletedOrders" className="link-style">
                  <div className="card box-home ">
                    <div className="card-body box-body">
                      <img
                        className="logo-home"
                        src={completedOrders}
                        alt="New Order"
                      />
                      <h5 className="card-title boxname-home">
                        Completed Delivery
                      </h5>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                <Link to="/SendReminder" className="link-style">
                  <div className="card box-home ">
                    <div className="card-body box-body">
                      <img
                        className="logo-home"
                        src={sendReminder}
                        alt="Edit Order"
                      />
                      <h5 className="card-title boxname-home">Send Reminder</h5>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-home">
                <Link to="/UrgentOrders" className="link-style">
                  <div className="card box-home ">
                    <div className="card-body box-body">
                      <img
                        className="logo-home"
                        src={urgentOrders}
                        alt="Track Order"
                      />
                      <h5 className="card-title boxname-home">Urgent Orders</h5>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
