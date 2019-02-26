import React from 'react';
import { pipe } from 'ramda';
import {
  Grid,
  withStyles,
  Typography,
} from '@material-ui/core';
import { Header } from '../../ui/Header';
import { versusDescription } from '../../utils/texts/main';
import styles from './styles';

const Component = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    <Header onLogoClick={() => null} />
    <Grid item xs={12}>
      <iframe
        className={classes.player}
        src="https://www.youtube.com/embed/IIJZE-Mbq6o"
      />
    </Grid>
    <Grid container xs={12}>
      <Grid item xs={1} />
      <Grid item xs={10} className={classes.info}>
        <Typography align="center" variant="h2" color="inherit" className={classes.infoTitle}>
          Немного фактов
        </Typography>
        {versusDescription}
      </Grid>
      <Grid item xs={1} />
    </Grid>
    <Grid container xs={12}>
      <Grid item xs={1} />
      <Grid item xs={10} className={classes.footer}>
        &copy;Versus Battle, 2019
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </Grid>
);

export const Landing = pipe(
  withStyles(styles)
)(Component);
