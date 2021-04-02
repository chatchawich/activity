import React from 'react'
import CountUp from 'react-countup'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoDuplicateSharp } from 'react-icons/io5'
import { FaEye, FaSmileWink } from 'react-icons/fa'
import { BsPersonPlusFill } from 'react-icons/bs'

const Counter = () => {
  const [dataCount, setdataCount] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/dataCount')
      .then((res) => setdataCount(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <section className="hero  is-info">
        <div className="hero-body">
          {dataCount.map((item, index) => (
            <div className="columns is-multiline" key={index}>
              <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
                <center>
                  <p className="title is-3">
                    <IoDuplicateSharp />
                  </p>
                  <p className="title is-3 is-spaced">
                    <CountUp
                      delay={0}
                      start={0}
                      end={+item.TotalNumberOfActivity}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </p>
                  <p className="title is-5">จำนวน</p>
                  กิจกรรม
                </center>
              </div>
              <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
                <center>
                  <p className="title is-3">
                    <FaEye />
                  </p>
                  <p className="title is-3 is-spaced">
                    <CountUp delay={0} start={0} end={+item.NumberOfVisitors}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </p>
                  <p className="title is-5">จำนวน</p>
                  จำนวนผู้เข้าชม
                </center>
              </div>
              <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
                <center>
                  <p className="title is-3">
                    <BsPersonPlusFill />
                  </p>
                  <p className="title is-3 is-spaced">
                    <CountUp
                      delay={0}
                      start={0}
                      end={+item.NumberStudentsApplyForActivity}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </p>
                  <p className="title is-5">จำนวน</p>
                  นักศึกษาสมัครกิจกรรม
                </center>
              </div>
              <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
                <center>
                  <p className="title is-3">
                    <FaSmileWink />
                  </p>
                  <p className="title is-3 is-spaced">
                    <CountUp delay={0} start={0} end={+item.NumberStudent}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </p>
                  <p className="title is-5">จำนวน</p>
                  นักศึกษา
                </center>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Counter
