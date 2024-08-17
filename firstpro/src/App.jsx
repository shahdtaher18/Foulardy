import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Categories from './components/categories/categories';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';





let x= createBrowserRouter([
  { path: "",element:<Layout/>,children:[
      {index :true,element:<Home/>},
      {path:"cart",element:<Cart/>},
      {path:"brands",element:<Brands/>},
      {path:"products",element:<Products/>},
      {path:"categories",element:<Categories/>},
      {path:"productDetails/:id/:category",element:<ProductDetails/>},
      {path:"*",element:<NotFound/>},
    ]}
])
function App() {

  return <RouterProvider router={x}> </RouterProvider>
  
}

export default App
