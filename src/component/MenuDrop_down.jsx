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
              <Link className='home_page anchor_tags' to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
              <Link className='explore_page anchor_tags' to="/Explore" onClick={()=>setMenuOpen(false)}>Explore</Link>
              <Link id='order_page' className='anchor_tags' to="/Orders" onClick={()=>setMenuOpen(false)}>My Order</Link>
              <Link id='account_page' className='anchor_tags' to="/Register" onClick={()=>setMenuOpen(false)}>Account</Link>
              <Link id='login_page' className='anchor_tags' to="/Login" onClick={()=>setMenuOpen(false)}>Login</Link>
              
            </div>
            

  );
}

export default MenuDrop_down