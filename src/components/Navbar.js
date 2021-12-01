import React from 'react'
import { Link } from "react-router-dom";
import navbarIcon from './navbarIcon.png';
import './common.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbarBG">
            <div className="container-fluid">
                <Link to="/"><img className="navbarIcon" src={navbarIcon} alt="Website Logo" /></Link>
                <Link className="navbar-brand" to="/">Visorithm</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link`} aria-current="page" to="/contactUs">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link`} aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link`} aria-current="page" to="/help">Help</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}

export default Navbar
