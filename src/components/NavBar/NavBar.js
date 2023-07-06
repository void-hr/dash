import React from 'react';
import image from '../../Assets/title.png';
import profileimg from '../../Assets/KatyPerry.jpg'
import './style.css'
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="navbar-brand-image" src={image} alt="Bootstrap"/>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li> */}
          
        </ul>
        <form className="d-flex justify-content-center" role="search">
          <input className="search-input" type="search" placeholder="Search" aria-label="Search"/>
          <button type="button" class="btn btn-outline-light"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <div className="notification-icon">
        <i class="fa-regular fa-sun"></i>
        </div>
        <div className="notification-icon">
          <i class="fa-solid fa-language"></i>
        </div>
        <div className="notification-icon">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="notification-icon">
          <i class="fa-regular fa-bell"></i>

        </div>
        <div className="profile-img-div">
          <img className="profile-img" src={profileimg} alt="" />
        </div>
        
      </div>
    </div>
  </nav>
  )
}
