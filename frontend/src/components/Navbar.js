import React from "react";
import {Link} from "react-router-dom";

function  Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <Link to="/" className="navbar-brand">My App</Link>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/Register" className="nav-link">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Logout" className="nav-link">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Update" className="nav-link">Update</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Delete" className="nav-link">Delete</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;