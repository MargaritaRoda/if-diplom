import React, { useState } from 'react';
import styles from './AllBooksItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio } from '../../lib/makeRatio';
import { cutBookTitle } from '../../lib/cutBookTitle';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../store/slicers/allOrders.slicer';
import classNames from 'classnames';
import { userInfo } from '../../store/selectors/user.selector';
import { allOrderBooks } from '../../store/selectors/allOrders.selector';
import { findingBook } from '../../lib/findingBook';

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
  const allOrdersList = useSelector(allOrderBooks);
  const [returnBook, setReturnBook] = useState(false);

  const starRatio = makeRatio(ratio);

  const dispatch = useDispatch();
  const userEmail = useSelector(userInfo);
  const taken = findingBook(allOrdersList, id);

  const [status, setStatus] = useState(taken);

  const handleOrderBook = (event) => {
    event.preventDefault();
    setReturnBook(!returnBook);
    setStatus((prevState) => (prevState ? status : !status));
    dispatch(setOrder({ bookId: id, email: userEmail }));
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
          status
            ? classNames(styles.AllBooksItemBtn, styles.AllBooksItemBtn_taken)
            : classNames(styles.AllBooksItemBtn)
        }
        text={status ? 'Taken' : 'Available'}
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
        text={returnBook ? 'Return' : 'Order'}
        onClick={handleOrderBook}
      />
    </div>
  );
};
