import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Button, createStyles, Paper, Theme } from '@material-ui/core';
import AppDeck from '../components/AppDeck/AppDeck';
import AppViewModel from './AppViewModel';
import Table from '../interfaces/Table';
import { Subscription } from 'rxjs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(3, 2)
    },
    Header: {
      textAlign: 'center'
    }
  })
);

const App: FunctionComponent = () => {
  const classes = useStyles();

  const vmRef = useRef(new AppViewModel());

  const [table, setTable] = useState<Table>(vmRef.current.currentTable);

  useEffect(() => {
    const vm = vmRef.current;
    const subs: Subscription[] = [];
    subs.push(vm.table$.subscribe(setTable));
    return () => void subs.map(sub => sub.unsubscribe());
  }, []);

  console.log('table', table);

  return (
    <div className="App">
      <CssBaseline />
      <Paper className={classes.Paper}>
        <Paper className={clsx(classes.Paper, classes.Header)}>
          <Button variant="contained" color="primary">
            Deal
          </Button>
        </Paper>

        {table.players.map((player, index) => (
          <AppDeck deck={player.deck} key={'player' + index} />
        ))}
      </Paper>
    </div>
  );
};

export default App;
