import React, { useState } from 'react';
import styles from './BookDescription.module.scss';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeRatio, randomRatio } from '../../lib/makeRatio';
import { Icon } from '../Icon';

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
}) => {
  const [showBtn, setShowBtn] = useState(true);
  const [showClass, setShowClass] = useState(true);

  const starRatio = makeRatio(randomRatio);

  const handleShowText = () => {
    setShowBtn(!showBtn);
    setShowClass(!showClass);
  };

  return (
    <div className={styles.bookDescription}>
      <div className={styles.bookDescriptionImg}>
        <img src={src} alt={title} className={styles.bookDescriptionImg} />
      </div>
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
      <Button className={styles.bookDescriptionBtn} text="Order" />
      <h4 className={styles.bookDescriptionSubTitle}>About book</h4>
      <p
        className={classNames(
          styles.bookDescriptionDescr,
          showClass && styles.bookDescriptionDescrShort,
        )}
        onClick={handleShowText}
      >
        {description}
      </p>

      {showBtn && (
        <Button
          className={styles.bookDescriptionBtnShow}
          text="Show more"
          visible={showBtn}
          onClick={handleShowText}
        />
      )}
    </div>
  );
};

Button.defaultProps = {
  visible: true,
};
Button.propTypes = {
  visible: PropTypes.bool.isRequired,
};
