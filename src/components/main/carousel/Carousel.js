import React from 'react';
import './Carousel.css'

export default function Carousel() {
  return <>
    <div id="carouselExampleAutoplaying" className="carousel slide carou" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.srisailadevasthanam.org/static/media/sd-banner-1.eae349b0.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://www.srisailadevasthanam.org/static/media/sd-slider-spcl-1.8a79b6d5.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://www.srisailadevasthanam.org/static/media/sd-banner-2.d8939803.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://www.srisailadevasthanam.org/static/media/sd-banner-3.2d2249a6.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://www.srisailadevasthanam.org/static/media/sd-banner-4.49a8b4e8.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://www.srisailadevasthanam.org/static/media/sd-banner-5.3f25adf9.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <hr/>

    <div className='container-fluid'>
      <div className='row carouInfo'>
        <div className='col-md-2'id='temp'>
          Temple News
        </div>
        <div className='col-md-8' style={{color:'navy'}}>
          <marquee>
            Paroksha Seva with godly blessings, scroll down to know all about Srisailam. You can also book Paroksha Seva athttps://aptemples.ap.gov.in. Online Booking Procedure :Paroksha Seva| E-Hundi
          </marquee>        
        </div>
        <div className='col-md-2 '>
          <button id='btn'>View All ></button>
        </div>
      </div>
    </div>

    <hr/>
  </>
}
