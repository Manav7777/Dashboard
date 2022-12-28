import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../components/hooks/auth";
import './NavBar.min.css'

const NavBar = () => {
  const auth = useAuth();

  return (
    <div className="nav fixed-top">
      <div className="container">
        <ul>
          <li className="nav-link">
            <NavLink to="/" className="nav-item">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="register" className="nav-item">Register</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="profile" className="nav-item">user</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="services" className="nav-item">Services</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="dashboard" className="nav-item">Dash Board</NavLink>
          </li>
          <li className="nav-link">{!auth.user && <NavLink to="login" className="nav-item">login</NavLink>}</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
