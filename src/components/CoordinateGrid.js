import React, { Component } from 'react';
import PointCharge from './PointCharge';

const gridPointStyle = {
    'fill-opacity': 0.5, 
}

const customChargeStyle = {
    fill: 'red',
}

export default class CoordinateGrid extends Component {
    constructGridPoints() {
        const {
            displayGrid,
            xGridStep,
            yGridStep,
            xScale,
            yScale,
            charges,
        } = this.props;

        if (!displayGrid) {
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
                        showVectors={true} 
                        x={xCoordinate} 
                        y={yCoordinate} 
                        r="2.5" 
                        charge={100.0} 
                        key={`gridPointKey-${i}-${j}`}
                        charges={charges}
                        style={gridPointStyle}
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
