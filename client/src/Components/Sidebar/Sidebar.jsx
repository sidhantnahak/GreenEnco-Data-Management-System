import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import Main from '../Dashboard/Main'
import Footer from '../Footer/Footer'

const Sidebar = () => {
    const [open, setOpen] = useState(true)


    return (

        <>
            <nav>
                <li><Link>GreenEnco Pvt. Limited </Link><Link onClick={() => open ? setOpen(false) : setOpen(true)} style={{ position: "relative", top: "3px", left: "7px" }} className={open ? `fa-solid fa-bars` : "fa-solid fa-bars-staggered"}></Link></li>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
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