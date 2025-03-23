import React from 'react'
import './Programs.css'

import sales from '../../assets/Sales.jpg'
import repair from '../../assets/Repair.jpg'
import bonuses from '../../assets/Bonuses.jpg'

import device from '../../assets/devicee.png'
import tool from '../../assets/tools.png'
import sale from '../../assets/sales.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={sales} alt='' />
            <div className='caption'>
                <img src={device} />
                <p>High-Tech Gadget Sales</p>
            </div>
        </div>
        <div className="program">
            <img src={repair} alt='' />
            <div className='caption'>
                <img src={tool}/>
                <p>Fast and Affordable Repairs</p>
            </div>
        </div>
        <div className="program">
            <img src={bonuses} alt='' />
            <div className='caption'>
                <img src={sale}/>
                <p>Exclusive Deals and Refferal Bonuses</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
