import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SUlogo from '../img/องค์การ.png'
import SUHlogo from '../img/sulogo.png'
import Footer from '../components/Footer/Footer.js'
import { Link } from 'react-router-dom'

const StudentUnion = () => {
  const [so, setSo] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/so/')
      .then((result) => setSo(result.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div className="container is-max-desktop">
        <div className="content">
          <strong>
            <h3>องค์การบริหาร องค์การนักศึกษา</h3>
          </strong>
        </div>
      </div>
      <section className="hero">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-two-fifths">
              <center>
                <div className="logo">
                  <img src={SUHlogo} alt="Website Logo" width="180" />
                </div>
                <br />
                <div className="logo">
                  <img src={SUlogo} alt="Website Logo" width="220" />
                </div>
              </center>
            </div>
            <div className="column is-three-fifths">
              <p className="title is-5">องค์การบริหาร องค์การนักศึกษา</p>
              <p>
                เป็นองค์กรนักศึกษาในมหาวิทยาลัยสงขลานครินทร์
                มีบทบาทหน้าที่เป็นศูนย์กลางของนักศึกษาในการดำเนินการจัดกิจกรรมต่างๆ
                ของมหาวิทยาลัย
                และมีหน้าที่รับผิดชอบดูแลจัดสรรงบประมาณแก่กลุ่มชมรมนักศึกษา 4
                ฝ่าย
                รวมถึงกิจกรรมส่วนกลางของมหาวิทยาลัยร่วมมือระหว่างกองกิจกการนักศึกษา
                และสโมสรนักศึกษาประจำคณะต่างๆ ในมหาวิทยาลัย
                <br />
              </p>
              <p>
                <a href="https://www.facebook.com/psusu.hatyai">
                  <strong> Facebook องค์การบริหาร องค์การนักศึกษา</strong>
                  https://www.facebook.com/psusu.hatyai
                </a>
                <br />
                <strong>โทร</strong> : 074-282955 (ภายใน 2955) <br />
                <strong>สถานที่ทำการ : </strong>องค์การบริหาร องค์การนักศึกษา
                ชั้น 2 อาคารกิจกรรมนักศึกษา
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container is-max-desktop">
        <section className="hero">
          <div className="hero-body">
            <p className="title is-4">คณะบริหารงานดังต่อไปนี้</p>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  {so.map((item) => (
                    <Link
                      className="button is-medium is-fullwidth is-link is-light"
                      title={item.id}
                      to={`/`}
                    >
                      <div className="logo">
                        <img src={SUlogo} alt="Website Logo" width="120" />
                      </div>
                      ปีการศึกษา {item.id}
                    </Link>
                  ))}
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default StudentUnion
