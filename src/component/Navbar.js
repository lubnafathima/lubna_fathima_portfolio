import React from 'react'
// import '../App.css';
import { SiFrontendmentor } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Navbar() {
  return (
    <div className='Navbar'>
        <h1 className='Navbar-logo'>lubnafathima</h1>
        <ul className='Navbar-items'>
            <li><a href='https://github.com/lubnafathima'><BsGithub /></a></li>
            <li><a href='https://www.frontendmentor.io/profile/lubnafathima'><SiFrontendmentor /></a></li>
            <li><a href='https://www.linkedin.com/in/lubna-fathima-n/'><BsLinkedin /></a></li>
            <li><a href='https://twitter.com/MsCoder1/'><BsTwitter /></a></li>
        </ul>
    </div>
  )
}

export default Navbar