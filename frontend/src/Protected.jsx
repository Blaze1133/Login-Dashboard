import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Protected = () => {

    const [data,setData] = useState('') // TO rendder the ui
    
    useEffect(() => {
        const response = axios.get("http://localhost:8080/protected")
        setData(response.data)
    }, [])

  return (
    <div>
       <h1>{data}</h1>
    </div>
  )
}

export default Protected
