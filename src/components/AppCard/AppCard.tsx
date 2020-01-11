import React, { FunctionComponent } from 'react';
import Card from '../../interfaces/Card';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Card: {},
    CardSymbol: {
      fontSize: '100pt',
      textShadow: '2px 2px 2px red'
    }
  })
);

interface Props {
  card: Card;
}

const AppCard: FunctionComponent<Props> = ({ card }) => {
  const classes = useStyles();
  return (
    <div className={classes.Card}>
      <span className={classes.CardSymbol}>{card.symbol}</span>
    </div>
  );
};

export default AppCard;
