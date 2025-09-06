import React from 'react'
import image1 from './WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <div id="navbar">
                <img src={image1} id="logo" />
                <ul>
                    <li><Link className='navbarcolor' to={"/"}>HOME</Link></li>
                    <li> <Link className='navbarcolor' to={"/Register"}>REGISTER</Link></li>
                    <li> <Link className='navbarcolor' to={"/Achievements"}>ACHIEVEMENTS</Link></li>
                    <li><Link className='navbarcolor' to={"/About"}>ABOUT</Link></li>
                    <li><Link className='navbarcolor' to={"/Contactus"}>CONTACT US</Link></li>
                    <li><Link className='navbarcolor' to={"/Gallery"}>GALLERY</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar