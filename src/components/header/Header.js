import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";
import SvgIcons from "../../assets/symbol-defs.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="trillo logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${SvgIcons}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className="userNav">
        <div className="userNav__iconBox">
          <svg className="userNav__icon">
            <use xlinkHref={`${SvgIcons}#icon-bookmark`}></use>
          </svg>
          <span className="userNav__notification">7</span>
        </div>

        <div className="userNav__iconBox">
          <svg className="userNav__icon">
            <use xlinkHref={`${SvgIcons}#icon-chat`}></use>
          </svg>
          <span className="userNav__notification">13</span>
        </div>

        <div className="userNav__user">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSw6iMZJxYZCaJettdUzuGEbdJaCFf4BvRn62fNug=s900-c-k-c0x00ffffff-no-rj"
            className="userNav__userPhoto"
            alt="user photo"
          />
          <span className="userNav__userName">Saptaparnee</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
