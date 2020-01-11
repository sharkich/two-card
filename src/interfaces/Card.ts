import Suit from './Suit';

interface Card {
  readonly suit: Suit;
  readonly symbol: string;
  readonly power: number;
}

export default Card;
