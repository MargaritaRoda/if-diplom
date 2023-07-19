import React from 'react';
import styles from './AllBooksItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio, randomRatio } from '../../lib/makeRatio';
import { cutBookTitle } from '../../lib/cutBookTitle';
import { NavLink } from 'react-router-dom';

export const AllBooksItem = ({
  alt,
  name,
  author,
  imageUrl,
  ratio,
  textBtn,
  id,
  released,
  description,
  length,
}) => {
  const starRatio = makeRatio(randomRatio);

  return (
    <div className={styles.AllBooksItem}>
      <NavLink
        to={`/books/${id}`}
        state={{ alt, name, author, imageUrl, released, description, length }}
        className={styles.AllBooksItemImg}
      >
        <img src={imageUrl} alt={alt} className={styles.AllBooksItemImg} />
      </NavLink>
      <Button className={styles.AllBooksItemBtn} text="Available" />

      <h4 className={styles.AllBooksItemTitle}>{cutBookTitle(name)}</h4>
      <p className={styles.AllBooksItemSubTitle}>{author}</p>
      <div className={styles.AllBooksItemRatio}>
        {starRatio.map((item, index) => {
          return <Icon name={item} key={index} className={styles.ratioStar} />;
        })}
      </div>

      <Button className={styles.AllBooksItemBtnOrder} text="Order" />
    </div>
  );
};
