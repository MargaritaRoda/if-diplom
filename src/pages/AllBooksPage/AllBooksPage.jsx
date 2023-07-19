import React, { useState } from 'react';
import styles from './AllBooksPage.module.scss';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { useGetAllBooksQuery } from '../../store/slicers/apiSlice';
import { AllBooksList } from '../../components/AllBooksList';

export const AllBooksPage = () => {
  const [quantityBook, setQuantityBook] = useState(4);
  console.log('allBooksPage render');

  const { data: books, isLoading } = useGetAllBooksQuery();
  console.log('data', books);

  const handleShowMoreBooks = (event) => {
    setQuantityBook((prevState) => prevState + 4);
  };
  console.log('quantityBook', quantityBook);
  return (
    <>
      <Container>
        <Header isActive={true} />
        <h3 className={styles.allBooksPageTitle}>All books</h3>
        <div className={styles.allBooksPageWrapper}>
          <AllBooksList
            items={books}
            isLoading={isLoading}
            numberOfBooks={quantityBook}
          />
        </div>
        <Button
          text="Show More"
          className={styles.allBooksPageBtn}
          onClick={handleShowMoreBooks}
        />
      </Container>
      <Footer />
    </>
  );
};
