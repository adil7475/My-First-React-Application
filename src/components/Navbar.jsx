import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">My App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/movies" className="nav-link" >Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customers" className="nav-link">Customer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/rentals" className="nav-link">Rentals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>            
         );
    }
}
 
export default Navbar;