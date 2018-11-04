import React, { Component } from 'react';
import '../App.css';
import ControlPanel from './ControlPanel';
import GridContainer from '../containers/GridContainer';
import SelectedChargeControlsContainer from '../containers/SelectedChargeControlsContainer';

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

class App extends Component {
  render() {
    return (
      <div>
        <div style={panelStyle}>
          <GridContainer 
            charges={this.props.pointCharges} 
            xGridStep='100' 
            yGridStep='100' 
            xScale='1000' 
            yScale='1000' 
          />
        </div>
        <div style={controlPanelStyle}>
          <ControlPanel />
          <SelectedChargeControlsContainer />
        </div>
      </div>
    );
  }
}

export default App;