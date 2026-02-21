import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import menuIcon from '../assets/images/menu1.png';
// const location = useLocation();


function Navbar() {
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

        <div className='nav_div_menuBurger'>
            <img src={menuIcon} alt=""  id='menuImage'/>
        </div>

    </nav>
    </div>
  )
}

export default Navbar