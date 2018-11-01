import React, { Component } from 'react';
import '../App.css';
import CoordinateGrid from './CoordinateGrid';
import ControlPanel from './ControlPanel';
import GridContainer from '../containers/GridContainer';
import AddPointCharge from '../containers/AddPointCharge';

class App extends Component {
  render() {
    const panelStyle = {
      height: 750,
      width: 750,
      border: "1px solid black",
      float: "left",
      clear: "none",
    }
    const controlPanelStyle = {
      height: 750,
      width: 250,
      border: "1px solid black",
      float: "left",
      clear: "none",
    }
    return (
      <div>
        <div style={panelStyle}>
          <GridContainer charges={this.props.pointCharges} xGridStep='100' yGridStep='100' xScale='1000' yScale='1000' />
        </div>
        <div style={controlPanelStyle}>
          <ControlPanel />
        </div>
      </div>
    );
  }
}

export default App;
