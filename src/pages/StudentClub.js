import React from 'react'
import ClubVolun from '../components/Club/ClubVolunteer.js'
import ArtsAndCulture from '../components/Club/ArtsAndCulture.js'
import Sport from '../components/Club/Sport.js'
import Academic from '../components/Club/Academic.js'
import Footer from '../components/Footer/Footer.js'

const StudentClub = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ชมรมนักศึกษา</h3>
          </strong>
        </div>
      </div>
      <section className="hero">
        <div className="hero-body">
          <p className="title is-5">
            ชมรมในสังกัดองค์การบริหาร องค์การนักศึกษา
          </p>
          <p className="subtitle">ซึ่งแบ่งออกเป็น 4 ฝ่าย ดังนี้</p>
          <div className="tile is-parent">
            <article className="tile is-child notification is-link">
              <div className="content">
                <div className="tile is-ancestor">
                  <div className="tile is-vertical is-8">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child box">
                          <p className="title is-4">ชมรมด้านบำเพ็ญประโยชน์</p>
                          <div className="content">
                            <ClubVolun />
                          </div>
                        </article>
                        <article className="tile is-child box">
                          <p className="title is-4">ชมรมด้านวิชาการ</p>
                          <div className="columns is-multiline">
                            <div className="column">
                              <Academic />
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child box">
                          <p className="title is-4">ชมรมด้านศิลปวัฒนธรรม</p>
                          <div className="content">
                            <ArtsAndCulture />
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <div className="content">
                        <p className="title is-4">ชมรมด้านกีฬา</p>
                        <div className="content">
                          <Sport />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default StudentClub
