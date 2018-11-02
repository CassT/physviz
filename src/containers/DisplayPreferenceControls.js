import React from 'react';
import { connect } from 'react-redux';
import { 
    toggleGrid,
    toggleGridVectors,
    toggleGridPoints,
} from '../actions';

const ToggleGridOptions = ({dispatch}) => {
    return (
        <div>
            <button
                onClick={() => dispatch(toggleGrid())}
            >Toggle Grid</button>
            <button
                onClick={() => dispatch(toggleGridPoints())}
            >Toggle Grid Points</button>
            <button
                onClick={() => dispatch(toggleGridVectors())}
            >Toggle Grid Vectors</button>
        </div>
    )
}

export default connect()(ToggleGridOptions);