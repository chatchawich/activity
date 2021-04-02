import React from 'react'
import { MdComment } from 'react-icons/md'
import { FaReply } from 'react-icons/fa'
import { HiOutlineViewGridAdd, HiNewspaper } from 'react-icons/hi'
import { BsFillPeopleFill } from 'react-icons/bs'

import AddActivity from '../components/Admin/AddActivity.js'
import PressReleases from '../components/Admin/PressReleases.js'
import StudentOrganizationDirectory from '../components/Admin/StudentOrganizationDirectory.js'
import Footer from '../components/Footer/Footer.js'

const Admin = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>Admin</h3>
          </strong>
        </div>
      </div>
      <section className="hero">
        <div className="hero-body">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent is-vertical is-5">
                  <article className="tile is-child notification is-link is-light">
                    <p className="title">
                      <HiOutlineViewGridAdd /> Add Activity
                    </p>
                    <p className="subtitle">รับสมัครกิจกรรม</p>
                    <div className="buttons level-right">
                      <a
                        href="http://10.128.61.101:3001/Admin/AddActivity"
                        title="Admin/AddActivity"
                      >
                        <button className="button is-info is-light">
                          ไปยังหน้าแก้ไข
                        </button>
                      </a>
                    </div>
                  </article>
                  <article className="tile is-child notification is-info">
                    <p className="title">
                      <HiNewspaper /> Press releases
                    </p>
                    <p className="subtitle">ประชาสัมพันธ์ ข่าวสาร</p>
                    <div className="buttons level-right">
                      <a
                        href="http://10.128.61.101:3001/Admin/PressReleases"
                        title="Admin/PressReleases"
                      >
                        <button className="button is-info is-light">
                          ไปยังหน้าแก้ไข
                        </button>
                      </a>
                    </div>
                  </article>
                  <article className="tile is-child notification is-link">
                    <p className="title">
                      <BsFillPeopleFill /> Student Organization Directory
                    </p>
                    <p className="subtitle">ผังทำเนียบองค์การนักศึกษา</p>
                    <div className="buttons level-right">
                      <a
                        href="http://10.128.61.101:3001/Admin/StudentOrganizationDirectory"
                        title="Admin/StudentOrganizationDirectory"
                      >
                        <button className="button is-info is-light">
                          ไปยังหน้าแก้ไข
                        </button>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title">การทำงานครั้งล่าสุด</p>

                    <div className="table-container">
                      <table className="table is-hoverable is-fullwidth">
                        <tbody>
                          <tr>
                            <th>
                              <a href=" " title=" ">
                                <HiOutlineViewGridAdd /> #หัวข้อล่าสุด
                              </a>
                              <p>วัน เดือน ปี</p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <a href=" " title=" ">
                                <HiOutlineViewGridAdd /> #หัวข้อล่าสุด
                              </a>
                              <p>วัน เดือน ปี</p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <a href=" " title=" ">
                                <HiNewspaper /> #หัวข้อล่าสุด
                              </a>
                              <p>วัน เดือน ปี</p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <a href=" " title=" ">
                                <HiNewspaper /> #หัวข้อล่าสุด
                              </a>
                              <p>วัน เดือน ปี</p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <a href=" " title=" ">
                                <BsFillPeopleFill /> #หัวข้อล่าสุด
                              </a>
                              <p>วัน เดือน ปี</p>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Admin
