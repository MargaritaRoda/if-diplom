import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

const allUsers = createSlice({
  name: 'allUsers',
  initialState: INITIAL_STATE,
  reducers: {
    setNewUser: (state, { payload }) => {
      return [...state, payload];
    },
  },
});
const { actions } = allUsers;
export const { setNewUser } = actions;
export default allUsers;
