import React, { useState } from 'react';
import styles from './AllBooksPage.module.scss';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { PageLayout } from '../../components/PageLayout';
import { useGetAllBooksQuery } from '../../store/slicers/apiSlice';
import { AllBooksList } from '../../components/AllBooksList';
import { useDispatch, useSelector } from 'react-redux';
import { setInputSearchText } from '../../store/slicers/inputSearchText.slicer';
import { selectSearchText } from '../../store/selectors/inputSearchText.selector';

export const AllBooksPage = () => {
  const dispatch = useDispatch();

  /** @type {{ searchText: String }} */
  const searchText = useSelector(selectSearchText);

  const [quantityBook, setQuantityBook] = useState(4);

  const { data: books, isLoading } = useGetAllBooksQuery(undefined, {
    selectFromResult: (state) => {
      return state;
    },
  });

  let filteredBook = books || [];
  if (searchText) {
    filteredBook = filteredBook.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText) ||
        item.author.toLowerCase().includes(searchText),
    );
  }
  filteredBook = filteredBook.slice(0, quantityBook);

  const handleSearchResults = (event) => {
    event.preventDefault();
    const insertText = event.target.value;
    dispatch(setInputSearchText({ searchText: insertText }));
  };

  const handleShowMoreBooks = () => {
    setQuantityBook((prevState) => prevState + 4);
  };

  return (
    <PageLayout>
      <Container>
        <Header isActive={true} onSearchTextChange={handleSearchResults} />
        <h3 className={styles.allBooksPageTitle}>All books</h3>
        <div className={styles.allBooksPageWrapper}>
          <AllBooksList items={filteredBook} isLoading={isLoading} />
        </div>
        <div className={styles.actions}>
          <Button
            text="Show More"
            className={styles.allBooksPageBtn}
            onClick={handleShowMoreBooks}
          />
        </div>
      </Container>
      <Footer />
    </PageLayout>
  );
};
