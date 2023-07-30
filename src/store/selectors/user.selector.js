/**
 *
 * @param state
 * @returns {
 *     username: String,
 *     email: String,
 *     birthdate: String,
 * }
 */
export const selectUser = (state) => {
  return state.user;
};

export const selectUserEmail = (state) => {
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
