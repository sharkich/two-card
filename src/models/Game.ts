import Card from '../interfaces/Card';
import CARDS from './CARDS';

class Game {
  getDeck(): Card[] {
    return CARDS;
  }
}

export default Game;
