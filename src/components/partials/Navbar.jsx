import { useState, useRef } from 'react';
import './css/navbar.scss';
import { FiAlignRight, FiX } from 'react-icons/fi';
import { IoMdArrowDropright } from 'react-icons/io';

const DropDown = () => (
  <div className="navbar__container-link_dropdown">
    <ul className="navbar__container-link_dropdown-content">
      <li>
        <a href="#">Honeymoon Packages</a>
      </li>
      <li>
        <a href="#">Tours Packages</a>
      </li>
      <li>
        <a href="#">Musical Events</a>
      </li>
      <li>
        <a href="#">Build Package</a>
      </li>
    </ul>
  </div>
);
const DropDownSide = ({ setToggleDrop }) => (
  <div className="navbar__container-link_dropdown-side">
    <ul className="navbar__container-link_dropdown-side-content">
      <li>
        <a href="#">Honeymoon Packages</a>
      </li>
      <li>
        <a href="#">Tours Packages</a>
      </li>
      <li>
        <a href="#">Musical Events</a>
      </li>
      <li>
        <a href="#">Build Package</a>
      </li>
    </ul>
  </div>
);

const Menu = () => {
  const [toggleDrop, setToggleDrop] = useState(false);
  const windowSize = useRef(window.innerWidth);
  const iconRotate =
    windowSize.current < 1300
      ? toggleDrop
        ? 'navbar__container-link_icon-90'
        : ''
      : 'navbar__container-link_icon';
  return (
    <>
      <div className="navbar__container-link">
        <a href="#">Home</a>
      </div>
      <div className="navbar__container-link">
        <a href="#">About</a>
      </div>
      <div
        onClick={() => {
          setToggleDrop(!toggleDrop);
        }}
        className="navbar__container-link navbar__container-link_services">
        <a>Services</a>
        <IoMdArrowDropright className={`navbar__container-link_icon-default ${iconRotate}`} />
        {windowSize.current > 1300 && <DropDown />}
      </div>
      {windowSize.current < 1300 && toggleDrop && <DropDownSide />}
      <div className="navbar__container-link">
        <a href="#">Upcomming Packages</a>
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="logo" />
      <div className="navbar__container">
        <Menu />
      </div>
      <div className="navbar__buttons">
        <button className="navbar__button">Get in Touch</button>
        {toggleMenu ? (
          <FiX
            opacity={0}
            className="navbar__menu-icon"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FiAlignRight
            className="navbar__menu-icon"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="navbar__menu-container slide-left">
          <button className="navbar__menu-container_close">
            <FiX color="#000" size={30} onClick={() => setToggleMenu(false)} />
          </button>
          <div className="navbar__menu-container_links">
            <Menu />
            <p>
              <button className="navbar__menu-container_btn">Get in Touch</button>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
