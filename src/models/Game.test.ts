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
    expect(game.getPairs([CARDS[0], CARDS[1], CARDS[2]])).toEqual([[CARDS[0], CARDS[1]]]);
  });

  test('Should return correct with two pairs', () => {
    expect(game.getPairs([CARDS[15], CARDS[0], CARDS[1], CARDS[10], CARDS[20], CARDS[21], CARDS[30]])).toEqual([
      [CARDS[0], CARDS[1]],
      [CARDS[20], CARDS[21]]
    ]);
  });

  test('Should return correct with three pairs', () => {
    expect(game.getPairs([CARDS[0], CARDS[1], CARDS[10], CARDS[20], CARDS[21], CARDS[30], CARDS[31]])).toEqual([
      [CARDS[0], CARDS[1]],
      [CARDS[20], CARDS[21]],
      [CARDS[30], CARDS[31]]
    ]);
  });

  test('Should return correct with two equal pairs', () => {
    expect(game.getPairs([CARDS[15], CARDS[4], CARDS[5], CARDS[10], CARDS[6], CARDS[21], CARDS[7]])).toEqual([
      [CARDS[4], CARDS[5]],
      [CARDS[6], CARDS[7]]
    ]);
  });
});

describe('getWinner', () => {
  test('Should return correct with empty data', () => {
    expect(game.getWinner([])).toEqual([]);
  });

  test('Should return correct with first win', () => {
    expect(game.getWinner([{ pairs: [1] } as any, { pairs: [] } as any])).toEqual([0]);
  });

  test('Should return correct with second win', () => {
    expect(game.getWinner([{ pairs: [1] } as any, { pairs: [1, 2] } as any, { pairs: [1] } as any])).toEqual([1]);
  });

  test('Should return correct with third win', () => {
    expect(game.getWinner([{ pairs: [1] } as any, { pairs: [1, 2] } as any, { pairs: [1, 3, 4] } as any])).toEqual([2]);
  });

  test('Should return correct with first and second win', () => {
    expect(game.getWinner([{ pairs: [1, 2] } as any, { pairs: [1, 2] } as any, { pairs: [1] } as any])).toEqual([0, 1]);
  });

  test('Should return correct with first and third win', () => {
    expect(
      game.getWinner([
        { pairs: [1, 2, 3] } as any,
        { pairs: [1, 2] } as any,
        { pairs: [1, 3, 4] } as any,
        { pairs: [1] } as any
      ])
    ).toEqual([0, 2]);
  });

  test('Should return correct with all', () => {
    expect(
      game.getWinner([
        { pairs: [1, 2, 3] } as any,
        { pairs: [1, 2, 4] } as any,
        { pairs: [1, 3, 4] } as any,
        { pairs: [5, 6, 7] } as any
      ])
    ).toEqual([0, 1, 2, 3]);
  });
});
