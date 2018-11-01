import React, { Component } from 'react';
import AddPointCharge from '../containers/AddPointCharge';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <h2>Display</h2>
                <button type="button">Toggle Grid</button><br/>
                <button type="button">Toggle Grid Vectors</button><br/>
                <hr/>
                <h2>Add Charges</h2>
                <AddPointCharge />
            </div>
        )
    }
}

export default ControlPanel;