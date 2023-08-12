import { getUserAvailablePendingBooks } from './allOrdersFunc';

const arrBook = [{ id: '1' }, { id: '2' }];
const arrOrders = [
  { email: '5555', date: '1', bookId: '2' },
  { email: '4444', date: '3', bookId: '2' },
  { email: '2222', date: '3', bookId: '1' },
  { email: '3333', date: '2', bookId: '1' },
  { email: '3333', date: '2', bookId: '2' },
];
const email = '3333';

test('To get 2 arrays of user orders: waiting books  and available', () => {
  expect(getUserAvailablePendingBooks(arrBook, arrOrders, email)).toStrictEqual(
    [[{ id: '2' }], [{ id: '1' }]],
  );
});
