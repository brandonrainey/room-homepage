import React, { useState } from 'react'
import arrow from '../public/images/icon-arrow.svg'

export default function Home() {
  const [heroImg, setHeroImg] = useState(0)

  function changeImg() {
    if (heroImg === 0) {
      return 'hero-1'
    }
    if (heroImg === 1) {
      return 'hero-2'
    }
    if (heroImg === 2) {
      return 'hero-3'
    }
  }
  return (
    <div className='mainContainer'>
      <div className={`cell-1 ${changeImg}`}>
        <div className='navIcon'></div>
        <div className='title'></div>
        <div className='heroNav'>
          <button className='leftButton'></button>
          <button className='rightButton'></button>
        </div>
      </div>
      <div className='cell-2'>
        <div className='mainHeader'>Discover innovative ways to decorate</div>
        <div className='description'>We provide unmatched quality, comfort, and style
        for property owners across the country. Our experts combine form and function 
        in bringing your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love. 
        </div>
        <div className='shopButton'>SHOP NOW<span><svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero" />
          </svg></span> 
        </div>
      </div>
      <div className='cell-3'>
        
      </div>
      <div className='cell-4'>
        <div className='subHeader'></div>
        <div className='description'></div>
      </div>
      <div className='cell-5'>

      </div>
    </div>
  )
}
