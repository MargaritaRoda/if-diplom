import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  username: '',
  birthdate: '',
  email: '',
  password: '',
};

const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (
      // записываем текущего пользлвателя (текущая сессия)
      state,
      { payload: { username, birthdate, email, password } },
    ) => ({
      username,
      birthdate,
      email,
      password,
    }),
    logout: () => INITIAL_STATE,
  },
});
const { actions } = user;
export const { login, logout } = actions;
export default user;
