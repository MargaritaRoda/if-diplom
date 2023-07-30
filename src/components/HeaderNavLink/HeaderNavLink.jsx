import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './HeaderNavLink.module.scss';

export const HeaderNavLink = ({ text, onClick, className, path }) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        classNames(styles.root, className, isActive && styles.active)
      }
    >
      {text}
    </NavLink>
  );
};
