import React from 'react'
import './Explore_Hero.css'
import image1 from '../assets/images/Image7.png';
import plusSign from '../assets/images/plus.png';
import leafPlate from '../assets/images/Image10.png';
import tilapia from '../assets/images/Image.png';
import pepperSnail from '../assets/images/Image11.png';
import amala from '../assets/images/Image13.png';
import okroSoup from '../assets/images/Image14.png';
import soupFufu from '../assets/images/ImgF.png';
import ebaEgusi from '../assets/images/ImgG.png';


function Explore_Hero() {
  return (
    <section id='explore_hero'>
        <div id='hero_div'>
            <h3 id='explore_chukss'>Chuks Kitchen</h3>
            <p id='explore_hero_parag'>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
        </div>
        <div id='menu_category'>
            <h3 id='menu_category_header'>Menu Categories</h3>
            <select name="" id="select_box">
                <option value="">Popular</option>
                <option value="">Jollof Rice & Entrees</option>
                <option value="">Swallow & Soups</option>
                <option value="">Grills & Sides</option>
                <option value="">Beverages</option>
                <option value="">Desserts</option>
            </select>
        </div>
            <h3 className='categoryTitles'>Popular</h3>
        <div id='popular_section'>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={image1} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Jollog Rice & Fried Chicken</h3>
                <p className='mealss_description1'>Our signature Jollof Rice, served with cripsy fried chicken and plantain</p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={soupFufu} alt="" className='popular_dish_imgsss ebaegussi'/>
                </div>
                <h3 className='dish_namezz'>Egusi Soup & Pounded Yam</h3>
                <p className='mealss_description1'>
                    Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.
                    </p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={leafPlate} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Pounded Yam & Edikaikong</h3>
                <p className='mealss_description1'>
                    Traditional pounded yam with rich, leafy Edikaikong soup.
                    </p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,800</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={pepperSnail} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Peppered Snail</h3>
                <p className='mealss_description1'>
                    Spicy and savory peppered snail, perfect as a starter
                    </p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N2,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={tilapia} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Grilled Tilapia Fish</h3>
                <p className='mealss_description1'>
                    Whole grilled tilapia seasoned with our special spices
                    </p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N4,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={image1} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Jollog Rice & Fried Chicken</h3>
                <p className='mealss_description1'>Our signature Jollof Rice, served with cripsy fried chicken and plantain</p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
        </div>

        <h3 className='categoryTitles'>Jollof Rice & Entrees</h3>
        <div id='jollof_first_div'>
            <div id='jollof_rice_ent'>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={image1} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Jollog Rice & Fried Chicken</h3>
                <p className='mealss_description1'>Our signature Jollof Rice, served with cripsy fried chicken and plantain</p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={image1} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Jollog Rice & Fried Chicken</h3>
                <p className='mealss_description1'>Our signature Jollof Rice, served with cripsy fried chicken and plantain</p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={image1} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Jollog Rice & Fried Chicken</h3>
                <p className='mealss_description1'>Our signature Jollof Rice, served with cripsy fried chicken and plantain</p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
         </div>
        </div>

        <h3 className='categoryTitles'>Swallow & Soups</h3>
        <div id='jollof_first_div' className='amaladivx'>
            <div id='jollof_rice_ent'>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={amala} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Amala with Gbegiri & Ewedu</h3>
                <p className='mealss_description1'>
                    Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.
                </p>
                <div className='priceAnd_Add amala_Gbegiri'>
                    <div className='popular_price'>N3,100</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={okroSoup} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Fufu & Okra Soup <br /> (Fish)</h3>
                <p className='mealss_description1'>Light Fufu served with fresh okra soup and tilapia fish</p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,300</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
            <div className='popular_section_dishes'>
                <div className='popular_imgs'>
                    <img src={okroSoup} alt="" className='popular_dish_imgsss'/>
                </div>
                <h3 className='dish_namezz'>Fufu & Okra Soup <br /> (Fish)</h3>
                <p className='mealss_description1'>
                    Light Fufu served with fresh okra soup and tilapia fish
                    </p>
                <div className='priceAnd_Add'>
                    <div className='popular_price'>N3,500</div>
                    <div className='popular_plus_sign'>
                        <img src={plusSign} alt="" className='AddSign'/>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default Explore_Hero