import React from 'react'
import logo from '../assets/logo.png'
import { FaMagnifyingGlass } from "react-icons/fa6";
function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light header'>
      <div className='container-fluid'>

        <a>
          <img className='logo' src={logo} alt="" />
        </a>

        <label className='d-flex align-items-center' htmlFor="">
          <FaMagnifyingGlass className='search-icon' />
          <input className='search-bar' type="text" name="" id="" />
        </label>

        <div className='collapse navbar-collapse justify-content-around'>
          <ul className='navbar-nav'>
            <li className='nav-item text-secondary px-1'>What to cook</li>
            <li className='nav-item text-secondary px-1'>Recipies</li>
            <li className='nav-item text-secondary px-1'>Ingredients</li>
            <li className='nav-item text-secondary px-1'>Occasions</li>
            <li className='nav-item text-secondary px-1'>About us</li>
          </ul>
        </div>


        <button className='recipe-button'>Your Recipe Box</button>


        <img className='avatar ms-3' src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" />
      </div>
    </nav>
  )
}

export default Header