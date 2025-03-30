import React from 'react'

import './About.css'
import Typewriter from 'typewriter-effect'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left" data-aos="zoom-in" data-aos-duration="1500">
            <img src={about_img} alt='' className='about-img'/>
            
        </div>
        <div className="about-right" data-aos="fade-left" data-aos-duration="2000">
            <h3>ABOUT US</h3>
            <h2>
              <Typewriter 
                options={{strings: ['Explore The Latest in Tech','Get your Devices Running Like New' ], autoStart: true, loop: true}}
              />
            </h2>
            <p>Welcome to <strong>MD gadgets</strong>, where we bring you the latest and most innovative gadgets to enhance your everyday life. From cutting-edge tech to practical devices, we offer high-quality solutions for the mordern consumer.</p>

            <p>Our Mission is to make technology more accessible, functional, and enjoyable for everyone. We are dedicated to curating the best gadgets that improves productivity, entertainment and convenience.</p>
            <p>At MD gadgets, we don't just sell gadgets - we handpick each product for its quality, practicality and innovation. Our Team is passionate about finding the best tech solutions, and we pride ourselves on providing personalized customer service.</p>

            <p>Browse our collection of innovative gadgets and find the perfect product to upgrade your tech experience today</p>
        </div>
      
    </div>
  )
}

export default About
