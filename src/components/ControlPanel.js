import React, { Component } from 'react';
import PointChargeControls from '../containers/PointChargeControls';
import DisplayPreferenceControls from '../containers/DisplayPreferenceControls';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <h2>Display</h2>
                <DisplayPreferenceControls />
                <hr/>
                <h2>Add Charges</h2>
                <PointChargeControls />
            </div>
        )
    }
}

export default ControlPanel;