import { array } from 'prop-types';

export const findingUser = (arrayItems, obj) => {
  // return  (arrayItems.find((item) => (JSON.stringify(item) === JSON.stringify(obj))));
  return arrayItems.find((item) => {
    return item.username === obj.username && item.password === obj.password;
  });
};

// function selectObjByKeys(arr, )

const arr = [
  { username: '1', password: '2222' },
  { username: '2', password: '2222' },
  { username: '1', password: '3333' },
];
const user1 = { username: '1', password: '3333' };
const user2 = { username: '1', password: '1111' };
