import React from 'react';
import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <header>
      <HeaderLink className="nav-link" to="/">
        Home
      </HeaderLink>
      <HeaderLink className="nav-link" to="/demo-page">
        Demo Page
      </HeaderLink>
      <HeaderLink className="nav-link" to="/mouse-follower">
        Follow
      </HeaderLink>
      <HeaderLink className="nav-link" to="/mouse-tilt">
        Tilt
      </HeaderLink>
      <HeaderLink className="nav-link" to="/mouse-shadow">
        Shadow
      </HeaderLink>
      <HeaderLink className="nav-link" to="/arnie">
        Arnie
      </HeaderLink>
      <HeaderLink className="nav-link" to="/bacon">
        Bacon
      </HeaderLink>
      <HeaderLink className="nav-link" to="/delorean">
        Delorean
      </HeaderLink>
    </header>
  );
};

export default Header;
