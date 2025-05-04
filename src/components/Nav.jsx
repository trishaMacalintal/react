import React, { useState, useEffect } from "react";

function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarStyle = () => {
    const blurAmount = Math.min(scrollPosition / 10, 8); 
    const opacity = Math.min(scrollPosition / 200, 1); 

    return {
      background: `rgba(49, 60, 89, ${opacity})`,
      backdropFilter: `blur(${blurAmount}px)`,
      transition: "all 0.3s ease",
    };
  };

  return (
    <nav
      className="navbar navbar-expand-md fixed-top"
      id="navbar"
      style={getNavbarStyle()}
    >
      <div className="container-fluid px-0">
        <a href="/">
          <img
            className="navbar-brand w-75 d-md-none"
            src="assets/img/logos/logo.svg"
            alt="logo"
          />
        </a>
        <a className="navbar-brand fw-bold d-none d-md-block text-white" href="/">
          Brainwave.io
        </a>
        <a
          className="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto"
          href="#"
        >
          Get Started Now
        </a>
        <button
          className="navbar-toggler border-0 pe-0"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbar-content"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-md-end ${
            !isNavbarCollapsed ? "show" : ""
          }`}
          id="navbar-content"
        >
          <ul className="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0">
            <li className="nav-item">
              <a className="nav-link lh-xl text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lh-xl text-white" href="#about">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lh-xl text-white" href="#service">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lh-xl text-white" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link lh-xl text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
