import React from 'react'
import Footer from '../components/Footer/Footer.js'

const StudentServices = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ตารางการใช้ห้องประชุมศรีตรัง</h3>
          </strong>
        </div>
        <article className="tile is-child notification is-link is-light">
          <div className="content">
            <figure className="is-16by9">
              <iframe
                className="has-ratio"
                width="100%"
                height={500}
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FBangkok&amp;src=bTdrdjN0bGtqNWFuaWxvZmJlZDEya2w5bzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showCalendars=1&amp;hl=th"
                frameBorder={0}
                allowFullScreen
              />
            </figure>
            {/*
            <iframe
              frameborder="0"
              scrolling="no"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FBangkok&amp;src=bTdrdjN0bGtqNWFuaWxvZmJlZDEya2w5bzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showCalendars=1&amp;hl=th"
              position="relative"
              overflow="hidden"
              padding-top="100%" 
              position="absolute"
              top="0"
              left="0"
              bottom="0"
              right="0"
              width="100%"
              height="500"
            ></iframe>  */}
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}

export default StudentServices
