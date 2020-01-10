import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Button, createStyles, Paper, Theme } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(3, 2)
    },
    Header: {
      textAlign: 'center'
    },
    Deck: {
      display: 'flex',
      overflowX: 'auto',
      justifyContent: 'center',
      padding: theme.spacing(1)
    },
    Card: {},
    CardSymbol: {
      fontSize: '100pt',
      textShadow: '2px 2px 2px red'
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
      <Paper className={classes.Paper}>
        <Paper className={clsx(classes.Paper, classes.Header)}>
          <Button variant="contained" color="primary">
            Deal
          </Button>
        </Paper>

        <Paper className={clsx(classes.Paper, classes.Deck)}>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
          <div className={classes.Card}>
            <span className={classes.CardSymbol}>🂡</span>
          </div>
        </Paper>

        <Paper className={classes.Paper}>Deck #2</Paper>
      </Paper>
    </div>
  );
};

export default App;
