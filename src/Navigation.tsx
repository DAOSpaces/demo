

import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/profile">
                <img src="./static/img/dao.png" width="32px" height="32px" alt="twbs" className="rounded flex-shrink-0 mr-2"></img>
                &nbsp;&nbsp;{title}
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link className="nav-link" to="/" >To Do</Link>
                    </li>
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
  );
}

export default Navigation;