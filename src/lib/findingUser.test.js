import { findingUser } from './findingUser';

const arr = [
  { username: 'olga', password: '1111' },
  { username: 'mary', password: '1111' },
  { username: 'olga', password: '7777' },
];
const obj = { username: 'olga', password: '7777' };
const obj1 = { username: 'ivan', password: '7777' };

test('find object user into array of objects', () => {
  expect(findingUser(arr, obj)).toStrictEqual({
    username: 'olga',
    password: '7777',
  });
});
test('find object user into array of objects', () => {
  expect(findingUser(arr, obj1)).toStrictEqual(undefined);
});
