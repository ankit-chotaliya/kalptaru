import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'New Order',
    path: '/create',
    icon: <GrIcons.GrAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Order',
    path: '/EditOrder',
    icon: <BiIcons.BiEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Track Order',
    path: '/TrackOrder',
    icon: <AiIcons.AiOutlineFileSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Send Reminder',
    path: '/SendReminder',
    icon: <MdIcons.MdOutlineNotificationAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Delivery',
    path: '/CompletedOrders',
    icon: <AiIcons.AiOutlineFileDone/>,
    cName: 'nav-text'
  },
  {
    title: 'Urgent Orders',
    path: '/UrgentOrders',
    icon: <BsIcons.BsExclamationCircle />,
    cName: 'nav-text'
  }
];