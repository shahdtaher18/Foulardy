import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";




export default function CategorySlicer() {

    const [categorySlicer, setcategorySlicer] = useState([])

//for the slider settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed:1500,
      }; 

 // to get the category products
    async function getCategoriesSlicer(){
      let res= await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
        .then((res)=>{
setcategorySlicer(res.data.data)
        })
        .catch((res)=>{})
    }

useEffect(()=>{
    getCategoriesSlicer()
},[])





  return (
    <>
    <h3 className='mt- text-left mb-3'>Shop Popular Categories</h3>
    <Slider {...settings}>
{categorySlicer.map((category)=> <div>
    <img src={category.image} alt={category.name} className='w-full h-[200px] object-cover ' />
    <h4>{category.name}</h4>
</div>)}




    </Slider>
    </>
  )
}
