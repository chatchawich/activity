import React from 'react'
import { Link } from 'react-router-dom'
import { BsPeopleCircle } from 'react-icons/bs'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'

const Profile = () => {
  return (
    <>
      <div className="subtitle has-text-grey">Profile</div>
      <Link className="sidebar-link" to="/">
        <div>
          <BiLogInCircle />
          <span className="sidebar-label">Login</span>
        </div>
      </Link>
      <Link className="sidebar-link" to="/">
        <div>
          <BiLogOutCircle />
          <span className="sidebar-label">Logout</span>
        </div>
      </Link>

      <Link className="sidebar-link" to="/ProfileInfo">
        <div>
          <BsPeopleCircle />
          <span className="sidebar-label">User information</span>
        </div>
      </Link>
    </>
  )
}
export default Profile
