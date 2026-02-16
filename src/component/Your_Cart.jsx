import React from 'react'
import './Your_Cart.css'
import { Link } from 'react-router-dom';
import RicePlantain from '../assets/images/ImgE.png';

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
                         <h2 className='addsubtract4'>+</h2> 
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        <h2 className='addsubtract4'>--</h2>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'><h2 id='closetag'>X</h2></div>
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
                         <h2 className='addsubtract4'>+</h2> 
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        <h2 className='addsubtract4'>--</h2>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'><h2 id='closetag'>X</h2></div>
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
                         <h2 className='addsubtract4'>+</h2> 
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        <h2 className='addsubtract4'>--</h2>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'><h2 id='closetag'>X</h2></div>
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
                         <h2 className='addsubtract4'>+</h2> 
                    </div>
                    <div className='noOf_item'> 
                        <h3>1</h3>
                        </div>
                    <div className='addSub'>
                        <h2 className='addsubtract4'>--</h2>
                        </div>
                    <div className='price_of_item'><h3>N3,200</h3></div>
                    <div className='cancel'><h2 id='closetag'>X</h2></div>
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