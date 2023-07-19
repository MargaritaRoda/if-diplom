const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
export const randomRatio = randomInteger(0, 5);

export const makeRatio = (ratio) => {
  const starRatio = Math.round(ratio);
  let ratioArray = [];
  for (let i = 0; i <= 3; i++) {
    if (i < starRatio) {
      ratioArray[i] = 'starBlack';
    } else {
      ratioArray[i] = 'starWhite';
    }
    ratioArray.push(ratioArray[i]);
  }
  return ratioArray;
};
