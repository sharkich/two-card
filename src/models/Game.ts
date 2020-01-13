import Card from '../interfaces/Card';
import CARDS from './CARDS';
import { shuffle } from 'lodash';
import defined from '../utils/defined';
import Player from '../interfaces/Player';

class Game {
  getDeck(): Card[] {
    return shuffle([...CARDS]);
  }

  getPairs(cards: Card[]): Card[][] {
    const pairs: Card[][] = [];
    let deck = [...cards];
    while (deck.length) {
      const card: Card = defined(deck.shift());
      const pairIndex = deck.findIndex(c => c.power === card.power);
      if (pairIndex !== -1) {
        const pair: Card[] = [card, deck[pairIndex]];
        pairs.push(pair);
        deck.splice(pairIndex, 1);
      }
    }
    return pairs;
  }

  getWinner(players: Player[]): number[] {
    const maxPairs: { pairs: number; indexes: number[] } = players.reduce<{ pairs: number; indexes: number[] }>(
      (max, player, index) => {
        const pairs = player.pairs.length;
        if (pairs > max.pairs) {
          max.pairs = pairs;
          max.indexes = [index];
        } else if (pairs === max.pairs) {
          max.indexes.push(index);
        }
        return max;
      },
      { pairs: 0, indexes: [] }
    );
    return maxPairs.indexes;
  }
}

const game = new Game();

export default game;
