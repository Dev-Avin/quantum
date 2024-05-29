import React from 'react'
import './hero.css'
import fb from '../assets/fb.jpeg'
import android from '../assets/Android.png'
const Hero = () => {
  return (
   <>
    <div className='hero'>
      <div className='heroContent'>
        <div className='heroText'>
          <h1>Discover your <br></br> Next Hike</h1>
          <h5>Discover your <br></br> Next Hike</h5>
          <p>Get access to our full library of tutorials</p>
          <p>Anytime, anywhere</p>
        </div>
      </div>
      <div className='herobackground'>
        {/* Insert the design here  */}
        <img src={fb} alt='hero' />
      </div>
      <div className='herobackgroundMobile'>
        {/* Insert the design here  */}
        <img src={android} alt='hero' />
      </div>
      
    </div>
   </>
  )
}

export default Hero