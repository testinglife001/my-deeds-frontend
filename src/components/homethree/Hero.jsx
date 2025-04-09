import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  var settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    waitForAnimate: false,
  };

  return (
    <div className="w-100 h-100">
      <Slider {...settings}>
        <div className="vh-50 vh-lg-80">
          <div
            className="d-flex justify-content-center align-items-center h-100 bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          >
            <button className="btn btn-primary">Start Reading</button>
          </div>
        </div>

        <div className="vh-50 vh-lg-80">
          <div
            className="d-flex justify-content-center align-items-center h-100 bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1612969307974-ee4e57d2d5a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          >
            <button className="btn btn-primary">Write Articles</button>
          </div>
        </div>

        <div className="vh-50 vh-lg-80">
          <div
            className="d-flex justify-content-center align-items-center h-100 bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          >
            <button className="btn btn-primary">Explore RUNO</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
