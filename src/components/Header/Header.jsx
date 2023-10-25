import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { HeaderNav } from '../HeaderNav';
import { HeaderNavLink } from '../HeaderNavLink';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { DropDown } from '../../pages/DropDown';
import { isUserAuthorized } from '../../store/selectors/user.selector';
import styles from './Header.module.scss';

export const Header = ({ onClick, onSearchTextChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleUserMenuHiding = useCallback(() => {
    setIsVisible(false);
  }, []);

  const isUserAuth = useSelector(isUserAuthorized);
  // console.log('authorize', isUserAuth);

  const handleOpenDropDown = () => {
    setIsVisible(!isVisible);
  };
  const handleGoIndexPage = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Icon name="mainLogo" onClick={handleGoIndexPage} />
      </div>

      <div
        className={
          isUserAuth
            ? classNames(styles.headerInputWrap, styles.headerInputWrap_active)
            : styles.headerInputWrap
        }
      >
        <Icon name="search" className={styles.headerInputSvg} />
        <Input
          className={styles.headerInput}
          placeholder="Search by author, title, name"
          onChange={onSearchTextChange}
          readonly={!isUserAuth}
        />
      </div>
      <HeaderNav>
        {isUserAuth ? (
          <>
            <HeaderNavLink text="All books" isActive path={'/books'} />
            <HeaderNavLink text="Your orders" isActive path={'/orders'} />
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
        <DropDown visible={isVisible} onHidden={handleUserMenuHiding} />
      </HeaderNav>
    </header>
  );
};
