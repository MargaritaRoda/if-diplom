import React from 'react';
import styles from './MainUserPage.module.scss';
import { Header } from '../../components/Header';
import { ArticleContainer } from '../../components/ArticleContainer';
import { BookItem } from '../../components/BookItem';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAvailablePendingBooks } from '../../lib/allOrdersFunc';
import { userInfo } from '../../store/selectors/user.selector';
import { allOrderBooks } from '../../store/selectors/allOrders.selector';
import { useGetAllBooksQuery } from '../../store/slicers/apiSlice';
import { Footer } from '../../components/Footer';

export const MainUserPage = () => {
  const userId = useSelector(userInfo);
  const allOrderInfo = useSelector(allOrderBooks);
  const { data: books, isLoading } = useGetAllBooksQuery();

  const dispatch = useDispatch();

  const [pending, available] = getUserAvailablePendingBooks(
    books || [],
    allOrderInfo,
    userId,
  );

  console.log('pending', pending);
  return (
    <>
      <div className={styles.mainUserPage}>
        <div className={styles.container}>
          <Header />

          <ArticleContainer className={styles.bookList}>
            <h3 className={styles.bookListTitle}>Waiting for</h3>

            <ArticleContainer
              className={styles.bookListItemWrapper}
              text="Oops! You are not waiting for any book"
            >
              {pending.map((item) => {
                return (
                  <BookItem
                    name={item.name}
                    imageUrl={item.imageUrl}
                    ratio={item.ratio}
                    textBtn="Check status"
                    key={item.id}
                    {...item}
                  />
                );
              })}
            </ArticleContainer>
          </ArticleContainer>
          <ArticleContainer className={styles.bookList}>
            <h3 className={styles.bookListTitle}>List of your books</h3>
            <ArticleContainer
              className={styles.bookListItemWrapper}
              text="Oops! You haven't added any book yet"
            >
              {available.map((item) => {
                return (
                  <BookItem
                    name={item.name}
                    imageUrl={item.imageUrl}
                    ratio={item.ratio}
                    textBtn="Return"
                    key={item.id}
                    {...item}
                  />
                );
              })}
            </ArticleContainer>
          </ArticleContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};
