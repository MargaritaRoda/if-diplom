import React from 'react';
import styles from './HeaderNav.module.scss';

export const HeaderNav = ({ children }) => {
  return <nav className={styles.headerNav}>{children}</nav>;
};
