import inputSearchText from '../slicers/inputSearchText.slicer';

export const selectSearchText = (state) => {
  return state.inputSearchText.searchText.toLowerCase();
};
