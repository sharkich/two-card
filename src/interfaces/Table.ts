import Player from './Player';
import Card from './Card';

interface Table {
  winners: number[];
  players: Player[];
  deck: Card[];
}

export default Table;
