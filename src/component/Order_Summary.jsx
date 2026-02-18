import React from 'react'
import './Your_Cart.css'
import removeImage from '../assets/images/remove.png';

function Order_Summary() {
  return (
    <section id='orderSummary_section'>
        <div id='Summar_div1'>
            <div id='inner_summary_div'>
            <h3 id='orderSumHeader'>Order Summary <hr/></h3>
            <label htmlFor="" >Add a promo Code </label> <br />
            <input type="text" className='inputBox' placeholder='Enter Code here' />
            <button className='Login_btn'>Login</button>
            <div className='totaling'>
                <p className='summary_details'>Subtotal</p>
                <p className='summary_details'>N9,200</p>
            </div>
            <div className='totaling'>
                <p className='summary_details'>Delivery Fee</p>
                <p className='summary_details'>N500</p>
            </div>
            <div className='totaling'>
                <p className='summary_details'>Service Fee</p>
                <p className='summary_details'>N200</p>
            </div>
            <div className='totaling'>
                <p className='summary_details'>Tax</p>
                <p className='summary_details'>N0</p>
            </div> 
            <hr/>

            <div id='total_div'>
                <p>Total</p>
                <p>N9,900</p>
            </div>
            <div id='deliverAnd_pickup'>
                <div className='deliver1'><p>Delivery</p></div>
                <div className='Pickup2'><p>Pick up</p></div>
            </div>
            <label id='textArea_label'>Special Instruction for Restaurant</label><br />
            <textarea name="" id="orderSummary_TextArea" placeholder='E.g no Onion, food is too spicy, food is too hot, food is tasty'></textarea>

            <button id='checkout_button'>Proceed to Checkout</button>
                
            </div>
        </div>
    </section>
  )
}

export default Order_Summary