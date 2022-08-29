import React from 'react'
import pic from './img/me.JPG'
export default function intro() {
  return (
    <>
    <div className='container'>
      <div className='intro'>
        <div className='title'>
        <h2 className='display-1 name'>Guneet Singh</h2>
        <h3>Uni Student</h3>
        <h3>
        ...Coder...
        </h3>
        </div>
        <img className='profile-pic' src={pic} alt='img'/>
      </div>
    </div>
      <hr/>
    </>
  )
}
