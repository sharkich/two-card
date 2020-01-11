import Player from './Player';
import Card from './Card';

interface Table {
  winners: number[];
  seats: number;
  players: Player[];
  deck: Card[];
  canAddPlayer: boolean;
  canRemovePlayer: boolean;
}

export default Table;
