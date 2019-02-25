import React from 'react';
import { pipe } from 'ramda';
import { Grid, withStyles, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import styles from './styles';

const Component = ({ classes }) => (
  <Grid container className={classes.wrapper}>
    <Grid container xs={12} className={classes.header}>
      <Grid item xs={4}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <Menu />
        </IconButton>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <iframe width="100%" className={classes.player} src="https://www.youtube.com/embed/cQ_XJv0TtN8" />
    </Grid>
  </Grid>
);

export const Landing = pipe(
  withStyles(styles)
)(Component);
