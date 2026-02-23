import React from 'react'
import { Link } from 'react-router-dom';
import closeimg from '../assets/images/close.png';

function MenuDrop_down({menuOpen, setMenuOpen}) {
    if (!menuOpen) return null;
   return (
    
            <div className=' hamburger-menu ${menuOpen ? "open" : ""}' >
                <button 
                className='close-btn' onClick={() => setMenuOpen(false)}>
                <img src={closeimg} id='close_img' alt="" />
                </button>
              <Link className='home_page' to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
              <Link className='explore_page' to="/Explore" onClick={()=>setMenuOpen(false)}>Explore</Link>
              <Link id='order_page' to="/Orders" onClick={()=>setMenuOpen(false)}>My Order</Link>
              <Link id='account_page' to="/Register" onClick={()=>setMenuOpen(false)}>Account</Link>
              <Link id='login_page' to="/Login" onClick={()=>setMenuOpen(false)}>Login</Link>
              
            </div>
            

  );
}

export default MenuDrop_down