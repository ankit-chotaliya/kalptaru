import React, { useState , useEffect , useRef} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, statusOffline } from '../../actions/user.action';
import './NavBar.css';
import logo from './logo.png';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const user=useSelector(state=>state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const showSidebar = () => setSidebar(!sidebar);

  let useClickOutSide = (handler)=>{

    let click = useRef();

    useEffect(()=>{

      let mayBeHandler = (Event) => {

        if(click.current && !click.current.contains(Event.target))
        {
          handler();
        }
      };

      document.addEventListener("mousedown", mayBeHandler);

      return ()=>{
        document.addEventListener("mousedown", mayBeHandler);
      }
  
    });

    return click;
  }


  let click = useClickOutSide(()=>{

      setSidebar(false);
  });

  const handleLogout=(e)=>{
    e.preventDefault();
    const dataObj={
      userId:user.data.user._id
    }
    dispatch(statusOffline(dataObj))
    dispatch(logout()).then(()=>{
        navigate('/login');
    }).catch(()=>{
        console.log("err here");
    });
    //setidToast(idToast+1);
}

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
        <nav ref = {click} className={sidebar ? 'nav-menu active' : 'nav-menu'} id="navMenu" style={{zIndex:998}}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <hr className='first_hr' style={{ 'marginTop': '15px'}}></hr>
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
              <Link to={'/Settings'}>
                <IoIcons.IoSettingsOutline />
                <span>Settings</span>
              </Link>
            </li>
            <li className='nav-text'>
              <Link  onClick={handleLogout} to={'/login'}>
                <FiIcons.FiLogOut style={{ color: 'red'}} />
                <span className='nav_logout'>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;