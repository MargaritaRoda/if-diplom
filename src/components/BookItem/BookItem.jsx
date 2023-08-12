import React from 'react';
import styles from './BookItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio } from '../../lib/makeRatio';
import { NavLink } from 'react-router-dom';
import { cutBookTitle } from '../../lib/cutBookTitle';
import {
  refreshOrders,
  unsetOrder,
} from '../../store/slicers/allOrders.slicer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/selectors/user.selector';

export const BookItem = ({ name, imageUrl, ratio, id, isPendingOrder }) => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const starRatio = makeRatio(ratio);

  const handleCheckStatus = () => {
    dispatch(refreshOrders());
  };
  const handleReturnBook = () => {
    dispatch(unsetOrder({ bookId: id, email: userEmail }));
  };

  return (
    <div className={styles.root}>
      <NavLink to={`/books/${id}`}>
        <img src={imageUrl} alt={name} className={styles.img} />
      </NavLink>
      <p className={styles.title}>{cutBookTitle(name)}</p>
      <div>
        {starRatio.map((item, index) => {
          return <Icon name={item} key={index} className={styles.ratioStar} />;
        })}
      </div>
      <Button
        className={styles.btn}
        text={isPendingOrder ? 'Check Status' : 'Return'}
        onClick={isPendingOrder ? handleCheckStatus : handleReturnBook}
      />
    </div>
  );
};
