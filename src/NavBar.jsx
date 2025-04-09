import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/counter">
                <button>Counter</button>
            </Link>
            <Link to="/form">
                <button>Form</button>
            </Link>
            <Link to="/meal">
                <button>Meal</button>
            </Link>
            <Link to="/showData">
                <button>ShowData</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
        </div>
    );
};

export default NavBar;
