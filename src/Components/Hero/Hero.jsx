import React, { useEffect } from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1 data-aos="fade-up">
          <Typewriter 
            options={{
              strings: [
                'Ignite Your Tech Passion',
                'Top Quality Gadgets',
                'We Buy, We Sell, We Swap', 
                'Expert Repairs'
              ], 
              autoStart: true, 
              loop: true
            }} 
          />
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Your One-Step Shop For Phones, Laptops, Video Games Consoles, Gadget Accessories and More.
        </p>
        <button className='btn' data-aos="fade-up" data-aos-delay="500">
          Shop now <i className="ri-shopping-cart-line"></i>
        </button>
      </div>
    </div>
  );
}

export default Hero;
