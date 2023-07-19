import React from 'react';
import classNames from 'classnames';
import { useStyles } from './Footer.styles';

export const FooterLink = ({ text }) => {
  const classes = useStyles();
  return (
    <li
      className={classNames(
        classes.footerLinksItem,
        classes.footerLinksItemDesktop,
      )}
    >
      <a href="#">{text}</a>
    </li>
  );
};
