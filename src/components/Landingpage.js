import React, {useState} from "react";
import './Landingpage.css';

function Landingpage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navLinks = [
    {
        title: "Home",
        href: "#home",
        action: "toggleMenu"
    },
    {
        title: "Services",
        href: "#services",
        action: "toggleMenu"
    },
    {
        title: "Contract",
        href: "#contract",
        action: toggleMenu
    }
  ]

  return (
    <div className="landing-page">
        <nav className="navbar">
          <div className="logo">MyBrand</div>
          
          <ul className="nav-links desktop-menu">
            {navLinks.map((item)=>
                <li><a href={item.href}>{item.title}</a></li>
            )}
          </ul>
          <button className="hamburger" onClick={toggleMenu}>☰</button>
        </nav>
        {isOpen && (
        <ul className="nav-links mobile-menu">
            {navLinks.map((item) => 
                <li><a href={item.href} onClick={()=>item.action}>{item.title}</a></li>
            )}
        </ul>
        )}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Build Your Future with MyBrand</h1>
            <p>We create simple and modern web solution that adapt to all devices.</p>
            <a href="#services" className="cta-btn">Get Started</a>
          </div>
          <div className="hero-image">
            <img src="/logo192.png" alt="Hero" />
          </div>
        </section>

        <footer className="footer">
          <p>@ 2025 Blackrose. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default Landingpage;
