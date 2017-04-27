import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppStore from './store';
import Application from './components/app.component';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={AppStore}>
      <Application/>
    </Provider>
  </MuiThemeProvider>,
  document.querySelector('.app-root')
);