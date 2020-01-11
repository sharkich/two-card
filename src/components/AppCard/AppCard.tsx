import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import Card from '../../interfaces/Card';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';
import AppViewModel from '../../App/AppViewModel';
import { isSome, Option } from 'fp-ts/lib/Option';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Card: {
      margin: theme.spacing(1)
    },
    CardSymbol: {
      fontSize: '130pt'
    },
    Black: {
      color: 'black'
    },
    Red: {
      color: 'red'
    },
    Pair1: {
      border: '1px solid blue',
      boxShadow: '2px 2px 2px blue'
    },
    Pair2: {
      border: '1px solid green',
      boxShadow: '2px 2px 2px green'
    },
    Pair3: {
      border: '1px solid purple',
      boxShadow: '2px 2px 2px purple'
    }
  })
);

interface Props {
  card: Card;
  pairIndex: Option<number>;
}

const AppCard: FunctionComponent<Props> = ({ card, pairIndex }: Props) => {
  const classes = useStyles();
  const isPair = (index: number) => isSome(pairIndex) && pairIndex.value === index;
  return (
    <div
      className={clsx(classes.Card, {
        [classes.Black]: AppViewModel.isBlackSuit(card.suit),
        [classes.Red]: AppViewModel.isRedSuit(card.suit),
        [classes.Pair1]: isPair(1),
        [classes.Pair2]: isPair(2),
        [classes.Pair3]: isPair(3)
      })}
    >
      <span className={classes.CardSymbol}>{card.symbol}</span>
    </div>
  );
};

export default AppCard;
