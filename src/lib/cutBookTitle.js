export const cutBookTitle = (str, reg = ':') => {
  return str.search(reg) === -1
    ? str
    : str.substring(0, str.indexOf(str.match(reg)));
};
