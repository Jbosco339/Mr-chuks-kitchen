import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import arrowup from '../assets/images/arrow.png';
import Home_Hero from './Home_Hero';


function Footer() {
  return (
    <footer id='footer_section'>
        
        {/* DIV TWO OF FOOTER SECTION BEGINS HERE */}
        <div id='footer_div2'>
          <div id='footer_notes'>
            <div className='footer_info'>
            <h3 id='chuks_kitchen_footer'>Chuks Kitchen</h3>
            <p id='chuks_kit_paragraph'>
              Bring the authentic <br /> flavors of Nigeria <br /> home cooking to your <br /> table, with passion <br /> and care.
            </p>
          </div>
          <div className='footer_info'>
            <h3>Quick Links</h3>
            <ul>
              <Link to='/'>
                <li className='footer_infoss'>Home</li>
              </Link>
              <Link to='/explore'>
                <li className='footer_infoss'>Explore</li>
              </Link>
              <Link to='/Order'>
                <li className='footer_infoss'>My Order</li>
              </Link>
              <Link to='register'>
                <li className='footer_infoss'>Account</li>
              </Link>
              <Link to='/'>
                <li className='footer_infoss'>Contact</li>
              </Link>
            </ul>
          </div>
          <div className='footer_info'>
            <h3 >Contact Us</h3>
            <p className='footer_infoss'>+2348056432086</p>
            <p className='footer_infoss'>hello@chukskitchen.com</p>
            <address className='footer_infoss'>123 Taste Bhud, Lagos, Nigeria</address>
          </div>
          <div className='footer_info'>
            <ul id='footer_socials'>
              <li className='footer_infoss'>Facebook</li>
              <li className='footer_infoss'>Twitter</li>
              <li className='footer_infoss'>LinkedIn</li>
              <li className='footer_infoss'>Instagram</li>
            </ul>
          </div>
          </div>
          <div id='upArrow_and_rights'>
            <div className='upArrow_and_rights_divs'>
              <p className='footer_right_note'>@ 2020 lit Media All rights reserved</p>
            </div>
            <div className='upArrow_and_rights_divs'>
              <img src={arrowup} alt="" id='arrowup_img'/>
            </div>
          </div>
          
        </div>
        
    </footer>
  )
}

export default Footer