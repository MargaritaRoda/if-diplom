// возвращает новый массив allOrder без order который соотвествует конкретному юзеру и конкретной книге

const returnBook = (allOrder, id, email) => {
  return allOrder.filter(
    (order) => order.bookId !== id && order.email !== email,
  );
};
