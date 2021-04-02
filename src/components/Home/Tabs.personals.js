import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Tabs.personals.css'

const TabsPersonals = () => {
  const [personals, setPersonals] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/personals')
      .then((res) => setPersonals(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <center>
        <div className="columns is-multiline has-centered">
          {personals.map((item, index) => (
            <div
              className="column is-full-mobile is-half-tablet is-one-third-desktop"
              key={index}
            >
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by5">
                    <img src={item.img} alt={item.name} />
                  </figure>
                </div>
                <section className="section">
                  <p className="title is-4">
                    <b>{item.name}</b>
                  </p>
                  <p className="subtitle is-6 is-spaced">{item.email}</p>
                  <p className="title is-6 is-spaced">{item.work}</p>
                  <p className="subtitle is-6">{item.position}</p>
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
          ))}
        </div>
      </center>
    </>
  )
}
export default TabsPersonals
