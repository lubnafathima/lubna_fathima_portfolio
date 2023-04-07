import React from 'react'
// import '../App.css';
import Navbar from './Navbar';
import Main from './Main';
// import header_bg from '../img/header_bg.png';

function Header() {
  return (
    <div className='Header'>
        {/* <img className='header_bg' src={header_bg} alt='header_bg' /> */}
        <Navbar />
        <Main />
    </div>
  )
}

export default Header