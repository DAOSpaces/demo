

import React from 'react';

interface NavigationProps {
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title}</a>
        </div>
    </nav>
  );
}

export default Navigation;