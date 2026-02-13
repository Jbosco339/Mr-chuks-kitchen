import React from 'react'
import './Home_Hero.css'

function Home_Hero() {
  return (
    <section id='hero_section'>
        <div id='hero_div1'>
            <h3 id='Frist_hero_header'>The Heart of Nigerian Home <br /> Cooking</h3>
            <p id='second_hero_header'>Handcrafted with passion, delivered with care.</p>
            <button className='hero_button'>Discover what's new</button>
        </div>
    </section>
  )
}

export default Home_Hero