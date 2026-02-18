import React from 'react'
import { Link } from 'react-router-dom'

function Delivery_Details() {
  return (
    <section id='sec_deliveryDetails'>
        <div id='delivery_div'>
            <h2 className='input_header'>Delivery Details</h2> <hr />

            <div id='address_div'>
                <p id='home_addresses'>Home:123 Main Street, Victoria Island Lagos <br /> Apt 4B, Opposite Mega Plaza </p>
                <Link className='chamgeAddress'>Change Address</Link>
            </div>
            <h3 className='input_header'>Delivery Time</h3>
            <input type="text" placeholder='ASAP(30-25)' />

            <h3 className='input_header'>Delivery Instructions (Optional)</h3>
            <input type="text" placeholder='E.g leave at the front door, knock twice.....' />
        </div>
    </section>
  )
}

export default Delivery_Details