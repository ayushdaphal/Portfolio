import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-100%"; // Move the menu completely off-screen
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      </div>
      <ul ref={menuRef} className="navbar-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li className={menu === "education" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
        </li>
        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Work Experience</p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
