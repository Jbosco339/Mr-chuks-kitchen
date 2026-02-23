import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
            <NavLink to='/' className='chuks_header'><h2>Chuks Kitchen</h2></NavLink>
        </div>
        {menuOpen && (<div className='overlay' onClick={closeMenu}></div>)}

        <div className='nav_div'>
            <NavLink to='/' end className={({isActive}) =>
                isActive ? "navLinks active" : "navLinks"
            }>
                Home
            </NavLink>
        </div>

        <div className='nav_div'>
            <NavLink to='/explore' end className={({isActive}) =>
                isActive ? "navLinks active" : "navLinks"
            }>
            Explore
            </NavLink>
        </div>

        <div className='nav_div'>
            <NavLink to='/orders' end className={({isActive}) =>
                isActive ? "navLinks active" : "navLinks"
            }>My Order</NavLink>
        </div>

        <div className='nav_div'>
            <NavLink to='/register' end className={({isActive}) =>
                isActive ? "navLinks active" : "navLinks"
            }>Account</NavLink>
        </div>

        <div className='nav_div_login '>
            <NavLink to='/Login'><button className='nav_login_button'>Login</button></NavLink>
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