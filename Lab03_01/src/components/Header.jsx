import logo from '../assets/logo.png'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <a href="#">
            <img className="logo" src={logo} alt="" />
          </a>

          <label className="d-flex align-items-center search-bar" htmlFor="">
            <FaMagnifyingGlass className="search-icon" />
            <input className="search-input" type="text" name="" id="" />
          </label>

          <div className="collapse navbar-collapse justify-content-around">
            <ul className="navbar-nav">
              <li className="nav-item text-secondary px-1">
                <a className="nav-link" href="#">
                  What to cook
                </a>
              </li>
              <li className="nav-item text-secondary px-1">
                <a className="nav-link" href="#">
                  Recipies
                </a>
              </li>
              <li className="nav-item text-secondary px-1">
                <a className="nav-link" href="#">
                  Ingredients
                </a>
              </li>
              <li className="nav-item text-secondary px-1">
                <a className="nav-link" href="#">
                  Occasions
                </a>
              </li>
              <li className="nav-item text-secondary px-1">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <button className="recipe-button">
            <IoImageOutline className="recipe-icon" />
            <span>Your Recipe Box</span>
          </button>

          <img
            className="avatar ms-3"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header