import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  
  <div  style={{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace"}} >
      <div className='text-center'>

        <h1>WelCome To The GreenEnco Data Management App</h1>
        <h2>To Add Data <Link  to="/add-data" style={{fontSize:"1.1rem",textDecoration:"none",fontWeight:"700"}} > Click Here</Link> </h2>

      </div>

    </div>
  )
}

export default Home