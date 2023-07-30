import React from 'react';
import styles from './ArticleContainer.module.scss';
import classNames from 'classnames';
import { Loader } from '../Loader';

export const ArticleContainer = ({ className, children, isLoading, text }) => {
  return (
    <main className={classNames(styles.root, className)}>
      {!children.length ? <p className={styles.rootText}>{text}</p> : children}
    </main>
  );
};
