import { makeRatio } from './makeRatio';

const ratio0 = 0;
const ratio1 = 1;
const ratio2 = 2;
const ratio3 = 3;
const ratio4 = 4;
const ratio5 = 5;

test('array of black/white stars according number ratio', () => {
  expect(makeRatio(ratio0)).toStrictEqual([
    'starWhite',
    'starWhite',
    'starWhite',
    'starWhite',
    'starWhite',
  ]);
});

test('array of black/white stars according number ratio', () => {
  expect(makeRatio(ratio1)).toStrictEqual([
    'starBlack',
    'starWhite',
    'starWhite',
    'starWhite',
    'starWhite',
  ]);
});

test('array of black/white stars according number ratio', () => {
  expect(makeRatio(ratio2)).toStrictEqual([
    'starBlack',
    'starBlack',
    'starWhite',
    'starWhite',
    'starWhite',
  ]);
});

test('array of black/white stars according number ratio', () => {
  expect(makeRatio(ratio3)).toStrictEqual([
    'starBlack',
    'starBlack',
    'starBlack',
    'starWhite',
    'starWhite',
  ]);
});

test('array of black/white stars according number ratio', () => {
  expect(makeRatio(ratio4)).toStrictEqual([
    'starBlack',
    'starBlack',
    'starBlack',
    'starBlack',
    'starWhite',
  ]);
});
test('array of black/white stars according number ratio', () => {
  expect(makeRatio(ratio5)).toStrictEqual([
    'starBlack',
    'starBlack',
    'starBlack',
    'starBlack',
    'starBlack',
  ]);
});
