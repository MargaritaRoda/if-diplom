import React from 'react';
import styles from './BookItem.module.scss';
import { Button } from '../Button';

export const BookItem = ({ onClick, alt, nameOfBook }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <div>
        <img src={'#'} alt={alt} className={styles.img} />
      </div>
      <p className={styles.title}>{nameOfBook}</p>
      <div className={styles.ratio}>
        &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
      </div>
      <Button className={styles.btn} text="Check status" />
    </div>
  );
};
