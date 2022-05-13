import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink exact="true"className="navbar-brand" to="/">UseContext</NavLink>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact="true"  className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true"  className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" className="nav-link" to="/login">Login</NavLink>
                    </li>

                </ul>
            </div>
        </nav>

    )
}
