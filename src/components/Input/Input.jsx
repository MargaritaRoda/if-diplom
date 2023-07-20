import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

export const Input = ({
  type,
  className,
  placeholder,
  name,
  id,
  value,
  required,
  readonly,
}) => {
  return (
    <input
      type={type}
      className={classNames(styles.root, className)}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      required={required}
      readOnly={readonly}
    />
  );
};
