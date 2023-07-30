export const findingBook = (arrayItems, id) => {
  return arrayItems.find((item) => item.bookId === id);
};

export const isBookTaken = (orders, bookId) => {
  const foundOrder = orders.find((item) => item.bookId === bookId);
  return Boolean(foundOrder);
};
