import React from 'react'
import logoPSU from '/Users/chatchawichchaihong/Desktop/sdt-psu/src/img/PSU_EN-H.png'
import logoEILA from '/Users/chatchawichchaihong/Desktop/sdt-psu/src/img/EILA_Banner.png'
import logoSDT from '/Users/chatchawichchaihong/Desktop/sdt-psu/src/img/PSU_กองพัฒนานักศึกษา.png'
import logoLMS from '/Users/chatchawichchaihong/Desktop/sdt-psu/src/img/PSU_LMS.png'

const RelatedSites = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <center>
              <a href="https://www.psu.ac.th/th/">
                <div className="logo">
                  <img src={logoPSU} alt="Website Logo" width="170" />
                </div>
                <p className="title is-5 ">Prince of Songkla University</p>
                <p className="subtitle is-6">มหาวิทยาลัย สงขลานครินทร์</p>
              </a>
            </center>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <center>
              <a href="https://eila.psu.ac.th">
                <div className="logo">
                  <img src={logoEILA} alt="Website Logo" width="170" />
                </div>
                <p className="title is-5 ">
                  Education and Innovative Learning Academy (EILA)
                </p>
                <p className="subtitle is-6">
                  สำนักการศึกษาและนวัตกรรมการเรียนรู้
                </p>
              </a>
            </center>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <center>
              <a href="https://student.psu.ac.th/web/home">
                <div className="logo">
                  <img src={logoSDT} alt="Website Logo" width="180" />
                </div>
                <p className="title is-5 ">
                  Division of Student Development and Alumni
                </p>
                <p className="subtitle is-6">
                  กองพัฒนานักศึกษาและศิษย์เก่าสัมพันธ์
                </p>
              </a>
            </center>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <center>
              <a href="https://lms2.psu.ac.th">
                <div className="logo">
                  <img src={logoLMS} alt="Website Logo" width="170" />
                </div>
                <p className="title is-5 ">LMS2@PSU is operated by EILA.</p>
                <p className="subtitle is-6">
                  ระบบการจัดการเรียนการสอน มหาวิทยาลัยสงขลานครินทร์
                </p>
              </a>
            </center>
          </article>
        </div>
      </div>
    </>
  )
}
export default RelatedSites
