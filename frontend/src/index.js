import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import RampartApp from './RampartApp';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

ReactDOM.render(
  <React.StrictMode>
    <RampartApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
