import React from 'react';
import styles from './AllBooksItem.module.scss';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { makeRatio } from '../../lib/makeRatio';
import { cutBookTitle } from '../../lib/cutBookTitle';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder, unsetOrder } from '../../store/slicers/allOrders.slicer';
import classNames from 'classnames';
import { selectUserEmail } from '../../store/selectors/user.selector';
import { selectAllOrderBooks } from '../../store/selectors/allOrders.selector';
import { isBookTaken } from '../../lib/findingBook';

export const AllBooksItem = ({
  alt,
  name,
  author,
  imageUrl,
  ratio,
  id,
  released,
  description,
  length,
}) => {
  const allOrdersList = useSelector(selectAllOrderBooks);

  const starRatio = makeRatio(ratio);

  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const isTakenByAnyone = isBookTaken(allOrdersList, id);

  const isTakenByCurrentUser = Boolean(
    allOrdersList.find(
      (order) => order.bookId === id && order.email === userEmail,
    ),
  );

  const handleReturnBook = (event) => {
    event.preventDefault();
    dispatch(unsetOrder({ bookId: id, email: userEmail }));
  };

  const handleTakeBook = (event) => {
    event.preventDefault();
    dispatch(setOrder({ bookId: id, email: userEmail }));
  };

  return (
    <div className={styles.AllBooksItem}>
      <NavLink
        to={`/books/${id}`}
        // state={{ alt, name, author, imageUrl, released, description, length }}
        className={styles.AllBooksItemImg}
      >
        <img src={imageUrl} alt={alt} className={styles.AllBooksItemImg} />
      </NavLink>
      <Button
        className={
          isTakenByAnyone
            ? classNames(styles.AllBooksItemBtn, styles.AllBooksItemBtn_taken)
            : classNames(styles.AllBooksItemBtn)
        }
        text={isTakenByAnyone ? 'Taken' : 'Available'}
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
        text={isTakenByCurrentUser ? 'Return' : 'Order'}
        onClick={isTakenByCurrentUser ? handleReturnBook : handleTakeBook}
      />
    </div>
  );
};
