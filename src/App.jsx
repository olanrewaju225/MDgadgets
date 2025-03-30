import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Blog/Blog'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact '
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'



const App = () => {
  return (
    
      <div className='App'>
        <Navbar />
        <Hero />
          <div className='container'>
            <Title subTitle='Our SERVICES' title='What We Offer' data-aos="fade-up"/>
            <Programs />
            <About />
            <Title subTitle='Our Blog' title='The Little things About Gadgets'/>
            <Blog />
            <Title subTitle='Contact Us' title='Get in Touch'/>
            <Contact />
          </div>          
        <div className='container'>
          <Footer />

        </div>
      </div>
    

  )

}


export default App




