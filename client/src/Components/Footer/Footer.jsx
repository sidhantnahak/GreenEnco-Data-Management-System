import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = ({open}) => {
    return (
       
            <div  style={{ width: !open && "100%" }} className='footer_div'>

                <div>
                    <span className='text-uppercase'>  &#169; 2023 GreenEnco Limited OF INDIA</span>
                    <span > TERMS AND CONDITIONS PRIVACY POLICY/ALL RIGHTS RESERVED  </span>
                </div>

                <div >
                    <Link className='fa-brands fa-facebook '> </Link>
                    <Link className='fa-brands fa-twitter '> </Link>
                    <Link className='fa-brands fa-instagram '> </Link>
                    <Link className='fa-brands fa-linkedin '> </Link>
                    <Link className='fa-brands fa-github '> </Link>

                </div>
            </div>
       
        
    )
}

export default Footer