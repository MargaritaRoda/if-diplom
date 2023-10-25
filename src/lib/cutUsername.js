export const cutUsername = (str, reg = /\W/) => {
  if (str) {
    if (str.length < 10) {
      return str;
    }
    const short = str.search(reg);

    if (short === -1) {
      return str.substring(0, 9);
    }
    return str.substring(0, short);
  } else {
    str = '';
    return str;
  }
};
