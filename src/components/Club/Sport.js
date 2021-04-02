import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Sport = () => {
  const [Sport, setSport] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/Sport')
      .then((res) => setSport(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {Sport.map((item) => (
        <div className="content">
          <li>{item.name}</li>
        </div>
      ))}
    </>
  )
}

export default Sport
