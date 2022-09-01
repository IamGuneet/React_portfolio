import React from 'react'
import html from "./skill/html-icon.png"
import css from "./skill/css-icon.png"
import js from "./skill/js-icon.jpg"
import node from "./skill/node-icon.png"
import react from "./skill/react-icon.png"
import github from "./skill/git-icon.png"

function skill() {
  return (
    <div className='container-skills' id='skills'>
      <h1 className='sub-title'>Skills</h1> 
      <div className='skillIcons'>
         <img src={html} alt='skill' className='icon'/>
         <img src={css} alt='skill' className='icon'/>
         <img src={js} alt='skill' className='icon'/>
         <img src={node} alt='skill' className='icon'/>
         <img src={react} alt='skill' className='icon'/>
         <img src={github} alt='skill' className='icon'/>
      </div>
    </div>
  )
}

export default skill
