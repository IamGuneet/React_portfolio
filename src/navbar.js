import React from 'react'

function navbar() {
  return (
    <div className='header'>
     
     <nav class="navbar navbar-expand-lg navbar-light display-7 ">
  <div class="container-fluid">
    <a class=" navbar-brand m-2 " id='name' href="#/">Guneet Singh</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link active" aria-current="page" href="#home">Home</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#skills">Skills</a>
        <a class="nav-link" href="#project">Projects</a>
        <a class="nav-link" href="#contact">Contact</a>
        {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
