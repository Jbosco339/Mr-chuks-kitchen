import React from 'react'
import './Home_Hero.css'
import image1 from '../assets/images/Image7.png';
import image2 from '../assets/images/ImgA.png';
import image3 from '../assets/images/ImgB.png';
import image4 from '../assets/images/ImgC.png';
import image5 from '../assets/images/ImgD.png';
import image6 from '../assets/images/ImgE.png';
import image7 from '../assets/images/ImgF.png';

function Home_Hero() {
  return (
    <section id='hero_section'>
        <div id='hero_div1'>
            <h3 id='Frist_hero_header'>The Heart of Nigerian Home <br /> Cooking</h3>
            <p id='second_hero_header'>Handcrafted with passion, delivered with care.</p>
            <button className='hero_button'>Discover what's new</button>
        </div>
            {/* POPULAR CATEGORIES SECTION */}
        <div id='hero_div2'>
            <h2 id='hero_div2_title'>Popular Categories</h2>
            <div id='hero_div2_imgss'>
                <div className='hero_div2_imgs'>
                <img src={image1} alt="" className='div2_images'/>
                <div className='mealName'>
                    <h3>
                        Jollof Delights
                    </h3>
                </div>
             </div>
             <div className='hero_div2_imgs'>
                <img src={image2} alt="" className='div2_images'/>
                <div className='mealName'>
                    <h3>Swallow & Soups</h3>
                </div>
             </div>
             <div className='hero_div2_imgs'>
                <img src={image3} alt="" className='div2_images'/>
                <div className='mealName'>
                    <h3>Grills & BBQ</h3>
                </div>
             </div>
             <div className='hero_div2_imgs'>
                <img src={image4} alt="" className='div2_images'/>
                <div className='mealName'>
                    <h3>Sweet Treats</h3>
                </div>
             </div>
             <di className='hero_div2_imgs'>
                <img src={image2} alt="" className='div2_images'/>
                <div className='mealName'>
                    <h3>Jollof Delight</h3>
                </div>
              </di>
             <div className='hero_div2_imgs'>
                <img src={image3} alt="" className='div2_images'/>
                <div className='mealName'>
                    <h3>Jollof Delights</h3>
                </div>
             </div>
            </div>
        </div>

        {/* CHEF's SPECIAL SECTION */}

        <div id='chefs_specials'>
            <article id='specialDish_container'>
                 <h3 className='chefs_specials_title12'>Chef's Specials</h3>
            <div id='chefs_specials_dishes'>

                <div className='chefs_dishes'>
                    <div className='special_dish_img'>
                        <img src={image5} alt="" className='specialD_imgss'/>
                    </div>
                    <div className='special_dish_description'>
                        <h3 className='dish_title11'>Spicy Tilapia Pepper Soup</h3>
                        <p className='dish_description1'>
                            A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy
                        </p>
                    </div>
                    <div className='specialDish_priceAndBtn'>
                        <div className='specialDish_price'>N3,500</div>
                        <div className='specialDishBtn'>
                            <button className='specialDish_btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='chefs_dishes'>
                    <div className='special_dish_img'>
                        <img src={image1} alt="" className='specialD_imgss'/>
                    </div>
                    <div className='special_dish_description'>
                        <h3 className='dish_title11'>Spicy Tilapia Pepper Soup</h3>
                        <p className='dish_description1'>
                            A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy
                        </p>
                    </div>
                    <div className='specialDish_priceAndBtn'>
                        <div className='specialDish_price'>N3,500</div>
                        <div className='specialDishBtn'>
                            <button className='specialDish_btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='chefs_dishes'>
                    <div className='special_dish_img'>
                        <img src={image1} alt="" className='specialD_imgss'/>
                    </div>
                    <div className='special_dish_description'>
                        <h3 className='dish_title11'>Spicy Tilapia Pepper Soup</h3>
                        <p className='dish_description1'>
                            A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy
                        </p>
                    </div>
                    <div className='specialDish_priceAndBtn'>
                        <div className='specialDish_price'>N3,500</div>
                        <div className='specialDishBtn'>
                            <button className='specialDish_btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='chefs_dishes'>
                    <div className='special_dish_img'>
                        <img src={image1} alt="" className='specialD_imgss'/>
                    </div>
                    <div className='special_dish_description'>
                        <h3 className='dish_title11'>Spicy Tilapia Pepper Soup</h3>
                        <p className='dish_description1'>
                            A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy
                        </p>
                    </div>
                    <div className='specialDish_priceAndBtn'>
                        <div className='specialDish_price'>N3,500</div>
                        <div className='specialDishBtn'>
                            <button className='specialDish_btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='chefs_dishes'>
                    <div className='special_dish_img'>
                        <img src={image6} alt="" className='specialD_imgss'/>
                    </div>
                    <div className='special_dish_description'>
                        <h3 className='dish_title11'>Spicy Tilapia Pepper Soup</h3>
                        <p className='dish_description1'>
                            A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy
                        </p>
                    </div>
                    <div className='specialDish_priceAndBtn'>
                        <div className='specialDish_price'>N3,500</div>
                        <div className='specialDishBtn'>
                            <button className='specialDish_btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='chefs_dishes'>
                    <div className='special_dish_img'>
                        <img src={image7} alt="" className='specialD_imgss'/>
                    </div>
                    <div className='special_dish_description'>
                        <h3 className='dish_title11'>Spicy Tilapia Pepper Soup</h3>
                        <p className='dish_description1'>
                            A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy
                        </p>
                    </div>
                    <div className='specialDish_priceAndBtn'>
                        <div className='specialDish_price'>N3,500</div>
                        <div className='specialDishBtn'>
                            <button className='specialDish_btn'>Add to cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
            </article>
        </div>
    </section>
    
  )
}

export default Home_Hero