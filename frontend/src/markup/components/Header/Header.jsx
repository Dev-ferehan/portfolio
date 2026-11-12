import React, { useState } from 'react';

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('mobile-nav-active');
  };


  const closeMobileNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="sitename">Ferehan</h1>
          </a>

       
          <nav id="navmenu" className={`navmenu ${isNavOpen ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><a href="#hero" className="active" onClick={closeMobileNav}>Home</a></li>
              <li><a href="#about" onClick={closeMobileNav}>About</a></li>
              <li><a href="#skills" onClick={closeMobileNav}>Skills</a></li>
              <li><a href="#resume" onClick={closeMobileNav}>Resume</a></li>
              <li><a href="#services" onClick={closeMobileNav}>Services</a></li>
              <li><a href="#portfolio" onClick={closeMobileNav}>Portfolio</a></li>       
              <li><a href="#contact" onClick={closeMobileNav}>Contact</a></li>
            </ul>

            <i 
              className={`mobile-nav-toggle d-xl-none bi ${isNavOpen ? 'bi-x' : 'bi-list'}`} 
              onClick={toggleMobileNav}
            ></i>
          </nav>

        </div>
      </header>
    </div>
  );
}

export default Header;