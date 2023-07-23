import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  searchText: '',
};

const inputSearchText = createSlice({
  name: 'inputSearchText',
  initialState: INITIAL_STATE,
  reducers: {
    setInputSearchText: (
      // записываем текущее значение поиска
      state,
      { payload: { searchText } },
    ) => ({
      searchText: searchText,
    }),
  },
});
const { actions } = inputSearchText;
export const { setInputSearchText } = actions;
export default inputSearchText;
