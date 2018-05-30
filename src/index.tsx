import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NeoClass from './components/NeoClass';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <NeoClass API_Key="UmwJQ1PsgKzUDRfptPJH1T9CbveNXUj4rH39sjEI"/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
