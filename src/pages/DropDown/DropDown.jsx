import React, { useEffect, useRef } from 'react';
import styles from './DropDown.modules.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slicers/user.slicer';
import { usernameSelector } from '../../store/selectors/user.selector';
import classNames from 'classnames';
import { Button } from '../../components/Button';
import { cutUsername } from '../../lib/cutUsername';

export const DropDown = ({ visible, onHidden }) => {
  const dispatch = useDispatch();
  const username = useSelector(usernameSelector);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  let dropdownNode = useRef();

  useEffect(() => {
    let isFirstClick = true;

    const handleClickOutside = (e) => {
      console.log('clicked outside | visible: %s', visible, e.target);
      if (isFirstClick) {
        isFirstClick = false;
        return;
      }
      if (visible && e.target !== dropdownNode.current) {
        onHidden();
      }
    };
    if (visible) {
      console.log('add callback into body | visible: %s', visible);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (visible) {
        console.log('remove callback from body | visible: %s', visible);
        document.removeEventListener('click', handleClickOutside);
      }
    };
  }, [visible, onHidden]);

  return (
    <div
      className={classNames(styles.root, !visible && styles.root_hidden)}
      ref={dropdownNode}
    >
      <p className={styles.name}>{cutUsername(username)}</p>

      <NavLink to={'/settings'} className={styles.settingsLink}>
        Settings
      </NavLink>
      <NavLink to={'/orders'} className={styles.settingsLink}>
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
