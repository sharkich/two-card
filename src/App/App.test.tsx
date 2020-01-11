import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Should renders App with Deal button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Deal/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should renders App with "Add Player" button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Add Player/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should renders App with "Remove Player" button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Remove Player/i);
  expect(linkElement).toBeInTheDocument();
});
