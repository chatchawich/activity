import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ArtsAndCulture = () => {
  const [ArtsAndCulture, setArtsAndCulture] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/ArtsAndCulture')
      .then((res) => setArtsAndCulture(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {ArtsAndCulture.map((item) => (
        <div className="content">
          <li>{item.name}</li>
        </div>
      ))}
    </>
  )
}

export default ArtsAndCulture
