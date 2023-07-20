import React from 'react';
import styles from './SettingsPage.module.scss';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  passwordSelector,
  selectAllInformation,
} from '../../store/selectors/user.selector';
import { Form } from 'react-router-dom';
import { login } from '../../store/slicers/user.slicer';
import { setNewUser } from '../../store/slicers/allUsers.slicer';

export const SettingsPage = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(passwordSelector);

  const handleChangePassword = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { username, birthdate, email, password, newpassword } = data;
    dispatch(login({ username, birthdate, email, password: newpassword }));
    dispatch(setNewUser({ username, birthdate, email, password: newpassword }));
  };

  return (
    <>
      <Container>
        <Header />
        <div className={styles.root}>
          <h3 className={styles.rootTitle}>Settings</h3>
          <div className={styles.rootCloseWrap}>
            <Icon name="account" className={styles.rootRegistrLogo} />
          </div>
          <Button
            className={styles.rootBtnChangePhoto}
            type="submit"
            text="Change photo"
          />

          <Form
            action="/"
            className={styles.rootForm}
            onSubmit={handleChangePassword}
          >
            <label htmlFor="username" className={styles.rootLabel}>
              Username
            </label>
            <Input
              id="username"
              name="username"
              className={styles.rootInput}
              placeholder="jamie"
              required
            />
            <label htmlFor="birthdate" className={styles.rootLabel}>
              Your birthdate
            </label>
            <Input
              id="birthdate"
              name="birthdate"
              className={styles.rootInput}
              type="date"
              placeholder="04.02.2000"
              required
            />
            <label htmlFor="email" className={styles.rootLabel}>
              Email
            </label>
            <Input
              id="email"
              name="email"
              className={styles.rootInput}
              type="email"
              placeholder="jamie@gmail.com"
              required
            />
            <label htmlFor="password" className={styles.rootLabel}>
              Password
            </label>
            <Input
              id="password"
              name="password"
              className={styles.rootInput}
              type="password"
              placeholder="abcd"
              required
            />
            <label htmlFor="newpassword" className={styles.rootLabel}>
              Password
            </label>
            <Input
              id="newpassword"
              name="newpassword"
              className={styles.rootInput}
              type="newpassword"
              placeholder="new password"
              required
            />
            <Button className={styles.rootBtn} type="submit" text="Save" />
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};
