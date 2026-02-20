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
            <input type="text" placeholder='ASAP(30-25)'  className='delivery_Address'/>

            <h3 className='input_header'>Delivery Instructions (Optional)</h3>
            <input type="text" placeholder='E.g leave at the front door, knock twice.....' id='delivery_Instruction12' />

            <h3 className='input_header'>Contact Address</h3>
            <input type="text" placeholder='+234 801 234 5678'  className='delivery_Address'/>
        </div>

                   {/* PAYMENTS SECTION */}
                   <div id='payment_div'>
                    <div id='payment_inner_div'>
                      <h3>Payment</h3><hr />
                      <p id='pay_with'>Pay with:</p>
                      <div className='options'>
                        <label className='option_labels'>
                          <input type="radio" name='payment'  />
                          Card
                        </label>

                        <label className='option_labels'>
                          <input type="radio" name='payment'  />
                          Bank
                        </label>

                        <label className='option_labels'>
                          <input type="radio" name='payment'  />
                          Transfer
                        </label>
                      </div>
                      <label className='cardNumber'>Card Number</label><br />
                      <input type="text" placeholder='1234 5678 9101 1121' className='cardNo_box' />

                      <div className='expireyAnd_cvv'>
                        <div className='expireAnd_cvv_innerDiv'>
                          <label className='cardNumber'>Epiration Date</label><br />
                          <input type="text" className='expiryDate_input' id='expiry_dateInput' placeholder='MM/YY'/>
                        </div>
                        <div className='expireAnd_cvv_innerDiv'>
                          <label>CVV</label><br />
                          <input type="text" className='expiryDate_input' placeholder='123'/>
                        </div>
                      </div>
                      
                      <label className='saveCardDetails'>
                          <input type="radio" name='payment'  />
                          Save Card details
                        </label>

                        <button id='finalPayment_btn'>Pay N9,900</button>
                        <p className='finalCondition'>
                          your personal data wil be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy
                        </p>
                    </div>
                   </div>
    </section>
  )
}

export default Delivery_Details