import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/layout/Nav.css';

const Nav = (props) => {
    return (
        <div className="holder">
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} >Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "activo" : undefined} >About</NavLink></li>
                    <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "activo" : undefined} >Gallery</NavLink></li>
                    <li><NavLink to="/store" className={({ isActive }) => isActive ? "activo" : undefined} >Store</NavLink></li>
                    <li><NavLink to="/newsnevents" className={({ isActive }) => isActive ? "activo" : undefined} >News & Events</NavLink ></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "activo" : undefined} >Contact</NavLink></li>
                </ul>
            </nav>
        </div>);
}
export default Nav;

