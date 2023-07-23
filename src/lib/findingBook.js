export const findingBook = (arrayItems, id) => {
  return arrayItems.find((item) => item.bookId === id);
};
