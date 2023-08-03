import React, { useState } from 'react';
import styles from './BookDescription.module.scss';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeRatio } from '../../lib/makeRatio';
import { Icon } from '../Icon';
import { setOrder, unsetOrder } from '../../store/slicers/allOrders.slicer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/selectors/user.selector';
import { selectAllOrderBooks } from '../../store/selectors/allOrders.selector';

export const BookDescription = ({
  title,
  author,
  src,
  ratio,
  textBtn,
  id,
  released,
  description,
  length,
  ...props
}) => {
  console.log('props: ', props);

  const [showShortText, setShowShortText] = useState(true);
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const allOrdersList = useSelector(selectAllOrderBooks);

  const starRatio = makeRatio(ratio);

  console.log('id: ', id);

  const isTakenByCurrentUser = Boolean(
    allOrdersList.find(
      (order) => order.bookId === id && order.email === userEmail,
    ),
  );

  console.log('isTakenByCurrentUser:', isTakenByCurrentUser);

  const handleShowText = () => {
    setShowShortText((currentState) => !currentState);
  };

  const handleOrderBook = (event) => {
    event.preventDefault();
    // setReturnBook(!returnBook);
    dispatch(setOrder({ bookId: id, email: userEmail }));
  };

  const handleReturnBook = (event) => {
    event.preventDefault();
    dispatch(unsetOrder({ bookId: id, email: userEmail }));
  };

  return (
    <div className={styles.bookDescription}>
      <div className={styles.bookDescriptionImg}>
        <img src={src} alt={title} className={styles.bookDescriptionImg} />
      </div>
      {/*<div>*/}
      <div className={styles.bookDescriptionRatio}>
        {starRatio.map((item, index) => {
          return <Icon name={item} key={index} className={styles.ratioStar} />;
        })}
      </div>
      <h3 className={styles.bookDescriptionTitle}>{title}</h3>
      <div className={styles.bookDescriptionAuthor}>{author}</div>
      <div
        className={styles.bookDescriptionRelease}
      >{`${length} pages, released in ${released}`}</div>
      <Button
        className={styles.bookDescriptionBtn}
        text={isTakenByCurrentUser ? 'Return' : 'Order'}
        onClick={isTakenByCurrentUser ? handleReturnBook : handleOrderBook}
      />
      <h4 className={styles.bookDescriptionSubTitle}>About book</h4>

      <div
        className={classNames(
          styles.bookDescriptionDescr,
          showShortText && styles.bookDescriptionDescr_short,
        )}
        onClick={handleShowText}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {showShortText && (
        <Button
          className={styles.bookDescriptionBtnShow}
          text="Show more"
          onClick={handleShowText}
        />
      )}
      {/*</div>*/}
    </div>
  );
};

Button.defaultProps = {
  visible: true,
};
Button.propTypes = {
  visible: PropTypes.bool.isRequired,
};
