import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'New Order',
    path: '/New Order',
    icon: <GrIcons.GrAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Order',
    path: '/Edit Order',
    icon: <BiIcons.BiEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Track Order',
    path: '/Track Order',
    icon: <AiIcons.AiOutlineFileSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Send Reminder',
    path: '/Send Reminder',
    icon: <MdIcons.MdOutlineNotificationAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Orders',
    path: '/Completed Orders',
    icon: <AiIcons.AiOutlineFileDone/>,
    cName: 'nav-text'
  },
  {
    title: 'Urgent Orders',
    path: '/Urgent Orders',
    icon: <BsIcons.BsExclamationCircle />,
    cName: 'nav-text'
  }
];