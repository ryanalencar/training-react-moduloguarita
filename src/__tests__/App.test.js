import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

<<<<<<< HEAD
import { something1, something2 } from '../helper/utils';

test('renders react link', () => {
=======
test('renders learn react link', () => {
>>>>>>> 9802e06b247dd94aaf7d4448daac3ce2aa4c066d
  const { getByText } = render(<App />);
  const linkElement = getByText(/Github/i);
  expect(linkElement).toBeInTheDocument();
});
<<<<<<< HEAD

test('adds 1 + 2 to equal 3', () => {
  expect(something1(1, 2)).toBe(3);
});

test('adds 2 - 1 to equal 1', () => {
  expect(something2(2, 1)).toBe(1);
});
=======
>>>>>>> 9802e06b247dd94aaf7d4448daac3ce2aa4c066d
