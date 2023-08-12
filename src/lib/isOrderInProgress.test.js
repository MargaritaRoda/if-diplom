const isOrderInProgress = require('./allOrdersFunc');

const arr1 = [{ email: '1111', date: '1', bookId: '1' }];
const arr2 = [{ email: '2222', date: '3', bookId: '1' }];

const obj = { email: '3333', date: '2', bookId: '1' };
test('find find status current book has been selected by user into array of orders', () => {
  expect(isOrderInProgress(arr1, obj)).toStrictEqual(true);
  expect(isOrderInProgress(arr2, obj)).toStrictEqual(false);
});
