import Card from './Card';
import Pair from './Pair';

interface Player {
  deck: Card[];
  pairs: Pair[];
}

export default Player;
