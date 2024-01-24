import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./Navitems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  let userName = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="https://www.adroll.com/assets/svg/logo-adroll.svg" alt="logo"/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <span className="cst px-3">Welcome - {userName.name}</span>
        <Button />  
      </nav>
    </>
  );
}

export default Navbar;
