import * as React from 'react';
import './App.css';
import AsteroidNav from './components/AsteroidNav';
import AsteroidSizeVis from './components/AsteroidSizeVis';
import NeoClass from './components/NeoClass';


export interface IAsteroidStatus {
  asteroidNum: number;
  asteroidSize: number;
}

class App extends React.Component<{}, IAsteroidStatus> {
  constructor(props:any, context:any) {
    super(props,context)

    this.state = { asteroidNum:0, asteroidSize:0 }
  }


  public render() {
    return (
      <div className="appWrapper">
        <h1>Today's Near Earth Objects</h1>
        <div id="NeoJson">
            <NeoClass API_Key="UmwJQ1PsgKzUDRfptPJH1T9CbveNXUj4rH39sjEI"/> 
          </div>

          <AsteroidSizeVis 
            size={this.state.asteroidSize} 
            height={600} 
            width={600}
            asteroidNum={this.state.asteroidNum}
          />
          <AsteroidNav 
            asteroidNum={this.state.asteroidNum}
            asteroidSize={this.state.asteroidSize}
            increment={
              () => this.setState({...this.state, asteroidSize: this.state.asteroidSize+5}) /* tslint:disable-line */
            }
        />
      </div>
    );
  }
}

export default App;
