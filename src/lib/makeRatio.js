export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const makeRatio = (ratio) => {
  const starRatio = [];
  for (let i = 1; i <= 5; i++) {
    starRatio.push(i <= ratio ? 'starBlack' : 'starWhite');
  }
  return starRatio;
};
