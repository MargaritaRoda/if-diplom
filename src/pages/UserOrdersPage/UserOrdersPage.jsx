import React from 'react';
import styles from './UserOrdersPage.module.scss';
import { Header } from '../../components/Header';
import { ArticleContainer } from '../../components/ArticleContainer';
import { BookItem } from '../../components/BookItem';
import { useSelector } from 'react-redux';
import { getUserAvailablePendingBooks } from '../../lib/allOrdersFunc';
import { selectUserEmail } from '../../store/selectors/user.selector';
import { selectAllOrderBooks } from '../../store/selectors/allOrders.selector';
import { useGetAllBooksQuery } from '../../store/slicers/apiSlice';
import { Footer } from '../../components/Footer';
import { PageLayout } from '../../components/PageLayout';

export const UserOrdersPage = () => {
  const userEmail = useSelector(selectUserEmail);
  const allOrderInfo = useSelector(selectAllOrderBooks);
  const { data: books } = useGetAllBooksQuery();

  const [pending, available] = getUserAvailablePendingBooks(
    books || [],
    allOrderInfo,
    userEmail,
  );

  console.log('pending', pending);
  console.log('available', available);
  return (
    <PageLayout>
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
                    isPendingOrder
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
    </PageLayout>
  );
};
