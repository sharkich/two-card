import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Button, createStyles, Paper, Theme } from '@material-ui/core';
import AppDeck from '../components/AppDeck/AppDeck';
import AppViewModel from './AppViewModel';
import Table from '../interfaces/Table';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(3, 2)
    },
    Center: {
      textAlign: 'center'
    },
    Button: {
      margin: theme.spacing(1, 2)
    }
  })
);

const App: FunctionComponent = () => {
  const classes = useStyles();

  const vmRef = useRef(new AppViewModel());

  const [table, setTable] = useState<Table>(vmRef.current.currentTable);

  useEffect(() => {
    const vm = vmRef.current;
    const sub = vm.table$.subscribe(setTable);
    vm.deal();
    return () => void sub.unsubscribe();
  }, []);

  const isWinner = (index: number) => table.winners.includes(index);

  const vm = vmRef.current;
  return (
    <div className="App">
      <CssBaseline />
      <Paper className={classes.Paper}>
        <Paper className={clsx(classes.Paper, classes.Center)}>
          <Button variant="contained" color="primary" onClick={() => vm.deal()} className={classes.Button}>
            Deal
          </Button>
          <Button
            variant="contained"
            onClick={() => vm.addSeat()}
            className={classes.Button}
            disabled={!table.canAddPlayer}
          >
            Add Player
          </Button>
          <Button
            variant="contained"
            onClick={() => vm.removeSeat()}
            className={classes.Button}
            disabled={!table.canRemovePlayer}
          >
            Remove Player
          </Button>
        </Paper>

        {table.players.map((player, index) => (
          <>
            <AppDeck player={player} isWinner={isWinner(index)} key={'player' + index} />
          </>
        ))}
      </Paper>
    </div>
  );
};

export default App;
