import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];
const allOrders = createSlice({
  name: 'allOrders',
  initialState: INITIAL_STATE,
  reducers: {
    setOrder: (state, { payload: { bookId, email } }) => {
      return [...state, { bookId, date: new Date().toString(), email }];
    },
  },
});
const { actions } = allOrders;
export const { setOrder, setAllBooks } = actions;
export default allOrders;
