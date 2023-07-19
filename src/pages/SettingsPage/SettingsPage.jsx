import React from 'react';
import styles from './SettingsPage.module.scss';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';

export const SettingsPage = () => {
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

          <form action="/" className={styles.rootForm}>
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
              id="Email"
              name="Email"
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
              name="password"
              className={styles.rootInput}
              type="newpassword"
              placeholder="new password"
              required
            />
            <Button className={styles.rootBtn} type="submit" text="Save" />
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};
