export const findingUser = (arrayItems, obj) => {
  return arrayItems.find((item) => {
    return item.username === obj.username && item.password === obj.password;
  });
};
