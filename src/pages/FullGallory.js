import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import Footer from '../components/Footer/Footer.js'

const FullGallory = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>
              <FaCameraRetro /> ภาพกิจกรรม
            </h3>
          </strong>
        </div>
      </div>
      <section className="hero">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="content">{/*Card */}</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default FullGallory
