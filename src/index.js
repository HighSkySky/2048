import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import GameApp from './containers/GameApp.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <GameApp />, 
  document.getElementById('app')
);

registerServiceWorker();
