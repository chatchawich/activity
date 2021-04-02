import React from 'react'
import { BsPeopleCircle } from 'react-icons/bs'

const Profile = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <BsPeopleCircle /> &nbsp; Profile
              </a>
              <div className="navbar-dropdown is-right">
                <a
                  href="http://10.128.61.210:3001/Profile/ProfileInfo"
                  title="ProfileInfo"
                  className="navbar-item"
                >
                  ข้อมูลทั่วไป
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Profile
