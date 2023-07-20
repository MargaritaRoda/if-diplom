import React, { useState } from 'react';
import styles from './AllBooksItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio, randomRatio } from '../../lib/makeRatio';
import { cutBookTitle } from '../../lib/cutBookTitle';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../store/slicers/allOrders.slicer';
import { allBooks } from '../../store/selectors/apiAllBooks.selector';
import classNames from 'classnames';
import { userInfo } from '../../store/selectors/user.selector';

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
  available,
}) => {
  const starRatio = makeRatio(randomRatio);

  const dispatch = useDispatch();
  const userEmail = useSelector(userInfo);

  const handleOrderBook = (event) => {
    event.preventDefault();
    dispatch(setOrder({ bookId: id, email: userEmail }));
  };

  const handleAvailableBook = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.AllBooksItem}>
      <NavLink
        to={`/books/${id}`}
        state={{ alt, name, author, imageUrl, released, description, length }}
        className={styles.AllBooksItemImg}
      >
        <img src={imageUrl} alt={alt} className={styles.AllBooksItemImg} />
      </NavLink>
      <Button
        className={
          available
            ? classNames(styles.AllBooksItemBtn)
            : classNames(styles.AllBooksItemBtn, styles.AllBooksItemBtn_taken)
        }
        text={available ? 'Available' : 'Taken'}
        onClick={handleAvailableBook}
      />

      <h4 className={styles.AllBooksItemTitle}>{cutBookTitle(name)}</h4>
      <p className={styles.AllBooksItemSubTitle}>{author}</p>
      <div className={styles.AllBooksItemRatio}>
        {starRatio.map((item, index) => {
          return <Icon name={item} key={index} className={styles.ratioStar} />;
        })}
      </div>

      <Button
        className={styles.AllBooksItemBtnOrder}
        text="Order"
        onClick={handleOrderBook}
      />
    </div>
  );
};
