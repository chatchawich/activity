import React from 'react'
import { RiMessage3Fill } from 'react-icons/ri'

const ProfileInfo = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <p className="title">
              ยินดีต้อนรับ "นาย/นางสาว/นาง...ชื่อ-สกุล..."
            </p>

            <div className="tile is-ancestor">
              <div className="tile is-vertical is-7">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <div className="content">
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <center>
                            <p className="title is-4 ">
                              ข้อมูลจากเว็บทรานสคริปกิจกรรม
                            </p>
                          </center>
                          <div className="content">
                            <br />
                            <strong>สถานะสมัครกิจกรรม :</strong> <br />
                            <strong>โทรศัพท์ :</strong> (อับเดต 10 ก.ย. 62){' '}
                            <br />
                            <strong>อีเมล์ :</strong> @psu.ac.th
                          </div>
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <center>
                            <p className="title is-4 ">
                              สรุปข้อมูลสมัครกิจกรรมออนไลน์
                            </p>
                          </center>
                          <div className="content">
                            <br />
                            <strong>กิจกรรมที่เคยสมัคร :</strong> กิจกรรม
                            <br />
                            <strong>แบ่งตามสถานะ :</strong> กิจกรรม
                            <br />
                            ยังไม่ระบุ :
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info is-light">
                  <div className="content">
                    <figure className="image is-3by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png" />
                    </figure>
                    <p className="title is-5">นาย/นางสาว/นาง...ชื่อ-สกุล...</p>
                    <div className="content">
                      <p>
                        รหัสนักศึกษา :
                        <br />
                        สถานะศึกษา :
                        <br />
                        เกิดเมื่อวันที่ : (อายุ ... ปี)
                        <br />
                        สาขาวิชาเอก :
                        <br />
                        คณะ :
                        <br />
                        วิทยาเขต :{' '}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <section className="hero">
              <div className="hero-body">
                <p className="title is-3">กิจกรรมที่เคยสมัครออนไลน์</p>
                <div className="table-container ">
                  <table className="table is-fullwidth">
                    <thead>
                      <tr>
                        <th>ปีการศึกษา</th>
                        <th>กิจกรรม</th>
                        <th>สมัครเมื่อ</th>
                        <th>สถานะเข้าร่วม</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>ภาคการศึกษา/ปีการศึกษา</th>
                        <td>
                          <a href="#" title="-">
                            กิจกรรม/โครงการ ที่เคยสมัคร
                          </a>
                        </td>
                        <td>วว ดด ปป, เวลา</td>
                        <td>ยังไม่ระบุ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section className="hero">
              <div className="hero-body">
                <p className="title is-3">ความเห็นที่เคยตอบ</p>
                <div className="content">
                  <RiMessage3Fill /> นศ สร้างหัวข้อใหม่
                  <a href="#" title="-">
                    [สารพันปัญหา] - เสนอแก้ไข/ปรับปรุง Website
                  </a>
                  · 07 พ.ค. 19:53
                </div>
                <div className="content">
                  <RiMessage3Fill /> นศ สร้างหัวข้อใหม่
                  <a href="#" title="-">
                    [สารพันปัญหา] - เสนอแก้ไข/ปรับปรุง Website
                  </a>
                  · 07 พ.ค. 19:53
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileInfo
