import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoordinateGrid from './components/CoordinateGrid';


class App extends Component {
  render() {
    const coordinateGridStyle = {
      height: 750,
      width: 750,
      border: "1px solid black",
    }
    return (
      <div>
        <div style={coordinateGridStyle}>
          <CoordinateGrid xGridStep='100' yGridStep='100' xScale='1000' yScale='1000' />
        </div>
      </div>
    );
  }
}

export default App;
