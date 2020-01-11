import React, { FunctionComponent } from 'react';
import { createStyles, Paper, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import AppCard from '../AppCard/AppCard';
import Player from '../../interfaces/Player';
import AppViewModel from '../../App/AppViewModel';
import WinnerIcon from '@material-ui/icons/EmojiEvents';

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
    },
    Header: {
      height: 24,
      width: '100%',
      textAlign: 'center'
    },
    Winner: {
      color: 'orange',
      fontSize: '30pt'
    }
  })
);

interface Props {
  player: Player;
  isWinner: boolean;
}

const AppDeck: FunctionComponent<Props> = ({ player, isWinner }: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.Paper}>
      <div className={classes.Header}>{isWinner ? <WinnerIcon className={classes.Winner} /> : null}</div>
      <div className={classes.Deck}>
        {player.hand.map((card, index) => (
          <AppCard
            card={card}
            key={'' + card.suit + card.power + index}
            pairIndex={AppViewModel.pairIndex(player, card)}
          />
        ))}
      </div>
    </Paper>
  );
};

export default AppDeck;
