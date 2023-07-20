import React, { useState } from 'react';
import styles from './DropDown.modules.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slicers/user.slicer';
import { usernameSelector } from '../../store/selectors/user.selector';
import classNames from 'classnames';
import { Button } from '../../components/Button';
import { cutUsername } from '../../lib/cutUsername';

export const DropDown = ({ visible }) => {
  const dispatch = useDispatch();
  const username = useSelector(usernameSelector);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className={classNames(styles.root, !visible && styles.root_hidden)}>
      <p className={styles.name}>{cutUsername(username)}</p>

      <NavLink to={'/settings'} className={styles.settingsLink}>
        Settings
      </NavLink>
      <NavLink to={'/MainUserPage'} className={styles.settingsLink}>
        My orders
      </NavLink>
      <hr
        className={classNames(styles.settingsLink, styles.settingsLink_line)}
      />
      <Button
        onClick={handleLogOut}
        className={styles.logoutBtn}
        text="Log out"
      />
    </div>
  );
};
