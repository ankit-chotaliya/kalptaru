import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import Client from "../AdminHome/icons/client.ico"
import Karigar from "../AdminHome/icons/client.ico"

export const SidebarData = [
  {
    title: 'Clients',
    path: '/AdminClients',
    icon: <img  src={Client} style={{height:"20px",width:"20px"}} />,
    cName: 'nav-text'
  },
  {
    title: 'Karigars',
    path: '/AdminKarigars',
    icon: <img src={Karigar} style={{height:"20px",width:"20px"}} />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/AdminOrders',
    icon: <BiIcons.BiEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/AdminUsers',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text'
  }
  
];