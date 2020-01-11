import Table from '../interfaces/Table';
import { BehaviorSubject } from 'rxjs';
import { none, Option, some } from 'fp-ts/lib/Option';
import { fill } from 'lodash';
import Player from '../interfaces/Player';
import defined from '../utils/defined';
import game from '../models/Game';
import Suit from '../interfaces/Suit';
import Card from '../interfaces/Card';

const DEFAULT_PLAYERS_COUNT = 2;
const MAX_PLAYERS_COUNT = 4;
const CARDS_IN_HAND = 7;

export const DEFAULT_TABLE: Table = {
  winners: [],
  seats: DEFAULT_PLAYERS_COUNT,
  players: [],
  deck: [],
  canAddPlayer: true,
  canRemovePlayer: false
};

const DEFAULT_PLAYER: Player = {
  hand: [],
  pairs: []
};

class AppViewModel {
  static isBlackSuit(suit: Suit): boolean {
    return [Suit.Spades, Suit.Clubs].includes(suit);
  }

  static isRedSuit(suit: Suit): boolean {
    return [Suit.Hearts, Suit.Diamonds].includes(suit);
  }

  static pairIndex(player: Player, card: Card): Option<number> {
    let index: number = 0;
    return player.pairs.some((pair, i) => {
      const includes = pair.includes(card);
      if (includes) {
        index = i + 1;
      }
      return includes;
    })
      ? some(index)
      : none;
  }

  private table: Table = { ...DEFAULT_TABLE };
  public readonly table$ = new BehaviorSubject<Table>(this.table);

  get currentTable(): Table {
    return this.table;
  }

  public deal() {
    this.table = this.generate();
    this.table$.next(this.table);
  }

  public addSeat() {
    this.table.seats++;
    this.deal();
  }

  public removeSeat() {
    this.table.seats--;
    this.deal();
  }

  private generate(): Table {
    const table: Table = { ...this.table };
    table.deck = game.getDeck();
    table.players = new Array(this.table.seats).fill({}).reduce(prev => {
      const player = { ...DEFAULT_PLAYER };
      player.hand = fill(Array(CARDS_IN_HAND), {}).map(() => defined(table.deck.shift()));
      player.pairs = game.getPairs(player.hand);
      prev.push(player);
      return prev;
    }, []);
    table.winners = game.getWinner(table.players);
    table.canAddPlayer = this.table.seats < MAX_PLAYERS_COUNT;
    table.canRemovePlayer = this.table.seats > DEFAULT_PLAYERS_COUNT;
    return table;
  }
}

export default AppViewModel;
