import React from 'react'
import './Card.css'

const Card=(prop)=>
{
  const {id,name,username,email}=prop; 
  return(
    <div className='outer'>
      <img className='tc' src={require(`../../public/among${id}.png`) } alt='robot' width='50px' height='50px' />
      <div className='inner'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;