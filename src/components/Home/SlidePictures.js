import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Slider from 'react-animated-slider'
import './SlidePictures.css'

const SlidePictures = () => {
  const [SlidePictures, setSlidePictures] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/SlidePictures')
      .then((res) => setSlidePictures(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <Slider autoplay={3000}>
        {SlidePictures.map((item, index) => (
          <div
            className="img"
            key={index}
            style={{
              background: `url('${item.url}') center center`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          >
            {/* ข้อความ บนรูป 
            <div class="columns">
              <div class="column is-1"></div>
              <div class="column">
                <div className="content">
                  <div className="title is-3 has-text-link">
                    <span className="arrow-highlight">{item.title}</span>
                  </div>
                </div>
                <div className="buttons">
                  <br />
                  <button className="button is-small is-info is-rounded">
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
            */}
          </div>
        ))}
      </Slider>
    </>
  )
}

export default SlidePictures
