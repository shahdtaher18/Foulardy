import React from 'react'
import Slider from "react-slick";
import slide1 from '../../assets/slide1.webp'
import slide2 from '../../assets/slide2.webp'
import slide3 from '../../assets/slide3.gif'
import mainslide1 from '../../assets/mainslide1.png'
import mainslide2 from '../../assets/mainslide2.jpeg'
import mainslide3 from '../../assets/mainslide3.jpg'



export default function MainSlider() {

//for the slider settings
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed:1500,
}; 




  return (
    <>
    <div className="row mt-12">
      <div className='w-3/4'>
      <Slider {...settings}>
      <img src={mainslide1} alt="main products"  className='w-full object-cover h-[400px]'/>
      <img src={mainslide2} alt="main products"  className='w-full object-cover h-[400px]'/>
      <img src={mainslide3} alt="main products"  className='w-full object-cover h-[400px]'/>
      </Slider>
      </div>
      <div className='w-1/4'>
      <img src={slide2} alt="main products" className='w-full h-[200px]' />
      <img src={slide3} alt="main products" className='w-full h-[200px]' />
      </div>
    </div>
     






    
    
    
    
    
    </>
  )
}
