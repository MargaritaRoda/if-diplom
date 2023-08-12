import React from 'react';
import styles from './UserForm.module.scss';
import { Icon } from '../Icon';
import { useNavigate } from 'react-router-dom';

export const UserForm = ({ text, children }) => {
  const navigate = useNavigate();
  const handleGoIndex = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <>
      <div className={styles.wrapperRegistrationPage}></div>
      <div className={styles.root}>
        <div className={styles.rootCloseWrap}>
          <Icon
            name="close"
            className={styles.rootClose}
            onClick={handleGoIndex}
          />
        </div>
        <h3 className={styles.rootTitle}>{text}</h3>
        {children}
      </div>
    </>
  );
};
