// получить массив обьектов книг, которые выбрал текщий юзер

const getUserOrders = (allOrders, userEmail) => {
  return allOrders.reduce((userOrders, order) => {
    if (order.email === userEmail) {
      userOrders.push(order);
    }
    return userOrders;
  }, []);
};

// на основании обьекта userOrder (user текущей сессии) и общего массива обьектов  allOrders,
// определяем в каком статусе находится конкретная книга, выбранная user текущей сессии
// статус true - значит книга находится у user текущей сессии
// статус false - значит книгу, выбрана user текущей сессии, но сейс у другого user
// в качестве id user используется email

const isOrderInProgress = (allOrders, order) => {
  return allOrders.some((currentOrder) => {
    if (
      currentOrder.email !== order.email &&
      currentOrder.bookId === order.bookId
    ) {
      if (currentOrder.date < order.date) {
        return true;
      }
    }
    return false;
  });
};

// получим массив order of user текущей сессии, разбитых на 2 массива:
// массив orderUser, которые сейчас у user
// массив orderUser, которые у других пользователей, но хочет user

export const getUserAvailablePendingOrdersLists = (allOrders, userId) => {
  const availableBooksList = [];
  const pendingBooksList = [];
  const userAllOrders = getUserOrders(allOrders, userId);
  for (let order of userAllOrders) {
    if (isOrderInProgress(allOrders, order)) {
      availableBooksList.push(order);
    } else {
      pendingBooksList.push(order);
    }
  }
  return [availableBooksList, pendingBooksList];
};

// На oсновании массива ордеров, которые выбрал User, из общего массива доступных книг
// создаем массивы книг для рендеринга
const convertOrdersIntoBooks = (allBooksArray, userOrders) => {
  const listOfOrderedBooks = [];
  for (let order of userOrders) {
    let foundBook = allBooksArray.find((book) => {
      return book.id === order.bookId;
    });
    if (foundBook) {
      listOfOrderedBooks.push(foundBook);
    }
  }

  return listOfOrderedBooks;
};

// финальная функция
// userId = user.email

export const getUserAvailablePendingBooks = (
  allBooksArr,
  allOrdersArr,
  userId,
) => {
  const [availableOrder, pendingOrders] = getUserAvailablePendingOrdersLists(
    allOrdersArr,
    userId,
  );
  return [
    convertOrdersIntoBooks(allBooksArr, availableOrder),
    convertOrdersIntoBooks(allBooksArr, pendingOrders),
  ];
};
