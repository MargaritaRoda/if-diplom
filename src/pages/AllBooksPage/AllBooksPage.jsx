import React, { useState } from 'react';
import styles from './AllBooksPage.module.scss';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { useGetAllBooksQuery } from '../../store/slicers/apiSlice';
import { AllBooksList } from '../../components/AllBooksList';
import { useDispatch, useSelector } from 'react-redux';
import { setInputSearchText } from '../../store/slicers/inputSearchText.slicer';
import { insertSearchText } from '../../store/selectors/inputSearchText.selector';

export const AllBooksPage = () => {
  const dispatch = useDispatch();
  const resultInput = useSelector(insertSearchText);

  console.log('resultInput', resultInput);

  const [quantityBook, setQuantityBook] = useState(4);
  // console.log('allBooksPage render');

  const { data: books, isLoading } = useGetAllBooksQuery(undefined, {
    selectFromResult: (state) => {
      // console.log(state)
      // // if (resultInput !== '') {
      // //   return books?.filter(
      // //     (item) =>
      // //       item.name.includes(resultInput) ||
      // //       item.author.includes(resultInput),
      // //   );
      // // }
      // // return books
      return state;
    },
  });

  let filteredBook = books;
  console.log();
  console.log(resultInput);

  if (filteredBook && resultInput) {
    filteredBook = filteredBook.filter(
      (item) =>
        item.name.includes(resultInput) || item.author.includes(resultInput),
    );
  }

  console.log(filteredBook);

  const handleSearchResults = (event) => {
    event.preventDefault();
    const insertText = event.target.value;
    dispatch(setInputSearchText({ searchText: insertText }));
  };

  const handleShowMoreBooks = (event) => {
    setQuantityBook((prevState) => prevState + 4);
  };

  return (
    <>
      <Container>
        <Header isActive={true} getSearchResult={handleSearchResults} />
        <h3 className={styles.allBooksPageTitle}>All books</h3>
        <div className={styles.allBooksPageWrapper}>
          <AllBooksList
            items={filteredBook}
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
