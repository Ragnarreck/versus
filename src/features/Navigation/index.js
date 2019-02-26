import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { theme } from '../../config/theme';
import { Landing } from '../Landing';
import { Battles } from '../Battles';

export const Navigation = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} />
        <Route path='/battles' component={Battles} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);
