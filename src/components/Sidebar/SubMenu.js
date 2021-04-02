import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { SidebarData } from './SidebarData'

const SubMenu = ({ setSidebar }) => {
  const [subNav, setSubNav] = useState(null)
  const [path, setPath] = useState(null)

  return (
    <>
      {SidebarData.map((item, index) => (
        <div key={index}>
          <Link
            className={
              !item.subNav && path === item.path
                ? 'sidebar-link active'
                : 'sidebar-link'
            }
            to={item.subNav ? '#' : item.path}
            onClick={
              item.subNav
                ? () => setSubNav(subNav !== item.path ? item.path : null)
                : () => {
                    setPath(item.path)
                    setSubNav(null)
                    setSidebar(false)
                  }
            }
          >
            <div>
              {item.icon}
              <span className="sidebar-label">{item.title}</span>
            </div>
            <div>
              {item.subNav && subNav === item.path ? (
                <RiArrowUpSFill />
              ) : item.subNav ? (
                <RiArrowDownSFill />
              ) : null}
            </div>
          </Link>
          {subNav === item.path &&
            item.subNav.map((item, index) => (
              <div key={index}>
                {item.redirect ? (
                  <a href={item.path} className="dropdown-link">
                    {item.icon}
                    <span className="sidebar-label">{item.title}</span>
                  </a>
                ) : (
                  <Link
                    className={
                      path === item.path
                        ? 'dropdown-link active'
                        : 'dropdown-link'
                    }
                    to={item.path}
                    onClick={() => {
                      setPath(item.path)
                      setSidebar(false)
                    }}
                  >
                    {item.icon}
                    <span className="sidebar-label">{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
        </div>
      ))}
    </>
  )
}

export default SubMenu

{
  /*
<div className="login">
        <ul class="tablogin">
        <li><a href="javascript:void(0);" id="logintab1" onClick="return changetab_login(1);" class="log_tab action_tab">นักศึกษาเข้าระบบ</a></li>
        <li><a href="javascript:void(0);" id="logintab2" onClick="return changetab_login(2);" class="log_tab">สำหรับเจ้าหน้าที่</a></li>
      </ul>
      //  <span className="log_tab">ลงชื่อใช้งาน (Login)</span>
      <div className="signin-box">

      //  <h2 id="label_login">นักศึกษาลงชื่อใช้งาน<strong></strong></h2>

        <h2 id="label_login"><strong /></h2>
        <form action="/?q=checkLogin&index=1" method="post" name="form_login" autoComplete="off">
          <strong className="email-label">ชื่อผู้ใช้</strong>
          <input type="text" spellCheck="false" name="username" id="username" autoComplete="off" placeholder="username" defaultValue style={{width: '250px'}} />
          <strong className="passwd-label">รหัสผ่าน</strong>
          <input type="password" name="password" id="password" autoComplete="off" placeholder="password" style={{width: '250px'}} />
          <input type="submit" className="g-button g-button-submit" name="signIn" id="signIn" defaultValue="เข้าสู่ระบบ" style={{marginTop: '10px', marginLeft: '170px'}} />
          <input type="hidden" name="url_login" id="url_login" defaultValue="https://activity.psu.ac.th/" />
        </form>
      </div>
    </div>


      <input
        type="button"
        className="btn btn-danger"
        style={{ float: 'right', marginRight: '10px' }}
        onclick="window.location.href='/?q=logout';"
        defaultValue="ออกจากระบบ"
      /> 
*/
}
