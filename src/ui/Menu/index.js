import React from 'react';
import { pipe } from 'ramda';
import {
  List,
  Drawer,
  SvgIcon,
  ListItem,
  withStyles,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { menuItems } from '../../utils/menu';
import BrandImage from '../../assets/brand.jpg';
import styles from './styles';

const Component = ({ classes, isVisible, closeMenu }) => {
  return (
    <Drawer
      anchor="right"
      open={isVisible}
      onClose={closeMenu}
      classes={{
        root: classes.rootContainer,
        paper: classes.drawerWrapper,
      }}
    >
      <div>
        <img className={classes.brandImage} src={BrandImage} alt="Versus" />
      </div>

      <List>
        {menuItems.map(item => (
          <ListItem key={item.text} className={classes.listItem}>
            <Link to={item.link}>
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>

      <IconButton onClick={closeMenu}>
        <SvgIcon fontSize="large" color="error">
          <ArrowBackIcon />
        </SvgIcon>
      </IconButton>
    </Drawer>
  );
};

Component.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export const Menu = pipe(
  withStyles(styles),
)(Component);
