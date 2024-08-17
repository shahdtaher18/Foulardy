import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";




export default function ProductDetails() {
    const [product, setproduct] = useState(null)
    const [relatedProducts, setrelatedProducts] = useState([])
    let {id , category}=useParams()

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
    //function for specific products
    async function getSpecificProduct(id){
      let res= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        .then((res)=>{
             setproduct(res.data.data)
        })
        .cath((res)=>{})
    }

    //function for all products
    async function getAllProducts(){
      let res=await   axios.get('https://ecommerce.routemisr.com/api/v1/products')
        .then((res)=>{
let related= res.data.data.filter((product)=>product.category.name==category)
setrelatedProducts(related)
        })
        .catch((res)=>{})
    }

useEffect(()=>{
    getSpecificProduct(id)
    getAllProducts()
},[id , category])

   
   



  return (
    <>
    {/* showing product details */}
    <div className="row items-center w-4/5">
        <div className='w-1/4'>
        <Slider {...settings}>
          {product?.images.map((src)=> <img src={src} className='w-full'/>)}
        </Slider>
        </div>

        <div className='w-3/4'>
        <div className="info p-5">
            <span><h2 className='font-semibold text-left my-4 text-orange-700'>{product?.title}</h2></span>
            <span><h2 className='font-semibold text-left text-slate-500'>{product?.description}</h2></span>
            <span><h2 className='font-semibold text-left text-slate-500'>{product?.category.name}</h2></span>
            <div className='flex justify-between  text-left'>
  <h3 className='font-semibold'>{product?.price} EGP</h3>
  <span className='pr-4'>
  <i className='fas fa-star text-yellow-500 pr-1'></i>
    {product?.ratingsAverage}
    </span>
  </div> 
  <h4 className='text-emerald-500 text-left'>remaining items: {product?.quantity}</h4>
  <button className='btn rounded-md bg-orange-300 w-full mx-2 my-2 text-slate-700  hover:bg-orange-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>Add To Cart</button>

     </div>

        </div>
    </div>


{/* related products */}
<div  className='row'>
{ relatedProducts.length>0? relatedProducts.map((product)=>
<div key={product._id} className='xl:w-1/6 sm:w-full md:w-1/3 lg:w-1/3  p-4 hover:bg-slate-100 rounded-md hover:shadow-md'>
<div className="item  ">
<Link to={`/productDetails/${product._id}/${product.category.name}`}>

  <img src={product.imageCover} alt={product.title} className='w-full ' />
  <h3 className='text-orange-700 text-left '>{product.category.name}</h3>
  <h3 className='font-semibold text-left text-slate-500'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
  <div className='flex justify-between  text-left'>
  <h3 className='font-semibold'>{product.price} EGP</h3>
  <span className='pr-4'>
  <i className='fas fa-star text-yellow-500 pr-1'></i>
    {product.ratingsAverage}
    </span>
  </div>
  </Link>
  <button className='btn rounded-md bg-orange-300 w-full mx-2 my-2 text-slate-700  hover:bg-orange-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>Add To Cart</button>
</div>




</div>
) :<div className="sk-cube-grid">
  <div className="sk-cube sk-cube1" />
  <div className="sk-cube sk-cube2" />
  <div className="sk-cube sk-cube3" />
  <div className="sk-cube sk-cube4" />
  <div className="sk-cube sk-cube5" />
  <div className="sk-cube sk-cube6" />
  <div className="sk-cube sk-cube7" />
  <div className="sk-cube sk-cube8" />
  <div className="sk-cube sk-cube9" />
</div>
}

</div>


    </>
  )
}
