import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import SideBarData from './SideBarData';
import './NavBar.css';
import { IconContext } from 'react-icons';

const NavBar = () => {
  const [sidebar, setsidebar] = useState(false);

  const showSideBar = () => setsidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
          <Link to="/" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />{' '}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSideBar} >
            <li className="nav-toggle">
              <Link to="/">
                {' '}
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((items, index) => {
              return (
                <li key={index} className={items.cName}>
                  <Link to={items.path}>
                    {items.icon}
                    <span>{items.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
