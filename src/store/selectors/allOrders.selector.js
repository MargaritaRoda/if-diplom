export const selectAllOrderBooks = (state) => {
  return state.allOrders;
};

export const selectUserAllOrderBooks = (state) => {
  return state.allOrders.filter((book) => {
    return book.email === state.user.email;
  });
};
