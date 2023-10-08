import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import Main from '../Dashboard/Main'
import Footer from '../Footer/Footer'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)

    const [width, setWidth] = useState(window.innerWidth)



    window.onresize = function (e) {
        setWidth(window.innerWidth)
        if (width >= 650 && dropdown) {
            setDropdown(false)
        }
    }

    const navLinkHandler = (e) => {
        e.stopPropagation()

        if (!dropdown) {
            setDropdown(true);
        } else {
            setDropdown(false)
        }
    }


    window.onclick = function (e) {
        setDropdown(false)
    }
    useEffect(() => {
        if (width < 650) {
            setOpen(false)
        } else {
            setOpen(true)
        }


    }, [width])




    return (

        <>
            <nav>
                <li><Link>GreenEnco Pvt. Limited </Link><Link onClick={() => open ? setOpen(false) : setOpen(true)} style={{ position: "relative", top: "3px", left: "7px", display: width >= 650 ? "inline" : "none" }} className={open ? `fa-solid fa-bars` : "fa-solid fa-bars-staggered"}></Link></li>
                <div style={{ display: width >= 650 ? "flex" : "none", gap: "2rem", justifyContent: "space-between" }} >
                    <Link className='text-decoration-none text-white fs-7 fw-bolder ' to="/">Home</Link>
                    <Link className='text-decoration-none text-white fs-7 fw-bolder ' to="/about">About</Link>
                    <Link className='text-decoration-none text-white fs-7 fw-bolder ' to="/contact">Contact</Link>
                </div>

                <Link onClick={navLinkHandler} style={{ display: width < 650 ? "block" : "none" }} className={dropdown ? "fa-solid fa-xmark" : 'fa-solid fa-bars'}></Link>

            </nav>
            <div id='open_links' onClick={(e) => e.stopPropagation()} style={{ width: width < 400 ? "unset" : "auto", display: dropdown ? "flex" : "none", position: "fixed", top: "65px", right: "5px", left: width < 400 && "5px", background: "rgb(43 50 66)", color: "white",fontSize:"0.9rem" }} className='px-5 py-1 gap-3 rounded align-items-center justify-content-center'>
                <ul className='d-flex flex-column py-2 gap-1 align-items-center justify-content-center text-center'>
                    <Link to="/" className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }}>Home</Link>
                    <Link to="/about" className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }}>About</Link>
                    <Link to="/contact" className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }}>Contact</Link>
                </ul>
                <ul className='d-flex flex-column  py-2 gap-1 align-items-center justify-content-center text-center'>
                    <Link to='/dashboard' className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }}> Dashboard</Link>
                    <Link to='/add-data' className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }}> Add Data</Link>
                    <Link to="chart/pie-chart" className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }}>Pie Chart</Link>
                    <Link to="chart/bar-chart" className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }} >Bar Chart</Link>
                    <Link to="chart/line-chart" className='text-white mt-1 text-decoration-none font-weight-bold' style={{ fontWeight: "600" }} >Line Chart</Link>
                </ul>
            </div>

            <aside style={{ marginLeft: open ? "0px" : "-250px" }}  >

            
                <Link to='/dashboard'> Dashboard</Link>
                <Link to='/add-data'> Add Data</Link>

                <Link to="chart/pie-chart">Pie Chart</Link>
                <Link to="chart/bar-chart"  >Bar Chart</Link>
                <Link to="chart/line-chart" >Line Chart</Link>
            </aside>

            <main style={{ width: !open && "100%" }}>
                <Main />

            </main>

            <Footer open={open} />

        </>
    )
}

export default Sidebar