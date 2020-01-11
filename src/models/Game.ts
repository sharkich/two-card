import Card from '../interfaces/Card';
import CARDS from './CARDS';
import { shuffle } from 'lodash';
import defined from '../utils/defined';

class Game {
  getDeck(): Card[] {
    return shuffle([...CARDS]);
  }

  getPairs(cards: Card[]): Card[][] {
    const pairs: Card[][] = [];
    let deck = [...cards];
    while (deck.length) {
      let card: Card = defined(deck.shift());
      const pair: Card[] = [card, ...deck.filter(c => c.power === card.power)];
      deck = deck.filter(c => c.power !== card.power);
      if (pair.length > 1) {
        pairs.push(pair);
      }
    }
    return pairs;
  }
}

const game = new Game();

export default game;
