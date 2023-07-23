import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];
const allOrders = createSlice({
  name: 'allOrders',
  initialState: INITIAL_STATE,
  reducers: {
    setOrder: (state, { payload: { bookId, email } }) => {
      const isOrderNotUniq = state.some((item) => {
        return item.bookId === bookId && item.email === email;
      });
      if (isOrderNotUniq) {
        return state;
      }
      return [...state, { bookId, date: Date.now(), email }];
    },
  },
});
const { actions } = allOrders;
export const { setOrder, setAllBooks } = actions;
export default allOrders;
