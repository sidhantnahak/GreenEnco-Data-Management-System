import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import Main from '../Dashboard/Main'
import Footer from '../Footer/Footer'

const Sidebar = () => {
    const [open, setOpen] = useState(true)

    const[width,setWidth]=useState(window.innerWidth)
    
   
 
    window.onresize=function(e){
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        if(width<650 ){
            setOpen(false)  
        }else{
            setOpen(true)
        }
        
       
    }, [width])
    


    return (

        <>
            <nav>
                <li><Link>GreenEnco Pvt. Limited </Link><Link onClick={() => open ? setOpen(false) : setOpen(true)} style={{ position: "relative", top: "3px", left: "7px",display:width>=650?"inline":"none" }} className={open ? `fa-solid fa-bars` : "fa-solid fa-bars-staggered"}></Link></li>
                <div style={{display:width>=650?"flex":"none",gap:"2rem",justifyContent:"space-between"}} >
                    <Link className='text-decoration-none text-white fs-7 fw-bolder ' to="/">Home</Link>
                    <Link className='text-decoration-none text-white fs-7 fw-bolder ' to="/about">About</Link>
                    <Link className='text-decoration-none text-white fs-7 fw-bolder ' to="/contact">Contact</Link>
                </div>
                
                <Link style={{display:width<650? "block":"none"}} className='fa-solid fa-bars'></Link>

            </nav>

            <aside style={{ marginLeft: open ? "0px" : "-250px" }}  >
                <Link to='/dashboard'> Dashboard</Link>
                <Link to='/add-data'> Add Data</Link>

                <Link to="chart/pie-chart">Pie Chart</Link>
                <Link to="chart/bar-chart"  >Bar Chart</Link>
                <Link  to="chart/line-chart" >Line Chart</Link>
            </aside>

           <main style={{ width: !open && "100%" }}>
                <Main  />

            </main>
           
            <Footer open={open} />
    
        </>
    )
}

export default Sidebar