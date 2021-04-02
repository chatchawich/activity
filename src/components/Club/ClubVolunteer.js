import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ClubVolun = () => {
  const [volunteer, setvolunteer] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/volunteer')
      .then((res) => setvolunteer(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {volunteer.map((item) => (
        <div className="content">
          <li>{item.name}</li>
        </div>
      ))}
    </>
  )
}

export default ClubVolun
