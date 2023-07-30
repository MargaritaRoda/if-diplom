import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

const allUsers = createSlice({
  name: 'allUsers',
  initialState: INITIAL_STATE,
  reducers: {
    setNewUser: (state, { payload }) => {
      return [...state, payload];
    },
    updateUser: (state, { payload: { oldEmail, newUser } }) => {
      return state.map((user) => {
        if (user.email === oldEmail) {
          return newUser;
        }
        return user;
      });
    },
  },
});
const { actions } = allUsers;
export const { setNewUser, updateUser } = actions;
export default allUsers;
