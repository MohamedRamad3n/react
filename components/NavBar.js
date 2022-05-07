import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Books" >Books</NavLink>
        </nav>

    )
}
export default NavBar;