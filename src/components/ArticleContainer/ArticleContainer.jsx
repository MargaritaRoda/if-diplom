import React from 'react';
import styles from './ArticleContainer.module.scss';
import classNames from 'classnames';

export const ArticleContainer = ({ className, children }) => {
  return <main className={classNames(styles.root, className)}>{children}</main>;
};
