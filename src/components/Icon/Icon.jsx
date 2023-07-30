import React from 'react';
import classNames from 'classnames';
import styles from './Icon.modules.scss';
const PUBLIC_PATH = process.env.PUBLIC_URL;

export const Icon = ({ className, name, onClick }) => {
  return (
    <svg className={classNames(styles.root, className)} onClick={onClick}>
      <use href={`${PUBLIC_PATH}/sprite.svg#${name}`} />
    </svg>
  );
};
