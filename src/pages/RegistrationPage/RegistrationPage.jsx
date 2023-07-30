import React from 'react';
import styles from './RegistrationPage.module.scss';
import { Input } from '../../components/Input';
import { UserForm } from '../../components/UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { login } from '../../store/slicers/user.slicer';
import { Button } from '../../components/Button';
import { setNewUser } from '../../store/slicers/allUsers.slicer';
import { selectAllUsers } from '../../store/selectors/allUsers.selector';

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);
  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { username, birthdate, email, password } = data;

    const isUserExists = allUsers.some((user) => user.email === email);
    if (isUserExists) {
      alert('Such email is already exists');
    } else {
      dispatch(login({ username, birthdate, email, password }));
      dispatch(setNewUser({ username, password, birthdate, email }));
      navigate('/books');
    }
  };

  return (
    <UserForm text="Welcome to Fox Library">
      <Form method="get" className={styles.rootForm} onSubmit={handleRegister}>
        <label htmlFor="username" className={styles.rootLabel}>
          Username
        </label>
        <Input
          id="username"
          name="username"
          className={styles.rootInput}
          placeholder="Your username"
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
          placeholder="Your bithdate"
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
          placeholder="Your email"
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
          placeholder="Your password"
          required
        />
        <Button className={styles.rootBtn} type="submit" text="Sign up" />
      </Form>
    </UserForm>
  );
};
