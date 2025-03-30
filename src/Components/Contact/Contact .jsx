import React from 'react'

import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'
import axios from 'axios'
const Contact  = () => {
  const [message , setMessage] = useState("")
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [loading , setLoading] = useState(false)
    
const baseurl = "https://sendspear.onrender.com/api/message"


const handleSubmit = async (e) => {
    e.preventDefault()
   setLoading(true)


   const params =  new URLSearchParams({
    userMail:"taofeekolatunji49@gmail.com",
    userName:"Taofeek"
   })

   try{
    const response = await axios.post(`${baseurl}?${params}` , {email , message , name})
   } catch(error){
      console.log(error)
   }
   finally{
    setLoading(false)
   }
} 


  return (
    <div className='contact'>
        <div className="contact-col" data-aos="zoom-in-up">
            
            <h3>Send us a Message <i className="ri-mail-line"></i></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our clients.</p>
            <ul>
                <li><i className="ri-mail-line"></i>micaeldavid300@gmail.com</li>
                <li><i className="ri-phone-line"></i> +2348179804517</li>
                <li><i className="ri-map-pin-line"></i> Number 1, Akinremi street, anifowoshe, Computer Village, Ikeja, Lagos state</li>

            </ul>
            
            
            <h3>Our Socials</h3>
            <ul className='socials'>
                <li><a href='https://www.instagram.com/_mdgadgets?igsh=ZDc2ZmVpNmRsbDRh' target="_blank"><i className="ri-instagram-line"></i></a></li>
                <li><a href='https://x.com/_mdgadgets?s=11' target="_blank"><i className="ri-twitter-fill"></i></a></li>
                <li><a href='https://wa.me/c/2348179804517' target="_blank"><i className="ri-whatsapp-line"></i></a></li>
            </ul>
            
            
        </div>

        <div className="contact-col" data-aos="zoom-in-down">
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name}  type="text" name="name" placeholder='Enter your name' required/>
                

                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' name='email' placeholder='email' required />
                
                <label>Write your message here</label>
                <textarea name='message' onChange={(e) => setMessage(e.target.value)} value={message}  rows='6' placeholder='Enter your message' required></textarea>
                
                <button type='submit' className='btn dark-btn' >Submit</button>
            </form>
            
        </div>
      
    </div>
  )
}

export default Contact 
