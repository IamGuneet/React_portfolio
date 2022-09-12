import React from 'react'
import Blog from "./project/blog.png"
import Memory from "./project/memory.png"
import Weather from "./project/weather-api.png"
import Todo from  "./project/to-do.png"
function project() {
    return (
        <div className='sub' id='project'>
            <h1 className='sub-title title-project'>Projects</h1>
            <div className='project-cards'>
                <div className="card ">
                    <img src={Blog} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Blog-Web App</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://github.com/IamGuneet/Blog-webApplication" className="btn btn-primary">Code</a>
                        </div>
                </div>
                <div className="card ">
                    <img src={Memory} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Memory-Game</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://github.com/IamGuneet/Memory-Game" className="btn btn-primary">Code</a>
                        </div>
                </div>
                <div className="card ">
                    <img src={Todo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">To-do</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://github.com/IamGuneet/Express-Node-To-do-list" className="btn btn-primary">Code</a>
                        </div>
                </div>
                <div className="card ">
                    <img src={Weather} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Weather-App</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="https://github.com/IamGuneet/Weather-WebApp" className="btn btn-primary">Code</a>
                        </div>
                </div>
                {/* <div className="card ">
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Qr-Code Generator</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Code</a>
                        </div>
                </div>
                <div className="card ">
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">Qr-Code Generator</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Code</a>
                        </div>
                </div> */}
            </div>
        </div>
    )
}

export default project
