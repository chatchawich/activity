import React from 'react'
import logoSD from '../img/StudentDevelopmentTask.gif'
import Footer from '../components/Footer/Footer.js'

const ActivitySchedule = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ตารางกิจกรรม ประจำปีการศึกษา</h3>
          </strong>
        </div>
      </div>
      <section className="hero is-small is-link">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="column is-four-fifths is-offset-1 is-mobile">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <div className="columns">
                      <div className="column">
                        <div className="logoSD">
                          <img
                            src={logoSD}
                            alt="Logo SD on ActivitySchedule"
                            width="320"
                          />
                        </div>
                      </div>
                      <div className="column is-three-fifths">
                        <section className="section">
                          <div className="content">
                            <strong>
                              <h3>ตารางกิจกรรม ประจำปีการศึกษา</h3>
                            </strong>
                          </div>
                          <ul>
                            <li>
                              <a href="#">ปีการศึกษา 2564</a>
                            </li>
                            <li>
                              <a href="#">ปีการศึกษา 2561</a>
                            </li>
                            <li>
                              <a href="#">ปีการศึกษา 2559</a>
                            </li>
                            <li>
                              <a href="#">ปีการศึกษา 2558</a>
                            </li>
                          </ul>
                        </section>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ActivitySchedule
