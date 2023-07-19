import React from 'react';
import styles from './AuthorizationPage.module.scss';
import { Input } from '../../components/Input';
import { UserForm } from '../../components/UserForm';

export const AuthorizationPage = () => {
  return (
    <UserForm text="Log In to Fox Library" textBtn="Sign in">
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
    </UserForm>
  );
  {
    /*<div className={styles.wrapperLoginPage}></div>*/
  }
  {
    /*<div className={styles.root}>*/
  }
  {
    /*    <div className={styles.rootCloseWrap}>*/
  }
  {
    /*        <Icon name='close' className={styles.rootClose}/>*/
  }
  {
    /*    </div>*/
  }
  {
    /*    <h3 className={styles.rootTitle} >Log In to Fox Library</h3>*/
  }
  {
    /*    <form action="/"  className={styles.rootForm}>*/
  }
  {
    /*        <label htmlFor='username' className={styles.rootLabel}>Username</label>*/
  }
  {
    /*        <Input id='username' name='username' className={styles.rootInput} placeholder='jamie' required/>*/
  }
  {
    /*        <label htmlFor='password' className={styles.rootLabel}>Password</label>*/
  }
  {
    /*        <Input id='password' name='password' className={styles.rootInput} type='password' placeholder='abcd' required/>*/
  }
  {
    /*        <Button className={styles.rootBtn} type='submit' text='Log in'/>*/
  }
  {
    /*    </form>*/
  }
  {
    /*</div>*/
  }
};
