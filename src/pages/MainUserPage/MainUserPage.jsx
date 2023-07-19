import React from 'react';
import styles from './MainUserPage.module.scss';
import { Header } from '../../components/Header';
import { ArticleContainer } from '../../components/ArticleContainer';
import { AllBooksPage } from '../AllBooksPage';
import { BookItem } from '../../components/BookItem';
import { useDispatch } from 'react-redux';

export const MainUserPage = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.mainUserPage}>
      <div className={styles.container}>
        <Header />

        <ArticleContainer className={styles.bookList}>
          <h3 className={styles.bookListTitle}>Waiting for</h3>
          <div className={styles.bookListItemWrapper}>
            <BookItem nameOfBook={'name of book'} />
          </div>
        </ArticleContainer>
        <ArticleContainer className={styles.bookList}>
          <h3 className={styles.bookListTitle}>List of your books</h3>
          <div className={styles.bookListItemWrapper}>
            <BookItem nameOfBook={'name of book'} />
            <BookItem nameOfBook={'name of book'} />
          </div>
        </ArticleContainer>
      </div>
    </div>
  );
};
