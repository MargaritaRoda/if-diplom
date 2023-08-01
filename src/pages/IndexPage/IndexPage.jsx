import React from 'react';
import styles from './IndexPage.module.scss';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ArticleContainer } from '../../components/ArticleContainer';
import { Icon } from '../../components/Icon';
import { Container } from '../../components/Container';

const PUBLIC_PATH = process.env.PUBLIC_URL;

export const IndexPage = () => {
  return (
    <Container>
      <Header />

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
  );
};
