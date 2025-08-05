import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="flex bg-blue-500 justify-between px-4 py-2">
                <div className="text-xl text-white">NavBar</div>
                <div>
                    <ul className="flex gap-2 text-lg text-white">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;