import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { HeaderNav } from '../HeaderNav';
import { HeaderNavLink } from '../HeaderNavLink';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { DropDown } from '../../pages/DropDown';
import { createPortal } from 'react-dom';
import { isUserAuthorized } from '../../store/selectors/user.selector';
import { Form } from 'react-router-dom';

export const Header = ({
  onClick,
  getSearchResult,
  value,
  isActive = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isUserAuth = useSelector(isUserAuthorized);
  console.log('authorize', isUserAuth);

  const handleOpenDropDown = (event) => {
    setIsVisible(!isVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Icon name="mainLogo" />
      </div>
      <div className={styles.headerInputWrap}>
        {isUserAuth ? (
          <Input
            className={classNames(
              styles.headerInput,
              styles.headerInput_active,
            )}
            placeholder="  &#128269; Search by author, title, name"
            onClick={getSearchResult}
            value={value}
          />
        ) : (
          <Input
            className={styles.headerInput}
            placeholder="  &#128269; Search by author, title, name"
            readonly
          />
        )}
      </div>
      <HeaderNav>
        {isUserAuth ? (
          <>
            <HeaderNavLink text="All books" isActive path={'/allBooksPage'} />
            <HeaderNavLink text="Your orders" isActive path={'/MainUserPage'} />
            <Icon
              name="account"
              className={styles.headerAccount}
              onClick={handleOpenDropDown}
            />
            <Icon
              name="dropDown"
              className={styles.headerDropDown}
              onClick={handleOpenDropDown}
            />
          </>
        ) : (
          <>
            <HeaderNavLink text="Log In" onClick={onClick} path={'/login'} />
            <HeaderNavLink text="Sign Up" onClick={onClick} path={'/signup'} />
          </>
        )}
      </HeaderNav>
      {createPortal(<DropDown visible={isVisible} />, document.body)}
    </header>
  );
};
