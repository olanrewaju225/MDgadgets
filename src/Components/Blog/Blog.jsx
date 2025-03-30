import React from 'react'
import './Blog.css'
import Typewriter from 'typewriter-effect'



import gallery_1 from '../../assets/iphone1.jpg'
import gallery_2 from '../../assets/iphone2.jpg'
import gallery_3 from '../../assets/iphone3.jpg'
import gallery_4 from '../../assets/iphone4.jpg'
import gallery_5 from '../../assets/iphone5.jpg'
import gallery_6 from '../../assets/iphone6.jpg'
import white_arrow from '../../assets/white-arrow.png'
import upc1 from '../../assets/upcoming1.jpg'
import upc2 from '../../assets/upcoming2.jpg'
import upc3 from '../../assets/upcoming3.jpg'
import Title from '../Title/Title'




const Blog = () => {
  return (
    <div className='blog'>
        
          
        

        <div className="ft">
          <div className="ft-left" data-aos="zoom-out">
            <img src={gallery_6} className='ft-img' />

          </div>

          <div className='ft-right' data-aos="fade-right">
            <h3>Featured</h3>
            <h2>A Comprehensive review of the iPhone 16 promax</h2>
            <p>In 2024, Apple increased the screen sizes of the iPhone Pro and Pro Max models, but the iPhone 16 Pro Max doesn't feel much larger than previous Pro Max models. It measures 6.42 inches high, 3.06 inches wide, and weighs 7.99 ounces. In comparison, the iPhone 16 Plus is 6.33 inches high, 3.06 inches wide, and weighs 7.03 ounces, while the iPhone 16 Pro is 5.89 inches high, 2.81 inches wide, and weighs 7.03 ounces. The iPhone 16 is 5.81 inches high, 2.82 inches wide, and weighs 6 ounces. Interestingly, both the iPhone 16 Pro and iPhone 16 Plus weigh 7.03 ounces, despite the Plus being larger</p>
            

          </div>

        
        </div>

        <div className="dyk">
          <div className="dyk-left" data-aos="fade-down-right">
            <img src={gallery_5} className='dyk-img' />

          </div>

          <div className='dyk-right' data-aos="fade-up-left">
            <h3>DID YOU KNOW?</h3>
            <h2>Some common iPhone nuggets you might come across once in a while.</h2>
            <p>TT - True Tone</p>
            <p>FID - Face ID</p>
            <p>NFID - No Face ID</p>
            <p>FU - Fully Unlocked</p>
            <p>CU - Chip Unlocked</p>
            <p>ICM - Important Camera Message</p>
            <p>IDM - Important Display Message</p>
            <p>IBM - Important Battery Message</p>
            <p>WWW - Worldwide Unlocked</p>

          </div>

        </div>
        


        <Title subTitle='Upcoming' />
        <section className="upcoming-article">
        
        <div className="upcoming-content">
          
          <div className="article-card" data-aos="fade-right">
            <img src={upc1} className="article-image" />
            <h3 className="article-title">The Future of Smart Gadgets: Trends to Watch in 2025</h3>
            <p className="article-description">
              Discover the latest innovations in the world of smart gadgets, from AI-powered devices to futuristic wearables. 
              Stay ahead of the trends and find out what to expect in the coming years.
            </p>
            <p className="article-date">Coming on: January 15, 2025</p>
            <a href="#" class="read-more">Read more</a>
          </div>
        </div>


        <div className="upcoming-content tall">
            
            <div className="article-card" data-aos="fade-up">
              <img src={upc2} className="article-image" />
              <h3 className="article-title">Must have Gadgets for Tech enthusiasts</h3>
              <p className="article-description">
              Tech enthusiasts in coding and programming need powerful laptops with high processing speeds, mechanical keyboards for better typing experience, ergonomic mice, dual-monitor setups for increased productivity, and portable....
              </p>
              <p className="article-date">Coming on: January 09, 2025</p>
              <a href="#" className="read-more">Read more</a>
            </div>
        </div>

        <div className="upcoming-content">
            
            <div className="article-card" data-aos="fade-left" >
              <img src={upc3} className="article-image"  />
              <h3 className="article-title">Top Gadgets for Home Automation</h3>
              <p className="article-description">
              Smart thermostats, voice-controlled assistants, security cameras, smart lighting, and automated door locks. These devices enhance convenience, energy efficiency, and security, allowing homeowners to control their environment...
              </p>
              <p className="article-date">Coming on: February 14, 2025</p>
              <a href="#" className="read-more">Read more</a>
            </div>
        </div>
      </section>
      
    </div>
  )
}

export default Blog