import React from 'react';
import { Link, NavLink,useNavigate } from 'react-router-dom';
//Sirve para cambiar la URL que aparece
export const Navbar = () => {
    const navigate=useNavigate();
    const handleLogout = () => {
        console.log('logout')
        navigate('/login',{
            replace:true
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
                        className={({isActive})=>"nav-item nav-link "+(isActive? 'active':'')}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive})=>"nav-item nav-link "+(isActive? 'active':'')}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive})=>"nav-item nav-link "+(isActive? 'active':'')}
                        to="/HeroScreen"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link btn">
                        Matias
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