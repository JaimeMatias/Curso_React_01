import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/autContext';
import { types } from '../../types/types';
//Sirve para cambiar la URL que aparece
export const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const usuarioAuth = user.name

    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({type: types.logout})
        console.log('logout')
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                        to="/Search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link btn">
                        {usuarioAuth}
                    </span>
                    <button className="nav-item nav-link btn"
                        onClick={handleLogout}>
                        LogOut
                    </button>

                </ul>
            </div>
        </nav >
    )
}