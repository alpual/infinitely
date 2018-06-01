import * as React from 'react';
import './App.css';
import AsteroidNav from './components/AsteroidNav';
import AsteroidSizeVis from './components/AsteroidSizeVis';
import NeoClass from './components/NeoClass';

class App extends React.Component {
  public render() {
    return (
      <div className="appWrapper">
        <h1>Today's Near Earth Objects</h1>
        <div id="NeoJson">
            <NeoClass API_Key="UmwJQ1PsgKzUDRfptPJH1T9CbveNXUj4rH39sjEI"/> 
          </div>
          <AsteroidSizeVis size={187.85} height={600} width={600}/>
        <AsteroidNav/>
      </div>
    );
  }
}

export default App;
