import React from 'react'
import trg from '../assets/trg.jpg';
import './mountain.css'
const Mountain = () => {
  return (
    <>
      <div className='contRest'>
       <div className='part1'>
        <div className='contItem1'>
          <h1>Rock <br/>Climbing</h1>
          <h4>1. Classes & events</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <hr className='line'/>
        </div>
        <div className='contItem2'>
          <img className='contImage' src={trg} alt='trg' />
        </div>
       </div>
       <div className='part2'>
        <div className='contItem3'>
          <h4>
          10 modules <br/>
            divided into 7 weeks 
          </h4>
          <div className='contItem3Div'>
            <div>
              Start <br></br>
              April 15, <br></br>
              20 hours
            </div>
            <div>
              Price<br></br>
              $ 900 <br></br>
             </div>
          </div>

        </div>
        <div className='contItem4'>
            Walking In Nature <br/>
            As a recreational <br/>
            Activity
        </div>
       </div>
      </div>
    </>
  )
}

export default Mountain