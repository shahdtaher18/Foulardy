import React from 'react'
import MyProducts from '../MyProducts/MyProducts'
import CategorySlicer from '../CategorySlicer/CategorySlicer'
import MainSlider from '../MainSlider/MainSlider'

export default function Home() {
  return (
    <>
    <MainSlider/>
     <CategorySlicer/>
    <MyProducts/>
    
    <div>Home</div>
    </>
  )
}
