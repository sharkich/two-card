import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import Card from '../../interfaces/Card';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';
import Suit from '../../interfaces/Suit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Card: {},
    CardSymbol: {
      fontSize: '100pt'
      // textShadow: '2px 2px 2px red'
    },
    Black: {
      color: 'black'
    },
    Red: {
      color: 'red'
    }
  })
);

interface Props {
  card: Card;
}

const AppCard: FunctionComponent<Props> = ({ card }: Props) => {
  const classes = useStyles();

  const isBlackSuit = (suit: Suit) => [Suit.Spades, Suit.Clubs].includes(suit);
  const isRedSuit = (suit: Suit) => [Suit.Hearts, Suit.Diamonds].includes(suit);

  return (
    <div
      className={clsx(classes.Card, {
        [classes.Black]: isBlackSuit(card.suit),
        [classes.Red]: isRedSuit(card.suit)
      })}
    >
      <span className={classes.CardSymbol}>{card.symbol}</span>
    </div>
  );
};

export default AppCard;
