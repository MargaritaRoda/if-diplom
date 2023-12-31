import React from 'react';
import styles from './AuthorizationPage.module.scss';
import { Input } from '../../components/Input';
import { UserForm } from '../../components/UserForm';
import { Form, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../store/selectors/allUsers.selector';
import { Button } from '../../components/Button';
import { findingUser } from '../../lib/findingUser';
import { login } from '../../store/slicers/user.slicer';

export const AuthorizationPage = () => {
  const dispatch = useDispatch();
  const allUsersList = useSelector(selectAllUsers);

  const navigate = useNavigate();

  const handleAuthorize = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { username, password } = data;

    const user = findingUser(allUsersList, {
      username,
      password,
    });
    if (!user) {
      navigate('/signup');
    } else {
      navigate('/books');
      dispatch(login(user));
    }
  };

  return (
    <UserForm text="Log In to Fox Library">
      <Form method="get" className={styles.rootForm} onSubmit={handleAuthorize}>
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
        <Button className={styles.rootBtn} type="submit" text="Log in" />
      </Form>
    </UserForm>
  );
};
