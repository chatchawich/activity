import React from 'react'

const AddActivity = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <section className="hero">
          <div className="hero-body">
            <p className="title is-4">Add Activity</p>
            <p className="subtitle is-5">รับสมัครกิจกรรม</p>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Project / Activity Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="title"
                      placeholder="ชื่อโครงการ / กิจกรรม"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Organization name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="OrganizationName"
                      placeholder="ชื่อหน่วยงาน"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Location</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="Location"
                      placeholder="ที่อยู่ / สถานที่จัด"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Date of Arrangement</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="help is-danger">วันเริ่มโครงการ</p>
                  <p className="control is-expanded ">
                    <input
                      className="input"
                      name="start"
                      placeholder="วันเริ่มโครงการ"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="help is-danger">วันสิ้นสุดโครงการ</p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="end"
                      placeholder="วันสิ้นสุดโครงการ"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Time period</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="TimePeriod"
                      placeholder="ช่วงเวลา"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">จำนวนนักศึกษาเข้าร่วมโครงการ</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="help is-danger">จำนวนนักศึกษา</p>
                  <p className="control is-expanded ">
                    <input
                      className="input"
                      name="NumberOfApplications"
                      placeholder="จำนวนนักศึกษา"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="help is-danger">จำนวนนักศึกษา สำรอง</p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="NumberOfApplicationsBackup"
                      placeholder="จำนวนนักศึกษา สำรอง"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Regist open / close</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="help is-danger">วันเปิดรับสมัคร</p>
                  <p className="control is-expanded ">
                    <input
                      className="input"
                      name="RegistOpen"
                      placeholder="วันเปิดรับสมัคร"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="help is-danger">วันสิ้นสุดรับสมัคร</p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="RegistClose"
                      placeholder="วันสิ้นสุดรับสมัคร"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Semester and Academic year</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="SemesterAndAcademicYear"
                      placeholder="ภาคศึกษา / ปีการศึกษา"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Hour value</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="HourValue"
                      placeholder="ค่าชั่วโมง"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">กิจกรรมมหาวิทยาลัย</label>
              </div>
              <div className="field-body">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>หลักสูตร</th>
                      <th>หน่วยชั่วโมง</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <div>
                          ชั้นปีที่ 1 ขั้นเตรียมความพร้อม
                          <br />
                          Freshman Preparation (Learner Awareness)
                        </div>
                      </th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y101 หลักสูตร Freshmen
                            Orientation
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y102
                            หลักสูตรการเตรียมความพร้อมการเรียนแบบวิถีอุดมศึกษา
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y103
                            หลักสูตรการเตรียมความพร้อมอยู่ร่วมในโลกสังคมพหุวัฒนธรรม
                          </label>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y101h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y102h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y103h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          ชั้นปีที่ 2 ขั้นเรียนรู้ชุมชน เรียนรู้สังคม
                          <br />
                          Community and Cultural Engagement for Sophomores
                        </div>
                      </th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y201
                            หลักสูตรการเข้าสู่ชุมชนและการเรียนรู้ชุมชน
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y202
                            หลักสูตรพัฒนาภาวะผู้นำ
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y203
                            หลักสูตรทักษะการใช้ชีวิต
                          </label>
                        </div>
                      </td>

                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y201h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y202h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y203h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          ชั้นปีที่ 3 ขั้นสัมผัสโลกกว้าง
                          <br />
                          Global Discovery for Juniors
                        </div>
                      </th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y301
                            หลักสูตรการเป็นพลเมืองโลก (Civic Education)
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y302
                            หลักสูตรส่งเสริมการเคลื่อนย้ายนักศึกษา (Student
                            Mobility)
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y303
                            หลักสูตรเสริมสร้างสมรรถนะสากล
                          </label>
                        </div>
                      </td>

                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y301h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y302h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y303h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          ชั้นปีที่ 4 ขั้นพร้อมสู่วัยทำงาน
                          <br />
                          Job Orientation Course for Seniors
                        </div>
                      </th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y401
                            หลักสูตรทักษะการเป็นผู้ประกอบการ
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> Y402
                            หลักสูตรเตรียมความพร้อมสู่โลกการทำงาน
                          </label>
                        </div>
                      </td>

                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y401h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="Y402h"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">กิจกรรมเลือกเข้าร่วม</label>
              </div>
              <div className="field-body">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>หลักสูตร</th>
                      <th>หน่วยชั่วโมง</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" />{' '}
                            กิจกรรมเสริมสร้างจิตสำนึกสาธารณะและบำเพ็ญประโยชน์
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_1"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" />{' '}
                            กิจกรรมเสริมสร้างความซื่อสัตย์มีวินัย
                            คุณธรรมจริยธรรม
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_2"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" /> กิจกรรมเสริมสร้างสติปัญญา
                            ทักษะทางสังคม ทักษะวิชาการ และวิชาชีพ
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_3"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" />{' '}
                            กิจกรรมเสริมสร้างและพัฒนาสุขภาพ และนันทนการ
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_4"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" />{' '}
                            กิจกรรมส่งเสริมศิลปวัฒนธรรมและศาสนา
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_5"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" />{' '}
                            กิจกรรมเสริมสร้างความเป็นประชาธิปไตย
                            และความภูมิใจในสถาบัน
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_6"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        <div>
                          <label className="checkbox">
                            <input type="checkbox" />{' '}
                            กิจกรรมส่งเสริมความเป็นนานาชาติและเสริมสร้างสมรรถนะสากล
                          </label>
                        </div>
                        <br />
                      </th>
                      <td>
                        <div>
                          <p className="control">
                            <input
                              className="input"
                              name="activity_7"
                              type="Number"
                              placeholder="หน่วยชั่วโมง"
                            />
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">YouTube URL</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      name="youTubeURL"
                      placeholder="Link"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Add files</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="file is-info has-name">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-label">Info file…</span>
                      </span>
                      <span className="file-name">File name</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">More details</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="textDetails"
                      placeholder="รายละเอียดเพิ่มเติม"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field is-horizontal">
              <div className="field-label">{/* Left empty for spacing */}</div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default AddActivity
