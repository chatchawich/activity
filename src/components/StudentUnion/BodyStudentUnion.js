import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../Home/Tabs.personals.css'

const BodyStudentUnion = (props) => {
  const [so, setso] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/so/' + props.match.params.id)
      .then((result) => setso(result.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div>{console.log(props)}</div>
      <div className="container is-max-desktop">
        <div className="title">Student Organization</div>
        <div className="subtitle is-5">
          องค์การนักศึกษา มหาวิทยาลัยสงขลานครินทร์
        </div>
        <div className="columns is-multiline is-centered">
          <div className="column is-full-mobile is-one-third-tablet is-one-third-desktop">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-6"></p>
                  </div>
                </div>
                <div className="content">
                  <p className="subtitle is-6">ตำแหน่ง </p>
                  <p className="subtitle is-6">ศึกษาคณะ </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BodyStudentUnion
