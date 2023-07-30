import React from 'react';
import styles from './BookItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio } from '../../lib/makeRatio';
import { NavLink, useNavigate } from 'react-router-dom';
import { cutBookTitle } from '../../lib/cutBookTitle';
import {
  unsetOrder,
  refreshOrders,
} from '../../store/slicers/allOrders.slicer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/selectors/user.selector';

export const BookItem = ({
  name,
  imageUrl,
  ratio,
  id,
  author,
  released,
  description,
  length,
  isPendingOrder,
}) => {
  const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckStatusBook = (event) => {
    event.preventDefault();
    // dispatch action date of order
  };

  const starRatio = makeRatio(ratio);
  console.log('ratio', ratio);

  const handleCheckStatus = () => {
    dispatch(refreshOrders());
  };
  const handleReturnBook = () => {
    dispatch(unsetOrder({ bookId: id, email: userEmail }));
  };

  return (
    <div className={styles.root}>
      <NavLink
        to={`/books/${id}`}
        // state={{ name, author, imageUrl, released, description, length }}
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
        text={isPendingOrder ? 'Check Status' : 'Return'}
        onClick={isPendingOrder ? handleCheckStatus : handleReturnBook}
      />
    </div>
  );
};
