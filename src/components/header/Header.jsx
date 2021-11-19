import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="container">
          <nav className="nav">
          <a href="#!" className="logo">{title}</a>
        </nav>
        </div>
    );
}

export default Header;