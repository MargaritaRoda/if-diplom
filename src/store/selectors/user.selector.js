export const selectUser = (state) => {
  return state.user;
};

export const selectUserEmail = (state) => {
  return state.user.email;
};
export const usernameSelector = (state) => {
  return state.user.username;
};

export const isUserAuthorized = (state) => {
  return Boolean(state.user.username);
};
