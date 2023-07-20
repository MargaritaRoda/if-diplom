export const selectAllInformation = (state) => {
  return state.user;
};

export const userInfo = (state) => {
  return state.user.email;
};
export const usernameSelector = (state) => {
  return state.user.username;
};

export const passwordSelector = (state) => {
  return state.user.password;
};

export const isUserAuthorized = (state) => {
  return Boolean(state.user.username);
};
