import { render } from '@testing-library/react';
import React from 'react';
import AppDeck from './AppDeck';
import Player from '../../interfaces/Player';
import ReactDOM from 'react-dom';

it('Should renders without crashing', () => {
  const player: Player = {
    hand: [],
    pairs: []
  };
  const div = document.createElement('div');
  ReactDOM.render(<AppDeck player={player} isWinner={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Should renders default snapshot', () => {
  const player: Player = {
    hand: [],
    pairs: []
  };
  const renderer = render(<AppDeck player={player} isWinner={false} />);
  expect(renderer).toMatchSnapshot();
});
