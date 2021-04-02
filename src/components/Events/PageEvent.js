import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const PageEvent = (props) => {
  const [event, setEvent] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/event/' + props.match.params.id)
      .then((result) => setEvent(result.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div>{console.log(props)}</div>
      <section className="hero">
        <div className="hero-body">
          <p className="title">{event.title}</p>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile is-parent">
                <article className="tile is-child notification is-info is-light">
                  <p className="title is-5">รายละเอียด</p>
                  <div className="content">
                    <div className="table-container is-fullwidth">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>ชื่อหน่วยงาน</th>
                            <td>{event.OrganizationName}</td>
                          </tr>
                          <tr>
                            <th>ที่อยู่/สถานที่จัด</th>
                            <td>{event.Location}</td>
                          </tr>
                          <tr>
                            <th>วันที่</th>
                            <td>ถึง ( )</td>
                          </tr>
                          <tr>
                            <th> ช่วงเวลา</th>
                            <td>{event.TimePeriod}</td>
                          </tr>
                          <tr>
                            <th> จำนวนรับสมัคร</th>
                            <td>{event.NumberOfApplications}</td>
                          </tr>
                          <tr>
                            <th>วันสิ้นสุดรับสมัคร</th>
                            <td>{event.RegistClose}</td>
                          </tr>
                          <tr>
                            <th>ภาคศึกษา/ปีการศึกษา</th>
                            <td>{event.SemesterAndAcademicYear}</td>
                          </tr>
                          <tr>
                            <th>ค่าชั่วโมง ชั่วโมง</th>
                            <td>{event.HourValue} ชั่วโมง</td>
                          </tr>
                          <tr>
                            <th>ประเภทกิจกรรม</th>
                            <td>{event.ActivityType}</td>
                          </tr>
                          <tr>
                            <th>หมวดกิจกรรม</th>
                            <td>{event.ActivityCategory}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <div className="content">
                  <p className="title is-4">ข้อมูลการสมัคร</p>
                  <div className="content">
                    <div className="table-container is-fullwidth">
                      <div className="box">
                        <table className="table is-narrow">
                          <tbody>
                            <tr>
                              <th>
                                <center>สมัคร</center>
                              </th>
                              <th>
                                <center>จำนวนรับ</center>
                              </th>
                            </tr>
                            <tr>
                              <td>
                                <center>... คน</center>
                              </td>
                              <td>
                                <center>... คน</center>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="table-container">
                      <strong>ข้อมูลแยกประเภท</strong>
                      <br />
                      <table className="tabless">
                        <tbody>
                          <tr>
                            <th>รวมทั้งหมด</th>
                            <td>...</td>
                          </tr>
                          <tr>
                            <td>
                              เพศหญิง
                              <br />
                              เพศชาย
                            </td>
                            <td>
                              ...
                              <br />
                              ...
                            </td>
                          </tr>
                          <tr>
                            <th>แบ่งตามชั้นปี</th>
                            <td></td>
                          </tr>
                          <tr>
                            <td>รหัส ...</td>
                            <td>...</td>
                          </tr>
                          <tr>
                            <th>รวม ... คณะ</th>
                            <td></td>
                          </tr>
                          <tr>
                            <td>
                              คณะ ... <br />
                              <br />
                            </td>
                            <td>...</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageEvent
