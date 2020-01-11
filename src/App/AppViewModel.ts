import Table from '../interfaces/Table';
import { BehaviorSubject } from 'rxjs';
import { none } from 'fp-ts/lib/Option';
import CARDS from '../models/CARDS';
import { shuffle } from 'lodash';
import Player from '../interfaces/Player';
import defined from '../utils/defined';

export const DEFAULT_TABLE: Table = {
  winner: none,
  players: [],
  deck: []
};

const DEFAULT_PLAYER: Player = {
  deck: [],
  pairs: []
};

const DEFAULT_PLAYERS_COUNT = 2;
const CARDS_IN_HAND = 7;

class AppViewModel {
  private table: Table = this.generate();
  public readonly table$ = new BehaviorSubject<Table>(this.table);

  private generate(): Table {
    const table: Table = { ...DEFAULT_TABLE };
    table.deck = shuffle([...CARDS]);
    table.players = new Array(DEFAULT_PLAYERS_COUNT).fill({ ...DEFAULT_PLAYER });
    table.players.map(player => {
      player.deck = new Array(CARDS_IN_HAND).fill({}).map(() => defined(table.deck.shift()));
      console.log('player', player);
      console.log('deck', table.deck);
    });
    return table;
  }

  public deal() {
    this.table = this.generate();
    this.table$.next(this.table);
  }

  get currentTable(): Table {
    return this.table;
  }
}

export default AppViewModel;
