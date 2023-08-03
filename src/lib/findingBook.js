export const isBookTaken = (orders, bookId) => {
  const foundOrder = orders.find((item) => item.bookId === bookId);
  return Boolean(foundOrder);
};
