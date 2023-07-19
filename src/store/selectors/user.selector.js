export const selectIsUserAuthorized = (state) => {
  return state.user.username !== '';
};

export const userInfo = (state) => {
  return state.user;
};
