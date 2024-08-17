import React from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 py-1 bg-slate-200 border-gray-200 z-50">
      <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
       
        <div className="flex items-center space-x-6">
          
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <NavLink className="flex gap-5 pl-14">
            <img src={logo} width="60px" className="h-10 " alt="Foulardy Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-700">
              Foulardy
            </span>
            </NavLink>
          </div>

          
          <ul className="flex gap-5 ml-4 mt-2">
            <li><NavLink to="" className="text-slate-500">Home</NavLink></li>
            <li><NavLink to="products" className="text-slate-500">Products</NavLink></li>
            <li><NavLink to="categories" className="text-slate-500">Categories</NavLink></li>
            <li><NavLink to="brands" className="text-slate-500">Brands</NavLink></li>
            <li><NavLink to="cart" className="text-slate-500">Cart</NavLink></li>
          </ul>
        </div>

        
        <div className="flex items-center space-x-6 rtl:space-x-reverse mt-2">
          <div className="icons flex gap-5">
            <i className="fab fa-facebook" />
            <i className="fab fa-linkedin" />
            <i className="fab fa-instagram" />
            <i className="fab fa-youtube" />
          </div>
          <NavLink to="#" className="text-sm text-slate-500">Sign Out</NavLink>
        </div>
      </div>
    </nav>
  );
}
