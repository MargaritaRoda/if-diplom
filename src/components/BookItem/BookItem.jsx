import React from 'react';
import styles from './BookItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio } from '../../lib/makeRatio';
import { NavLink, useNavigate } from 'react-router-dom';
import { cutBookTitle } from '../../lib/cutBookTitle';

export const BookItem = ({
  name,
  imageUrl,
  ratio,
  textBtn,
  id,
  author,
  released,
  description,
  length,
}) => {
  const navigate = useNavigate();

  const handleCheckStatusBook = (event) => {
    event.preventDefault();
    // dispatch action date of order
  };

  const starRatio = makeRatio(ratio);
  console.log('ratio', ratio);

  return (
    <div className={styles.root}>
      <NavLink
        to={`/books/${id}`}
        state={{ name, author, imageUrl, released, description, length }}
      >
        <img src={imageUrl} alt={name} className={styles.img} />
      </NavLink>
      <p className={styles.title}>{cutBookTitle(name)}</p>
      <div className={styles.ratio}>
        {starRatio.map((item, index) => {
          return <Icon name={item} key={index} className={styles.ratioStar} />;
        })}
      </div>
      <Button
        className={styles.btn}
        text={textBtn}
        onClick={handleCheckStatusBook}
      />
    </div>
  );
};
