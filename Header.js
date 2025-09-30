// import React from "react";

// function Header() {
//   return (
//     <header className="header">
//       <a href="Home.js" className="logo">
//         <i className="fas fa-utensils"></i> Foodies</a>

//       <form className="search-form">
//         <input type="search" placeholder="search here..." id="searchBox" />
//         <label htmlFor="searchBox" className="fas fa-search"></label>
//       </form>

//       <div className="icons">
//         <div className="fas fa-search" id="search-btn"></div>
//         <div className="fas fa-share" id="theme-btn"></div>
//         <div className="fas fa-user" id="login-btn"></div>
//         <div className="fas fa-bars" id="menu-btn"></div>
//       </div>

//       <nav className="navbar">
//         <a href="#home">Home</a>
//         <a href="#packages">Packages</a>
//         <a href="#services">Services</a>
//         <a href="#pricing">Pricing</a>
//         <a href="#contact">Contact</a>
//         <a href="#blogs">Blogs</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import { useEffect } from "react";

// function Header() {
//   useEffect(() => {
//     const menuBtn = document.getElementById("menu-btn");
//     const navbar = document.querySelector(".navbar");

//     const toggleMenu = () => {
//       navbar.classList.toggle("active");
//     };

//     if (menuBtn && navbar) {
//       menuBtn.addEventListener("click", toggleMenu);
//     }

//     return () => {
//       if (menuBtn) {
//         menuBtn.removeEventListener("click", toggleMenu);
//       }
//     };
//   }, []);

//   return (
//     <header className="header">
//       <a href="Header.js" className="logo">
//         <i className="fas fa-utensils"></i> Foodies
//       </a>

//       <form className="search-form">
//         <input type="search" placeholder="search here..." id="searchBox" />
//         <label htmlFor="searchBox" className="fas fa-search"></label>
//       </form>

//       <div className="icons">
//         <div className="fas fa-search" id="search-btn"></div>
//         <div className="fas fa-share" id="theme-btn"></div>
//         <div className="fas fa-user" id="login-btn"></div>
//         <div className="fas fa-bars" id="menu-btn"></div>
//       </div>

//       <nav className="navbar">
//         <a href="#home">Home</a>
//         <a href="#packages">Packages</a>
//         <a href="#services">Services</a>
//         <a href="#contact">Contact</a>
//         <a href="#blogs">Blogs</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from "react";
import "./Header.css"; // Link your CSS

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <i className="fas fa-utensils"></i> Foodies
      </a>

      <form className="search-form">
        <input type="search" placeholder="Search here..." id="searchBox" />
        <label htmlFor="searchBox" className="fas fa-search"></label>
      </form>

      <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-share" id="theme-btn"></div>
        <div className="fas fa-user" id="login-btn"></div>
        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={toggleMenu}
        ></div>
      </div>

      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#packages">Packages</a>
        {/* <a href="#services">Services</a> */}
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>
    </header>
  );
}

export default Header;
