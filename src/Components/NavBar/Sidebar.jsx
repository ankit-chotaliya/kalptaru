import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'New Order',
    path: '/',
    icon: <GrIcons.GrAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Order',
    path: '/reports',
    icon: <BiIcons.BiEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Track Order',
    path: '/products',
    icon: <AiIcons.AiOutlineFileSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Send Reminder',
    path: '/team',
    icon: <MdIcons.MdOutlineNotificationAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Orders',
    path: '/messages',
    icon: <AiIcons.AiOutlineFileDone/>,
    cName: 'nav-text'
  },
  {
    title: 'Urgent Orders',
    path: '/support',
    icon: <BsIcons.BsExclamationCircle />,
    cName: 'nav-text'
  }
];