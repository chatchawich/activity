import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Academic = () => {
  const [Academic, setAcademic] = useState([])

  useEffect(() => {
    axios
      .get('http://10.128.61.101:3000/Academic')
      .then((res) => setAcademic(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {Academic.map((item) => (
        <div className="content">
          <li>{item.name}</li>
        </div>
      ))}
    </>
  )
}

export default Academic
