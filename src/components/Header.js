import React from 'react';
import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <header>
      <HeaderLink className="nav-link" to="/">
        Arnie
      </HeaderLink>
      <HeaderLink className="nav-link" to="/bacon">
        Bacon
      </HeaderLink>
      <HeaderLink className="nav-link" to="/delorean">
        Delorean
      </HeaderLink>
      <HeaderLink className="nav-link" to="/demo-page">
        Demo Page
      </HeaderLink>
    </header>
  );
};

export default Header;
