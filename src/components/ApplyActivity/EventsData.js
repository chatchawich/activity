import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const EventsData = () => {
  const [event, setEvent] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/event')
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="container is-max-desktop">
        <div className="table-container">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="Activity">
                    <center>กิจกรรม</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="EventDate">
                    <center>วันที่จัดกิจกรรม</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="ActivityCategory">
                    <center>หมวดกิจกรรม</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Apply">
                    <center>สมัคร</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Receive">
                    <center>รับ</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Status">
                    <center>สถานะ</center>
                  </abbr>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>
                  <abbr title="Activity">
                    <center>กิจกรรม</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="EventDate">
                    <center>วันที่จัดกิจกรรม</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="ActivityCategory">
                    <center>หมวดกิจกรรม</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Apply">
                    <center>สมัคร</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Receive">
                    <center>รับ</center>
                  </abbr>
                </th>
                <th>
                  <abbr title="Status">
                    <center>สถานะ</center>
                  </abbr>
                </th>
              </tr>
            </tfoot>

            <tbody>
              {event.map((event) => (
                <tr>
                  <th>
                    <div className="content">
                      <div className={modal ? 'modal is-active' : 'modal'}>
                        <div
                          className="modal-background"
                          onClick={() => setModal(false)}
                        ></div>
                        <div className="modal-card">
                          <header className="modal-card-head">
                            <p className="modal-card-title">{event.title}</p>
                            <button
                              className="delete"
                              aria-label="close"
                              onClick={() => setModal(false)}
                            ></button>
                          </header>
                          <section className="modal-card-body">
                            <div className="field">
                              <label className="label">Name</label>
                              <div className="control">
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="e.g Alex Smith"
                                />
                              </div>
                            </div>
                            <div class="field">
                              <div class="control">
                                <label class="checkbox">
                                  <input type="checkbox" />I agree to get you
                                  the gift you pest...
                                </label>
                              </div>
                            </div>
                          </section>
                          <footer className="modal-card-foot">
                            <button className="button is-success">
                              Save changes
                            </button>
                            <button
                              className="button"
                              onClick={() => setModal(false)}
                            >
                              Cancel
                            </button>
                          </footer>
                        </div>
                      </div>

                      <button
                        onClick={event.title}
                        className="button is-small is-info"
                      >
                        {event.title}
                      </button>
                    </div>
                  </th>
                  <td>
                    {event.start} ถึง {event.end}
                  </td>
                  <td>
                    {event.ActivityCategory}({event.HourValue} ชั่วโมง)
                  </td>
                  <td>{event.NumberOfApplications}</td>
                  <td>{event.NumberOfApplicants}</td>
                  <td>{event.RegistClose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default EventsData
