import React from "react";
import "./Navbar.scss";
import SvgIcons from "../../assets/symbol-defs.svg";

const Navbar = (props) => {
  return (
    <nav className="sidebar">
      <ul className="sideNav">
        <li className="sideNav__item sideNav__item--active">
          <a href="#" className="sideNav__link  ">
            <svg className="sideNav__icon">
              <use xlinkHref={`${SvgIcons}#icon-home`}></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>

        <li className="sideNav__item">
          <a href="#" className="sideNav__link">
            <svg className="sideNav__icon">
              <use xlinkHref={`${SvgIcons}#icon-aircraft-take-off`}></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="sideNav__item">
          <a href="#" className="sideNav__link">
            <svg className="sideNav__icon">
              <use xlinkHref={`${SvgIcons}#icon-key`}></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>

        <li className="sideNav__item">
          <a href="#" className="sideNav__link">
            <svg className="sideNav__icon">
              <use xlinkHref={`${SvgIcons}#icon-map`}></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2021 by Trillo. All rights reserved.</div>
    </nav>
  );
};

export default Navbar;
