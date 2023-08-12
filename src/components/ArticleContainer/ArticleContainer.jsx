import React from 'react';
import styles from './ArticleContainer.module.scss';
import classNames from 'classnames';

export const ArticleContainer = ({ className, children, text }) => {
  return (
    <main className={classNames(styles.root, className)}>
      {!children.length ? <p className={styles.rootText}>{text}</p> : children}
    </main>
  );
};
