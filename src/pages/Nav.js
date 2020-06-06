import React from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/createexercise" className="navbar-brand">Create Exercise</Link>
            <Link to="/createuser" className="navbar-brand">Create User</Link>
        </nav>
    );
}

export default Nav;
