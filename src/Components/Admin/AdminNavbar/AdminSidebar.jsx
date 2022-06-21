import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Clients',
    path: '/AdminClients',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Karigars',
    path: '/AdminKarigars',
    icon: <GrIcons.GrAddCircle />,
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