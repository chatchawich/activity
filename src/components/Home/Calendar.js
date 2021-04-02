import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import { GrSquare } from 'react-icons/gr'
import { ImCalendar } from 'react-icons/im'
import { FaList } from 'react-icons/fa'
import './Calendar.css'
import { Link } from 'react-router-dom'

const Calendar = () => {
  const [events, setEvents] = useState([])
  const [modal, setModal] = useState(false)
  const [event, setEvent] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/event/')
      .then((res) => {
        const now = new Date()

        let data = res.data.map((item) => {
          let color = 'hsl(141, 53%, 53%)'
          if (new Date(item.end) <= now) {
            color = 'hsl(0, 0%, 71%)'
          } else if (now < new Date(item.RegistOpen)) {
            color = 'hsl(217, 71%, 53%)'
          } else if (
            new Date(item.RegistClose) <= now ||
            item.NumberOfApplications <= item.NumberOfApplicants
          ) {
            item.title = '(เต็ม!) ' + item.title
            color = 'hsl(348, 100%, 61%)'
          }
          return { ...item, color }
        })
        setEvents(data)
      })
      .catch((err) => console.log(err))
  }, [])
  const getEventId = ({ event }) => {
    console.log(event)
    setEvent(event)
    setModal(true)
  }
  return (
    <>
      <div className="title is-4">กิจกรรมที่เปิดรับสมัครในระบบ</div>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        timeZone="Asia/Bangkok"
        headerToolbar={{
          start: 'dayGridMonth,listMonth',
          center: 'title',
          end: 'today prev,next',
        }}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: false,
        }}
        dayMaxEventRows={true}
        buttonText={{
          today: [<GrSquare key="Today" />, ' Today'],
          month: [<ImCalendar key="Month" />, ' Month'],
          list: [<FaList key="List" />, ' List'],
        }}
        events={events}
        eventClick={getEventId}
      />
      {event.length !== 0 ? (
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
              <figure className="image is-16by9">
                <img src={event._def.extendedProps.info} title={event.title} />
              </figure>
              <p className="title is-5">รายละเอียด</p>
              <table className="table is-hoverable is-fullwidth">
                <tbody>
                  <tr>
                    <th>
                      ชื่อหน่วยงาน
                      <br />
                      ที่อยู่/สถานที่จัด
                    </th>
                    <td>
                      {event._def.extendedProps.OrganizationName}
                      <br />
                      {event._def.extendedProps.Location}
                    </td>
                  </tr>

                  <tr>
                    <th>
                      วันที่ <br />
                      ช่วงเวลา
                    </th>
                    <td>
                      ถึง ( )
                      <br />
                      {event._def.extendedProps.TimePeriod}
                    </td>
                  </tr>

                  <tr>
                    <th>
                      จำนวนรับสมัคร
                      <br />
                      วันสิ้นสุดรับสมัคร
                    </th>
                    <td>
                      {event._def.extendedProps.NumberOfApplications} คน
                      <br />
                      {event._def.extendedProps.RegistClose} ( )
                    </td>
                  </tr>

                  <tr>
                    <th>
                      ภาคศึกษา/ปีการศึกษา
                      <br />
                      ค่าชั่วโมง ชั่วโมง
                      <br />
                      ประเภทกิจกรรม
                      <br />
                      หมวดกิจกรรม
                    </th>
                    <td>
                      {event._def.extendedProps.SemesterAndAcademicYear}
                      <br />
                      {event._def.extendedProps.HourValue} ชั่วโมง
                      <br />
                      {event._def.extendedProps.ActivityType}
                      <br />
                      {event._def.extendedProps.ActivityCategory}
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <footer className="modal-card-foot">
              <Link
                className="button is-success"
                to={`/event/${event._def.publicId}`}
              >
                สมัครกิจกรรม
              </Link>
              <button className="button" onClick={() => setModal(false)}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Calendar

{
  /*Note สี 
โครงการสิ้นสุดแล้ว สี Gray
ก่อนรับสมัคร สี Navy
ปิดรับสมัคร || เต็มแล้ว สี Red
ยังไม่เต็ม & กำลังรับสมัคร สี Green

*/
}
