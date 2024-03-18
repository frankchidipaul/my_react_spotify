import React from 'react'
import './Mixer.css'

const Mixer = (props) => {
  return (

    <div>
  <div className='card'>
  </div>
    <div className='imgcard'>
    <img className='imgcard1' src={props.image1}  alt="" />
    <h2 className='jazztext'>{props.name}</h2>
    <img className='imgcard2' src={props.image2}  alt="" />
    <h2 className='jazztext'>{props.name}</h2>
    <img className='imgcard3' src={props.image3}  alt="" />
    <h2 className='jazztext'>{props.name}</h2>
    
    <img className='imgcard4' src={props.image4}  alt="" />
    <h2 className='jazztext'>{props.name}</h2>
    
    
    </div>
  
    </div>

  )
}

export default Mixer