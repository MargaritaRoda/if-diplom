import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];
const allOrders = createSlice({
  name: 'allOrders',
  initialState: INITIAL_STATE,
  reducers: {
    setOrder: (state, { payload: { id = '', date = '', email = '' } }) => {
      return {
        ...state,
        order: state.push({ id, date: new Date().toString(), email }),
      };
    },
  },
});
const { actions } = allOrders;
export const { setOrder, setAllBooks } = actions;
export default allOrders;
