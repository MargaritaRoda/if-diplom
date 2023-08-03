import React from 'react';
import styles from './SettingsPage.module.scss';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors/user.selector';
import { Form } from 'react-router-dom';
import { login } from '../../store/slicers/user.slicer';
import { updateUser } from '../../store/slicers/allUsers.slicer';
import { updateUserOrdersEmail } from '../../store/slicers/allOrders.slicer';
import { PageLayout } from '../../components/PageLayout';
import { selectAllUsers } from '../../store/selectors/allUsers.selector';

export const SettingsPage = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);

  /** @type {{ username: String, password: String, email: String, birthdate: String }} */
  const user = useSelector(selectUser);

  const handleChangePassword = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { username, birthdate, email, newpassword } = data;

    if (
      user.email !== email &&
      Boolean(
        allUsers.find((user) => {
          return user.email === email;
        }),
      )
    ) {
      alert('Such email is already exists');
    } else {
      let password = newpassword || user.password;
      dispatch(login({ username, birthdate, email, password }));
      dispatch(
        updateUser({
          oldEmail: user.email,
          newUser: { username, birthdate, email, password },
        }),
      );
      dispatch(
        updateUserOrdersEmail({ oldEmail: user.email, newEmail: email }),
      );
    }
  };

  return (
    <PageLayout>
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
              placeholder="You username"
              defaultValue={user.username}
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
              placeholder="Your birthdate"
              defaultValue={user.birthdate}
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
              placeholder="Your email address"
              defaultValue={user.email}
              required
            />
            <label htmlFor="password" className={styles.rootLabel}>
              Current Password
            </label>
            <Input
              id="password"
              name="password"
              className={styles.rootInput}
              type="password"
              placeholder="Your current password"
            />
            <label htmlFor="newpassword" className={styles.rootLabel}>
              New Password
            </label>
            <Input
              id="newpassword"
              name="newpassword"
              className={styles.rootInput}
              type="newpassword"
              placeholder="Your new password"
            />
            <Button className={styles.rootBtn} type="submit" text="Save" />
          </Form>
        </div>
      </Container>
      <Footer />
    </PageLayout>
  );
};
