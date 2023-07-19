import React from 'react';
import styles from './BookPage.module.scss';
import { ArticleContainer } from '../../components/ArticleContainer';
import { BookDescription } from '../../components/BookDescription';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { useLocation } from 'react-router-dom';

export const BookPage = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <div className={styles.mainUserPage}>
        <Container>
          <Header />

          <ArticleContainer className={styles.bookList}>
            <BookDescription
              src={state.imageUrl}
              alt={state.name}
              description={state.description}
              title={state.name}
              author={state.author}
              released={state.released}
              length={state.length}
            />
          </ArticleContainer>
        </Container>
      </div>
      <Footer />
    </>
  );
};
