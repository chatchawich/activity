import React from 'react'
import Announce from '../components/Announcement/Announce.js'
import Footer from '../components/Footer/Footer.js'

const Announcement = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ประกาศ-ระเบียบ</h3>
          </strong>
        </div>
        <Announce />
      </div>

      <Footer />
    </>
  )
}

export default Announcement
