import React from 'react';
import styles from './IndexPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ArticleContainer } from '../../components/ArticleContainer';
import { Icon } from '../../components/Icon';
import { SettingsPage } from '../SettingsPage';
import { Container } from '../../components/Container';

const PUBLIC_PATH = process.env.PUBLIC_URL;

export const IndexPage = () => {
  const navigate = useNavigate();
  const handleGo = (event) => {
    navigate('/login');
  };
  const handleAuth = (event) => {
    navigate('/signin');
  };

  return (
    <>
      <Container>
        <Header onClick1={handleGo} />

        <ArticleContainer className={styles.mainSection}>
          <div className={styles.mainLeft}>
            <h2 className={styles.mainTitle}>BIld your library</h2>
            <div className={styles.mainText}>
              Over 400.000 books <br /> from fiction to the
              <br /> business literature
            </div>
            <Button
              type="button"
              className={styles.mainButton}
              text="Let's start"
            />
          </div>
          <div className={styles.mainRight}>
            <Icon className={styles.mainImg} name="titleImg" />
          </div>
        </ArticleContainer>
      </Container>
      <Footer />
    </>
  );
};
