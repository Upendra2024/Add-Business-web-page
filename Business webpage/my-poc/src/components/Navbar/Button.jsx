import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {

  const handleLogout=()=>
  {
     localStorage.removeItem("loggedin")
  }


  return (
    <Link to="/login" className="cst">
      <button className="btn" onClick={handleLogout}>SignOut</button>
    </Link>
  );
}

export default Button;
