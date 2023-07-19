import React from 'react';
import styles from './UserForm.module.scss';
import { Icon } from '../Icon';

export const UserForm = ({ text, children }) => {
  return (
    <>
      <div className={styles.wrapperLoginPage}></div>
      <div className={styles.root}>
        <div className={styles.rootCloseWrap}>
          <Icon name="close" className={styles.rootClose} />
        </div>
        <h3 className={styles.rootTitle}>{text}</h3>
        {children}
      </div>
    </>
  );
};
