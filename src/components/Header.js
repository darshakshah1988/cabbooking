import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // const token = window.localStorage.getItem('token');
  return (
    <>
      <div className="header">
        <div className="header__container">
          <img
            src="/assets/logo.png"
            alt=""
            className="header__logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="header__container">
          <ul className="header__navlist">
            <li>
              <Link to="/">Cabs</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </div>

        <div className="header__container">
          {/* TODO: Here goes the user image className="header__user-image" */}
        </div>
      </div>

      <div className="header__ghost"></div>
    </>
  );
};

export default Header;
