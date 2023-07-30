import React from 'react';
import styles from './Loader.module.scss';
import classNames from 'classnames';

export const Loader = ({ className, text }) => {
  return (
    <main className={classNames(styles.root, className)}>
      <p className={styles.loadingMessage}>{text}</p>
    </main>
  );
};

Loader.defaultProps = {
  text: 'Loading...',
};
