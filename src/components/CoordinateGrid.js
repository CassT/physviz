import React, { Component } from 'react';
import PointCharge from './PointCharge';

const gridPointStyle = (displayGridPoints) => {
    if (displayGridPoints) {
        return {
            fill: 'blue',
        }
    }
    else {
        return {
            display: 'none',
        }
    }
}

const customChargeStyle = {
    fill: 'red',
}

export default class CoordinateGrid extends Component {
    constructGridPoints() {
        const {
            displayPreferences,
            xGridStep,
            yGridStep,
            xScale,
            yScale,
            charges,
        } = this.props;

        if (!displayPreferences.displayGrid) {
            return [];
        }

        const xGridQuantity = Math.floor(xScale/xGridStep);
        const yGridQuantity = Math.floor(yScale/yGridStep);
        const xOffset = xGridStep / 2;
        const yOffset = yGridStep / 2;

        var gridPoints = [];
        for (var i=0; i < xGridQuantity; i++) {
            for (var j=0; j < yGridQuantity; j++) {
                const xCoordinate = i * xGridStep + xOffset;
                const yCoordinate = j * yGridStep + yOffset;
                gridPoints.push(
                    <PointCharge 
                        showVectors={displayPreferences.displayGridVectors}
                        showPoint={displayPreferences.displayGridPoints}
                        x={xCoordinate}
                        y={yCoordinate}
                        r="2.5"
                        charge={100.0}
                        key={`gridPointKey-${i}-${j}`}
                        charges={charges}
                        styling={gridPointStyle(displayPreferences.displayGridPoints)}
                    />
                );
            }
        }
        return gridPoints;
    }

    render() {
        const gridPoints = this.constructGridPoints();
        const {
            xScale,
            yScale,
            charges,
        } = this.props;

        return (
            <svg viewBox={`0 0 ${xScale} ${yScale}`}>
                {gridPoints}
                {charges.map(charge =>
                    <PointCharge
                        showVectors={true}
                        showPoint={true}
                        x={charge.x}
                        y={charge.y}
                        r={5}
                        charge={charge.charge}
                        charges={charges}
                        styling={customChargeStyle}
                        key={`pointChargeKey-${charge.x}-${charge.y}`}
                    />
                )}
            </svg>
        );
    }
}
