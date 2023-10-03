import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import Main from './Main'

const Sidebar = () => {
    const [open, setOpen] = useState(true)


    return (

        <>
            <nav>
                <li><Link>GreenEnco Pvt. Limited </Link><Link onClick={() => open ? setOpen(false) : setOpen(true)} style={{ position: "relative", top: "3px", left: "7px" }} className={open ? `fa-solid fa-bars` : "fa-solid fa-bars-staggered"}></Link></li>
                <div>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>
            </nav>

            <aside style={{marginLeft:open?"0px":"-250px" }}  >
                <Link to='/contents'>Dashboard</Link>
                <Link to='/add-data'> Add Data</Link>
                <Link to='/pichart'>Pi Chart</Link>
            </aside>

            <main style={{ width: !open && "100%" }}>
                {/* {child} */}
                <Main/>
            </main>
            {/* <Main open={open} /> */}

        </>
    )
}

export default Sidebar