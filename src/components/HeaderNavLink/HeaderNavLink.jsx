import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const HeaderNavLink = ({ text, onClick, className, path }) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) => (isActive ? 'active' : { className })}
    >
      {text}
    </NavLink>
  );
};
