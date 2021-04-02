import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../Home/Tabs.personals.css'

const BodyStudentUnion = () => {
  const [SO, setSO] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/SO')
      .then((res) => setSO(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div className="container is-max-desktop">
        <center>
          <div className="columns is-multiline has-centered">
            {SO.map((item, index) => (
              <div
                className="column is-full-mobile is-half-tablet is-one-third-desktop"
                key={index}
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src={item.img} alt={item.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <section className="hero is-small">
                      <div className="hero-body">
                        <p className="title is-4">
                          <b>{item.name}</b>
                        </p>
                        <p className="subtitle is-6 is-spaced">{item.email}</p>
                        <p className="title is-6 is-spaced">{item.work}</p>
                        <p className="subtitle is-6">{item.position}</p>
                      </div>
                    </section>
                    <footer className="card-footer">
                      <a className="card-footer-item">
                        <i>
                          ติดต่อ (ภายใน) &nbsp;
                          {item.tel}
                        </i>
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </center>
      </div>
    </>
  )
}
const Card = (props) => {
  return <>{console.log(props)}</>
}
export default BodyStudentUnion
