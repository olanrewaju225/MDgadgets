import React, { useEffect } from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='hero container' >
      <div className="hero-text"  data-aos="fade-up">
        <h1>
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
        <p >
          Your One-Step Shop For Phones, Laptops, Video Games Consoles, Gadget Accessories and More.
        </p>
        {/* <button className='btn'  data-aos-delay="500">
          Shop now <i className="ri-shopping-cart-line"></i>
        </button> */}
        <Link className='btn' to='contact' smooth={true} offset={-260} duration={500}  data-aos-delay="500">
          Shop now <i className="ri-shopping-cart-line"></i>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
