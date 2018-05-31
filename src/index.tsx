import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont from 'webfontloader';
import AsteroidNav from './components/AsteroidNav';
import AsteroidSizeVis from './components/AsteroidSizeVis';
import NeoClass from './components/NeoClass';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Anonymous Pro:300,400,700', 'monospace']
  }
});

ReactDOM.render(
	<div className="appWrapper">
		<h1>Today's Near Earth Objects</h1>
		<div id="NeoJson">
	  		<NeoClass API_Key="UmwJQ1PsgKzUDRfptPJH1T9CbveNXUj4rH39sjEI"/> 
	  	</div>
	  	<AsteroidSizeVis size={187.85} height={600} width={600}/>
		<AsteroidNav/>
  	</div>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
