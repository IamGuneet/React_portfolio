import React from 'react'
import pic from './img/profile-pic.png'
export default function intro() {
  return (
    <>
    
    <div className='container' id='home'>
      <div className='intro'>
        <div className='title'>
        <h2 className='display-1 name'>Guneet Singh</h2>
        <h3 id='shaded'>Uni Student</h3>
        <h3 id='shaded'>
        ...Coder...
        </h3>
        </div>
      </div>
        <img className='profile-pic' src={pic} alt='img'/>
    </div>
    
    </>
  )
}
