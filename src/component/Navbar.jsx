import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/images/menu1.png';
import MenuDrop_down from './MenuDrop_down';



function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
        setMenuOpen (false);
    };
    useEffect (() =>{
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    },[menuOpen]);
  return (
    <div id='main_nav_divs'>
        <nav id='navigation'>
        <div className='home_chuks-hero nav_div'>
            <Link to='/' className='chuks_header'><h2>Chuks Kitchen</h2></Link>
        </div>

        <div className='nav_div'>
            <Link to='/' className='navLinks'>
                Home
            </Link>
        </div>

        <div className='nav_div'>
            <Link to='/Explore' className='navLinks'>
            Explore
            </Link>
        </div>

        <div className='nav_div'>
            <Link to='/Orders' className='navLinks'>My Order</Link>
        </div>

        <div className='nav_div'>
            <Link to='/Register' className='navLinks'>Account</Link>
        </div>

        <div className='nav_div_login '>
            <Link to='/Login'><button className='nav_login_button'>Login</button></Link>
        </div>

        <div className='nav_div_menuBurger' onClick={() =>  setMenuOpen(true)}>
            <img src={menuIcon} alt=""  id='menuImage'/>
        </div>

    </nav>
    <MenuDrop_down menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export default Navbar