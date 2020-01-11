import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('Should renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

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
