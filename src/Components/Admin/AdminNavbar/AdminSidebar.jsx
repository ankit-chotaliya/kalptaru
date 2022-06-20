import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Clients',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Karigars',
    path: '/create',
    icon: <GrIcons.GrAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/EditOrder',
    icon: <BiIcons.BiEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/TrackOrder',
    icon: <AiIcons.AiOutlineFileSearch />,
    cName: 'nav-text'
  }
  
];