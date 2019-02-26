import React from 'react';
import PropTypes from 'prop-types';
import { pipe } from 'ramda';
import {
  Grid,
  SvgIcon,
  IconButton,
  withStyles,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Menu } from '../Menu';
import logo from '../../assets/logo.jpg';
import styles from './styles';

class Component extends React.Component {
  state = { isMenuVisible: false };

  openMenu = () => this.setState(state => ({ ...state, isMenuVisible: true }));

  closeMenu = () => this.setState(state => ({ ...state, isMenuVisible: false }));

  render() {
    const { classes, onLogoClick } = this.props;
    return (
      <Grid container xs={12} className={classes.header}>
        <Grid item xs={4}>
          <IconButton onClick={onLogoClick}>
            <img src={logo} alt="Logo" className={classes.logo} />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={this.openMenu}>
            <SvgIcon fontSize="large" color="error">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Grid>
        <Menu closeMenu={this.closeMenu} isVisible={this.state.isMenuVisible} {...this.props} />
      </Grid>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogoClick: PropTypes.func.isRequired,
};

export const Header = pipe(
  withStyles(styles)
)(Component);
