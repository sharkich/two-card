import game from './Game';
import CARDS from './CARDS';

describe('getDeck', () => {
  test('Should return correct amount of cards', () => {
    expect(game.getDeck().length).toEqual(52);
  });
});

describe('getPairs', () => {
  test('Should return correct with empty data', () => {
    expect(game.getPairs([])).toEqual([]);
  });

  test('Should return correct with three unique cards', () => {
    expect(game.getPairs([CARDS[0], CARDS[10], CARDS[20]])).toEqual([]);
  });

  test('Should return correct with three the same cards', () => {
    expect(game.getPairs([CARDS[0], CARDS[1], CARDS[2]])).toEqual([[CARDS[0], CARDS[1], CARDS[2]]]);
  });

  test('Should return correct with two pairs', () => {
    expect(game.getPairs([CARDS[15], CARDS[0], CARDS[1], CARDS[10], CARDS[20], CARDS[21], CARDS[30]])).toEqual([
      [CARDS[0], CARDS[1]],
      [CARDS[20], CARDS[21]]
    ]);
  });

  test('Should return correct with three pairs', () => {
    expect(
      game.getPairs([CARDS[15], CARDS[0], CARDS[1], CARDS[10], CARDS[20], CARDS[21], CARDS[30], CARDS[31]])
    ).toEqual([
      [CARDS[0], CARDS[1]],
      [CARDS[20], CARDS[21]],
      [CARDS[30], CARDS[31]]
    ]);
  });
});
