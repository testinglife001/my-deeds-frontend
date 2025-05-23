import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            {/* 
            {{< placeholder width="100%" height="100%" background="var(--bs-secondary-color)" text="false" title="false" >}}
            */}
            
            <div className="container">
            <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            {/* 
             {{< placeholder width="100%" height="100%" background="var(--bs-secondary-color)" text="false" title="false" >}}
            */}
           
            <div className="container">
            <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            {/* 
            {{< placeholder width="100%" height="100%" background="var(--bs-secondary-color)" text="false" title="false" >}}
            */}
            
            <div className="container">
            <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
            </div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
