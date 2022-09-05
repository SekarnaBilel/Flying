import React from "react";
import { NavLink } from "react-router-dom";
import "./headers.css";

const Headers = () => {
  return (
    <div className="header">
          <h1>Bilel Movies</h1>
      <nav className="header">
        <ul>
          <NavLink
            to="/movies-list"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/coup-de-coeurs"
            className={(nav) => (nav.isActive ? "nav-active" : "")}

          >
            <li>Coup de coeur</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Headers;
