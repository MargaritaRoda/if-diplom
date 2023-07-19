import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Container.module.scss';
export const Container = ({ className, children }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};
