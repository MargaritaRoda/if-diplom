import React from 'react';
import styles from './PageLayout.module.scss';

export const PageLayout = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
