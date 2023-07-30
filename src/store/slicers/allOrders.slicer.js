import { createSlice } from '@reduxjs/toolkit';
import { MAX_ORDER_PERIOD } from '../../services/config';

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
    unsetOrder: (state, { payload: { bookId, email } }) => {
      return state.filter((order) => {
        return !(order.bookId === bookId && order.email === email);
      });
    },
    refreshOrders: (state) => {
      const now = Date.now();
      return state.filter((order) => now - order.date < MAX_ORDER_PERIOD);
    },
    updateUserOrdersEmail: (state, { payload: { oldEmail, newEmail } }) => {
      return state.map((order) => {
        if (order.email === oldEmail) {
          let newOrder = { ...order };
          newOrder.email = newEmail;
          return newOrder;
        }
        return order;
      });
    },
  },
});
const { actions } = allOrders;
export const { setOrder, unsetOrder, refreshOrders, updateUserOrdersEmail } =
  actions;
export default allOrders;
