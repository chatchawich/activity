import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import SubMenu from './SubMenu'
import Profile from '../Profile/Profile'
import logo from '/Users/chatchawichchaihong/Desktop/sdt-psu/src/img/PSU_กองพัฒนานักศึกษา.png'

const Sidebar = ({ sidebar, setSidebar }) => {
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      <div className="nav">
        <Link to="#" className="nav-icon" onClick={showSidebar}>
          {sidebar ? <AiOutlineClose /> : <FaBars />}
        </Link>
        <div className="logo">
          <img src={logo} alt="Website Logo" width="120" />
        </div>
        <div></div>
      </div>
      <nav className={sidebar ? 'sidebar-nav active' : 'sidebar-nav'}>
        <div className="sidebar-wrap">
          <SubMenu setSidebar={setSidebar} />
          <hr />
          <Profile />
        </div>
      </nav>
      {sidebar ? <div className="overlay" onClick={showSidebar}></div> : ''}
    </div>
  )
}

export default Sidebar
