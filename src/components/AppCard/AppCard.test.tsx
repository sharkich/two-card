import React from 'react';
import ReactDOM from 'react-dom';
import AppCard from './AppCard';
import Card from '../../interfaces/Card';
import { none, some } from 'fp-ts/lib/Option';
import CARDS from '../../models/CARDS';
import { render } from '@testing-library/react';

it('Should renders without crashing', () => {
  const card: Card = { ...CARDS[0] };
  const div = document.createElement('div');
  ReactDOM.render(<AppCard card={card} pairIndex={none} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should renders default snapshot', () => {
  const card: Card = { ...CARDS[0] };
  const renderer = render(<AppCard card={card} pairIndex={none} />);
  expect(renderer).toMatchSnapshot();
});

it('Should renders card in pair', () => {
  const card: Card = { ...CARDS[0] };
  const renderer = render(<AppCard card={card} pairIndex={some(1)} />);
  expect(renderer).toMatchSnapshot();
});
