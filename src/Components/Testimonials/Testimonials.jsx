import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/tunji.jpg'
import user_4 from '../../assets/user-4.png'




const Testimonials = () => {
    const slider = useRef();

    let tx = 0;





    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }





  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt='' />
                            <div>
                                <h3>Abioye Taiwo</h3>
                                <span>Medilag, Lagos</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus distinctio labore perferendis, quaerat omnis dolorum eligendi! Repellendus voluptas non incidunt, accusantium animi cupiditate? Magnam incidunt quas similique culpa minima officia qui nulla maiores ullam sed.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt='' />
                            <div>
                                <h3>Ekundayo Opeoluwa</h3>
                                <span>Michigan, USA</span>
                            </div>
                        </div>
                        <p>
                            My iphone 12 that i got from MD gadgets has to be the cleanest phone i've ever bought from a gadget vendor
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt='' />
                            <div>
                                <h3>Mobolaji Olatunji</h3>
                                <span>Medilag, Lagos</span>
                            </div>
                        </div>
                        <p>
                           Got my Hewlitt Packard Laptop from MD gadgets. Its been two years now and it feels like new.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt='' />
                            <div>
                                <h3>Ephraim Olashile</h3>
                                <span>MEdilag, Lagos</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi mollitia corporis sapiente quidem vel, facere repudiandae dolorum culpa? Possimus, iure aperiam veniam incidunt perspiciatis expedita amet nostrum temporibus ipsum!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
