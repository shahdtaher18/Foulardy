import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';



export default function MyProducts() {
const [Product, setProduct] = useState([])

//getting all products
async function getProducts(){
 let res= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
 
  .then((res)=>{

    setProduct(res.data.data)
})
 .catch((res)=>{})
 
}


useEffect(()=>{
    getProducts()
},[])




  return (
  <>
  {/* showing all products */}
<div  className='row'>
{ Product.length>0? Product.map((product)=>
<div key={product._id} className='xl:w-1/6 sm:w-full md:w-1/3 lg:w-1/3 p-4 hover:bg-slate-100 rounded-md hover:shadow-md'>
<div className="item  ">
<Link to={`productDetails/${product._id}/${product.category.name}`}>

  <img src={product.imageCover} alt={product.title} className='w-full ' />
  <h3 className='text-orange-700 text-left  '>{product.category.name}</h3>
  <h3 className='font-semibold text-left text-slate-500 text-sm '>{product.title.split(" ").slice(0,2).join(" ")}</h3>
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
