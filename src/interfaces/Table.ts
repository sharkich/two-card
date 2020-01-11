import Player from './Player';
import { Option } from 'fp-ts/lib/Option';
import Card from './Card';

interface Table {
  winner: Option<Player>;
  players: Player[];
  deck: Card[];
}

export default Table;
