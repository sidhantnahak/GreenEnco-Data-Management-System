import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Notfound = () => {
    const location=useLocation();
    return (
        <div >

            <div style={{ height: "80vh", width: "100%", display: "flex", alignItems: "center", gap: "2rem", justifyContent: "center" }}><Link style={{ padding: "0.5rem 1rem", background: "red", color: "white", boxShadow: "1px 1px 4px black", cursor: "pointer",textDecoration:"none" }} >Page Not Found </Link><Link style={{ padding: "0.5rem 1rem", background: "red", color: "white",  boxShadow: "1px 1px 4px black", cursor: "pointer",textDecoration:"none" }} onClick={() => window.history.go(-1)}>Go Back</Link> </div>
        </div>
    )
}

export default Notfound