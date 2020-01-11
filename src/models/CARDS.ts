import Card from '../interfaces/Card';
import Suit from '../interfaces/Suit';

const CARDS: Card[] = [
  { symbol: '🂢', power: 2, suit: Suit.Spades },
  { symbol: '🂲', power: 2, suit: Suit.Hearts },
  { symbol: '🃂', power: 2, suit: Suit.Diamonds },
  { symbol: '🃒', power: 2, suit: Suit.Clubs },

  { symbol: '🂣', power: 3, suit: Suit.Spades },
  { symbol: '🂳', power: 3, suit: Suit.Hearts },
  { symbol: '🃃', power: 3, suit: Suit.Diamonds },
  { symbol: '🃓', power: 3, suit: Suit.Clubs },

  { symbol: '🂤', power: 4, suit: Suit.Spades },
  { symbol: '🂴', power: 4, suit: Suit.Hearts },
  { symbol: '🃄', power: 4, suit: Suit.Diamonds },
  { symbol: '🃔', power: 4, suit: Suit.Clubs },

  { symbol: '🂥', power: 5, suit: Suit.Spades },
  { symbol: '🂵', power: 5, suit: Suit.Hearts },
  { symbol: '🃅', power: 5, suit: Suit.Diamonds },
  { symbol: '🃕', power: 5, suit: Suit.Clubs },

  { symbol: '🂦', power: 6, suit: Suit.Spades },
  { symbol: '🂶', power: 6, suit: Suit.Hearts },
  { symbol: '🃆', power: 6, suit: Suit.Diamonds },
  { symbol: '🃖', power: 6, suit: Suit.Clubs },

  { symbol: '🂧', power: 7, suit: Suit.Spades },
  { symbol: '🂷', power: 7, suit: Suit.Hearts },
  { symbol: '🃇', power: 7, suit: Suit.Diamonds },
  { symbol: '🃗', power: 7, suit: Suit.Clubs },

  { symbol: '🂨', power: 8, suit: Suit.Spades },
  { symbol: '🂸', power: 8, suit: Suit.Hearts },
  { symbol: '🃈', power: 8, suit: Suit.Diamonds },
  { symbol: '🃘', power: 8, suit: Suit.Clubs },

  { symbol: '🂩', power: 9, suit: Suit.Spades },
  { symbol: '🂹', power: 9, suit: Suit.Hearts },
  { symbol: '🃉', power: 9, suit: Suit.Diamonds },
  { symbol: '🃙', power: 9, suit: Suit.Clubs },

  { symbol: '🂪', power: 10, suit: Suit.Spades },
  { symbol: '🂺', power: 10, suit: Suit.Hearts },
  { symbol: '🃊', power: 10, suit: Suit.Diamonds },
  { symbol: '🃚', power: 10, suit: Suit.Clubs },

  // Jack | Knight
  { symbol: '🂫', power: 11, suit: Suit.Spades },
  { symbol: '🂻', power: 11, suit: Suit.Hearts },
  { symbol: '🃋', power: 11, suit: Suit.Diamonds },
  { symbol: '🃛', power: 11, suit: Suit.Clubs },

  // Queen
  { symbol: '🂭', power: 12, suit: Suit.Spades },
  { symbol: '🂽', power: 12, suit: Suit.Hearts },
  { symbol: '🃍', power: 12, suit: Suit.Diamonds },
  { symbol: '🃝', power: 12, suit: Suit.Clubs },

  // King
  { symbol: '🂮', power: 13, suit: Suit.Spades },
  { symbol: '🂾', power: 13, suit: Suit.Hearts },
  { symbol: '🃎', power: 13, suit: Suit.Diamonds },
  { symbol: '🃞', power: 13, suit: Suit.Clubs },

  // Ace
  { symbol: '🂡', power: 14, suit: Suit.Spades },
  { symbol: '🂱', power: 14, suit: Suit.Hearts },
  { symbol: '🃁', power: 14, suit: Suit.Diamonds },
  { symbol: '🃑', power: 14, suit: Suit.Clubs }
];

export default CARDS;
