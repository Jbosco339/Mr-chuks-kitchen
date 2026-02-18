import React from 'react'
import Your_Cart from '../component/Your_Cart'
import Order_Summary from '../component/Order_Summary'
import Delivery_Details from '../component/Delivery_Details'

function Orders() {
  return (
    <>
      <Your_Cart/>
      <Order_Summary/>
      <Delivery_Details/>
    </>
  )
}

export default Orders