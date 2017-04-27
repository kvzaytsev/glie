import React from 'react';
import { render } from 'react-dom';

import AppStore from './store';
import Application from './components/app.component';

render(
  <Application/>,
  document.querySelector('.app-root')
);