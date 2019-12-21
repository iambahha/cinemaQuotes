import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navbar navbar-dark bg-info navbar-expand-lg">
            <div className="navbar-brand container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Quotes<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/quotes/add">Submit New Quote</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;