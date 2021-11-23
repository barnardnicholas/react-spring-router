import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderLink({ className, to, children }) {
  return (
    <div>
      <NavLink className={className} to={to}>
        {children}
      </NavLink>
    </div>
  );
}
