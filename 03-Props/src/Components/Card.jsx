import React from 'react'
import image from '../assets/ProfileImg.jpg'

const Card = (props) => {


  return (
    <div className='card'>
        <img src={image} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    
  )
}

export default Card
