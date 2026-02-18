import React from 'react'
import './Your_Cart.css'
import { Link } from 'react-router-dom';
import RicePlantain from '../assets/images/ImgE.png';
import removeImage from '../assets/images/remove.png';
import addSignss from '../assets/images/plusSign556t.png';
import MinusSign from '../assets/images/minusSignNew.png';

function Your_Cart() {
  return (
    <section id='cart_section'>
        <article id='cart_article'>
            
            <div id='cart_innerDivs'>
                <h3 id='cart_header'>Your Cart</h3>
                <div className='catrBoxes_holder'>
                    <div className='cart_imgss'>
                        <img src={RicePlantain} alt="" id='cartRicePlantain' />
                    </div>
                    <div className='cart_nameAndDescrip'>
                        <h3 className='dishes_headings'>Jollof Rice & Fried Chicken</h3>
                        <p id='dish_description1'>With Plantain, extra pepper sauce</p>
                    </div>
                    <div id='mini_icons_holder'>
                        <div className='addSub'>
                         {/* <h2 className='addsubtract4'>+</h2>  */}
                         <img src={addSignss} alt="" className='AddsSignInner'/>
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        {/* <h2 className='addsubtract4'>--</h2> */}
                        <img src={MinusSign} alt="" className='minus_signNew'/>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'>
                        <img src={removeImage} alt="" className='close_imaging4'/>
                    </div>
                    </div>
                </div>
                <div className='catrBoxes_holder'>
                    <div className='cart_imgss'>
                        <img src={RicePlantain} alt="" id='cartRicePlantain' />
                    </div>
                    <div className='cart_nameAndDescrip'>
                        <h3 className='dishes_headings'>Jollof Rice & Fried Chicken</h3>
                        <p id='dish_description1'>With Plantain, extra pepper sauce</p>
                    </div>
                    <div id='mini_icons_holder'>
                        <div className='addSub'>
                         {/* <h2 className='addsubtract4'>+</h2>  */}
                         <img src={addSignss} alt="" className='AddsSignInner'/>
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        {/* <h2 className='addsubtract4'>--</h2> */}
                        <img src={MinusSign} alt="" className='minus_signNew'/>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'>
                        <img src={removeImage} alt="" className='close_imaging4'/>
                    </div>
                    </div>
                </div>
                <div className='catrBoxes_holder'>
                    <div className='cart_imgss'>
                        <img src={RicePlantain} alt="" id='cartRicePlantain' />
                    </div>
                    <div className='cart_nameAndDescrip'>
                        <h3 className='dishes_headings'>Jollof Rice & Fried Chicken</h3>
                        <p id='dish_description1'>With Plantain, extra pepper sauce</p>
                    </div>
                    <div id='mini_icons_holder'>
                        <div className='addSub'>
                         {/* <h2 className='addsubtract4'>+</h2>  */}
                         <img src={addSignss} alt="" className='AddsSignInner'/>
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        {/* <h2 className='addsubtract4'>--</h2> */}
                        <img src={MinusSign} alt="" className='minus_signNew'/>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'>
                        <img src={removeImage} alt="" className='close_imaging4'/>
                    </div>
                    </div>
                </div>
                <div className='catrBoxes_holder'>
                    <div className='cart_imgss'>
                        <img src={RicePlantain} alt="" id='cartRicePlantain' />
                    </div>
                    <div className='cart_nameAndDescrip'>
                        <h3 className='dishes_headings'>Jollof Rice & Fried Chicken</h3>
                        <p id='dish_description1'>With Plantain, extra pepper sauce</p>
                    </div>
                    <div id='mini_icons_holder'>
                        <div className='addSub'>
                         {/* <h2 className='addsubtract4'>+</h2>  */}
                         <img src={addSignss} alt="" className='AddsSignInner'/>
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        {/* <h2 className='addsubtract4'>--</h2> */}
                        <img src={MinusSign} alt="" className='minus_signNew'/>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'>
                        <img src={removeImage} alt="" className='close_imaging4'/>
                    </div>
                    </div>
                </div>
                <Link>
                    <p id='add_moreDish'> + Add more items from Chuks Kitchen</p>
                </Link>
            </div>
            
        </article>
    </section>
  )
}

export default Your_Cart