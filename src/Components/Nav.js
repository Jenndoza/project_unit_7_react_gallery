import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink onClick={() => {props.searchFunction("trains")}} to="/trains">Trains</NavLink>
        </li>
        <li>
          <NavLink onClick={() => {props.searchFunction("planes")}} to="/planes">Planes</NavLink>
        </li>
        <li>
          <NavLink onClick={() => {props.searchFunction("ships")}} to="/ships">Ships</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;