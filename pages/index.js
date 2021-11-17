import React, { useState } from 'react'


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
      <div className={`cell-1 ${changeImg()}`}>
        <div className='navIcon'><svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd" />
          </svg></div>
        <div className='title'>room</div>
        <div className='heroNav'>
          <button className='leftButton'>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd" />
            </svg>
          </button>
          <button className='rightButton'>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd" />
            </svg>
          </button>
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
        <div className='subHeader'> ABOUT OUR FURNITURE</div>
        <div className='description'>Our multifunctional collection blends desgin and
        function to suit your individual taste. Make each room unique, or pick a cohesive
        theme that best express your interests and what inspires you. Find the
        furniture pieces you need, from traditional to contenporary styles or anything
        in between. Product specialists are available to help you create your dream space.</div>
      </div>
      <div className='cell-5'>

      </div>
    </div>
  )
}
