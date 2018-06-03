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

    this.state = { asteroidNum:0, asteroidSize:100 }
  }


  public render() {
    return (
      <div className="appWrapper">

        <h1 className="headsUp">Today's Near Earth Objects</h1>


        <div id="sizeVis" className="vis">
          Asteroid Size Comparison
          <AsteroidSizeVis 
            size={this.state.asteroidSize} 
            height={600} 
            width={600}
            asteroidNum={this.state.asteroidNum}
          />
        </div>
        <div className="vis">Upcoming Vis</div>
        <AsteroidNav 
          asteroidNum={this.state.asteroidNum}
          asteroidSize={this.state.asteroidSize}
          increment={
            () => this.setState({...this.state, asteroidSize: this.state.asteroidSize+5}) /* tslint:disable-line */
          }
        />
        <div id="NeoJson">
          <NeoClass API_Key="UmwJQ1PsgKzUDRfptPJH1T9CbveNXUj4rH39sjEI"/> 
        </div>
      </div>
    );
  }
}

export default App;
