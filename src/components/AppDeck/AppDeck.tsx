import React, { FunctionComponent } from 'react';
import Card from '../../interfaces/Card';
import { createStyles, Paper, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import AppCard from '../AppCard/AppCard';
import Player from '../../interfaces/Player';
import AppViewModel from '../../App/AppViewModel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(3, 2)
    },
    Deck: {
      display: 'flex',
      overflowX: 'auto',
      justifyContent: 'center',
      padding: theme.spacing(1)
    }
  })
);

interface Props {
  player: Player;
}

const AppDeck: FunctionComponent<Props> = ({ player }: Props) => {
  const classes = useStyles();
  return (
    <Paper className={clsx(classes.Paper, classes.Deck)}>
      {player.hand.map((card, index) => (
        <AppCard
          card={card}
          key={'' + card.suit + card.power + index}
          pairIndex={AppViewModel.pairIndex(player, card)}
        />
      ))}
    </Paper>
  );
};

export default AppDeck;
