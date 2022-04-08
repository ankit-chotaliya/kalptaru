import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './Navbar.css';
import logo from './logo.png';
import { IconContext } from 'react-icons';

const NavBar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black', hight: '35px', width: '35px' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="container">
            <img className='m-2' src={logo} />
            <p className='nav_logotext'>Shree Kalptaru</p>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <hr></hr>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={item.redtext}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <hr></hr>
            <li className='nav-text'>
              <Link to={'/'}>
                <IoIcons.IoSettingsOutline />
                <span>Settings</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link to={'/'}  >
                <FiIcons.FiLogOut style={{ color: 'red' }} />
                <span style={{ color: 'red' }}>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar