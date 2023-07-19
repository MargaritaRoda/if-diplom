import React from 'react';
import styles from './Header.module.scss';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { HeaderNav } from '../HeaderNav';
import { HeaderNavLink } from '../HeaderNavLink';
import { useSelector } from 'react-redux';
import { selectIsUserAuthorized } from '../../store/selectors/user.selector';
import classNames from 'classnames';

export const Header = ({ onClick, onClick2, isActive = false }) => {
  const isUserAuth = useSelector(selectIsUserAuthorized);
  console.log('authorize', isUserAuth);
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Icon name="mainLogo" />
      </div>
      <div className={styles.headerInputWrap}>
        {isUserAuth ? (
          <Input
            className={classNames(styles.headerInput, styles.active)}
            placeholder="  &#128269; Search by author, title, name"
          />
        ) : (
          <Input
            className={styles.headerInput}
            placeholder="  &#128269; Search by author, title, name"
          />
        )}
      </div>
      <HeaderNav>
        {isUserAuth ? (
          <>
            <HeaderNavLink text="All books" isActive path={'/allBooksPage'} />
            <HeaderNavLink text="Your orders" isActive path={'/MainUserPage'} />
            <Icon name="account" className={styles.headerAccount} />
            <Icon name="dropDown" className={styles.headerDropDown} />
          </>
        ) : (
          <>
            <HeaderNavLink text="Log In" onClick={onClick} path={'/login'} />
            <HeaderNavLink text="Sign In" onClick={onClick} path={'/signin'} />
          </>
        )}
      </HeaderNav>
    </header>
  );
};
