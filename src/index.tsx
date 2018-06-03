import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'
import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<div><App/><hr/><Hello name="Paul" enthusiasmLevel={4}/></div>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
