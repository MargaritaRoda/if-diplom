import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BookPage.module.scss';
import { BookDescription } from '../../components/BookDescription';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Loader } from '../../components/Loader';
import { useGetAllBooksQuery } from '../../store/slicers/apiSlice';
import { PageLayout } from '../../components/PageLayout';

export const BookPage = () => {
  let { id: bookId } = useParams();
  const { data, isLoading } = useGetAllBooksQuery();

  const allBooks = data || [];

  const book = allBooks.find((book) => book.id === bookId);

  return (
    <PageLayout>
      <div className={styles.mainUserPage}>
        <Container>
          <Header />

          <div className={styles.bookList}>
            {isLoading && <Loader />}

            {!isLoading && (
              <>
                {book ? (
                  <BookDescription
                    src={book.imageUrl}
                    ratio={book.ratio}
                    id={book.id}
                    alt={book.name}
                    description={book.description}
                    title={book.name}
                    author={book.author}
                    released={book.released}
                    length={book.length}
                  />
                ) : (
                  <h3>Book is not found</h3>
                )}
              </>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </PageLayout>
  );
};
