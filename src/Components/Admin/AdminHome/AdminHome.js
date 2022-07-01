import React, { useEffect, useState } from "react";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Loader from '../../Helper/Loader/Loader';
import Client from "./icons/client.png";
import Karigar from "./icons/karigar.png";
import User from "./icons/user.png";
import { Link, useNavigate } from 'react-router-dom';
import completedOrders from "../../Home/icons/clipboard.png";
import orderStatus from "../../Home/icons/status.png"
import { useSelector } from "react-redux";
import { adminGetAllClient, adminGetAllKarigar, adminGetAllOrder, adminGetAllUser,preadminloginusingToken } from "../../../../src/actions";
import { useDispatch } from "react-redux";
import "./AdminHome.css";

function Adminadminhome() {
    //count state
    const [orderCount,setOrderCount]=useState(0);
    const [userCount,setUserCount]=useState(0);
    const [clientCount,setClientCount]=useState(0);
    const [karigarCount,setKarigarCount]=useState(0);
    const [CompletedCount,setCompletedCount]=useState(0);
    const order=useSelector(state=>state.order);
    const client=useSelector(state=>state.client);
    const karigar=useSelector(state=>state.karigar);
    const admin=useSelector(state=>state.admin);
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();




    useEffect(()=>{
      if(admin.success && admin.authenticate){

      }
    },[admin.authenticate])

    useEffect(()=>{
      if(client.data.client && client.data.client.length>0){
        setClientCount(client.data.client.length);
      }
      if(order.data.order && order.data.order.length>0){
        setOrderCount(order.data.order.length);
      }
      if(order.data.order && order.data.order.length>0){
        let count=0;
        order.data.order && order.data.order.map((o) => {
          if(o.orderStatus==6){
            count++;
          }
        })
        setCompletedCount(count);
      }
      if(karigar.data.karigar && karigar.data.karigar.length>0){
        setKarigarCount(karigar.data.karigar.length);
      }
      if(user.data.user && user.data.user.length>0){
        setUserCount(user.data.user.length);
      }
    },[order,client,karigar,user]);

    return (
      <>
      <AdminNavbar />
      <div className="container-fluid bg-adminhome">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 colcenter-adminhome mb-5">
            <div className="parent_box-adminhome"> <div className="title-adminhome mt-5">Admin Home</div></div>
            <div className="parent_box-adminhome">
              <div className="row contentaround-adminhome ">
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminClients" className="link-style">
                    <div className="card box-adminhome">
                      <div className="card-body box-body ">
                        <img className="logo-adminhome" src={Client} alt="New Order" />
                        <h5 className="card-title boxname-adminhome">Clients</h5>
                         ({clientCount})
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminOrders" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={orderStatus}
                          alt="New Order"
                        />
                        <h5 className="card-title boxname-adminhome">
                          Orders
                        </h5>
                        ({orderCount})
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminKarigars" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={Karigar}
                          alt="Edit Order"
                        />
                        <h5 className="card-title boxname-adminhome">Karigar</h5>
                        ({karigarCount})
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminCompletedOrders" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={completedOrders}
                          alt="Track Order"
                        />
                        <h5 className="card-title boxname-adminhome">Completed Order</h5>
                        ({CompletedCount})
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminUsers" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={User}
                          alt="Edit Order"
                        />
                        <h5 className="card-title boxname-adminhome">Users</h5>
                        ({userCount})
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

export default Adminadminhome;
