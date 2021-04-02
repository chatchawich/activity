import React from 'react'
import QnAPages from '../components/QnA/QnAPages.js'
import QnARecent from '../components/QnA/QnARecent'
import QnAData from '../components/QnA/QnAData'
import Footer from '../components/Footer/Footer.js'

const QnA = () => {
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>ถาม-ตอบ</h3>
          </strong>
        </div>
      </div>
      <section className="hero">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="columns">
              <div className="column is-7">
                <article className="message is-link">
                  <div className="message-header">
                    การเทียบโอนกิจกรรม กรณีย้ายวิทยาเขต
                  </div>
                  <div className="message-body">
                    นักศึกษาสามารถทำการเทียบโอนได้โดยไปยื่นคำร้องขอเทียบโอนกิจกรรมได้ที่งานกิจกรรมนักศึกษา
                    โดยกิจกรรมจะได้รับการเทียบโอนจำนวนกิจกรรมทั้งหมด
                    ทั้งนี้ต้องแนบเอกสารรายละเอียดกิจกรรมทั้งหมดที่โอนย้ายมาจากวิทยาเขตอื่นด้วย
                  </div>
                </article>
              </div>
              <div className="column" />
            </div>
            <div className="columns">
              <div className="column" />
              <div className="column is-7">
                <article className="message is-info">
                  <div className="message-header">
                    การเทียบโอนกิจกรรม กรณีลาออก ตกออก แล้วเข้าเรียนใหม่
                  </div>
                  <div className="message-body">
                    นักศึกษาสามารถทำการเทียบโอนได้โดยไปยื่นคำร้องขอเทียบโอนกิจกรรมได้ที่งานกิจกรรมนักศึกษา
                    โดยกิจกรรมเดิม จะได้รับการเทียบโอนทั้งหมด
                  </div>
                </article>
              </div>
            </div>
            <div className="columns">
              <div className="column is-7">
                <article className="message is-link">
                  <div className="message-header">
                    มีข้อสงสัยเรื่องทรานสคริป สามารถติดต่อได้ที่ไหน?
                  </div>
                  <div className="message-body">
                    งานกิจกรรมนักศึกษา กองกิจการนักศึกษา ชั้น 2
                    อาคารสำนักงานอธิการบดี (อยู่ด้านหลังลานพระบิดา
                    หรือธนาคารไทยพาณิชย์)
                  </div>
                </article>
              </div>
              <div className="column" />
            </div>
            <div className="columns">
              <div className="column" />
              <div className="column is-7">
                <article className="message is-info">
                  <div className="message-header">
                    ตรวจสอบชั่วโมงกิจกรรมนักศึกษา
                  </div>
                  <div className="message-body">
                    เว็บไซต์ https://transcript.psu.ac.th
                    <br />
                    <br />
                    <strong>และ ระบบเก่า (ก่อนระหัส 60)</strong> <br />
                    เว็บไซต์ http://student.psu.ac.th/TS234/
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="content">
              <strong>
                <h3>สารพันปัญหา</h3>
              </strong>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-fifths">
              <QnAPages />
              <QnAData />
              <QnAPages />
            </div>
            <div className="column">
              <QnARecent />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default QnA
