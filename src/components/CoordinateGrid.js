import React, { Component } from 'react';
import PointCharge from './PointCharge';


export default class CoordinateGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointCharges: [],
            gridPoints: [],
        };
    }

    componentDidMount() {
        this.constructGridPoints();
    }

    constructGridPoints() {
        const {
            xGridStep,
            yGridStep,
            xScale,
            yScale,
        } = this.props;

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
                    />
                );
            }
        }

        this.setState({
            gridPoints,
        });
    }

    render() {
        const {
            // displayGrid,
            // displayNeedles,
            // xGridStep,
            // yGridStep,
            xScale,
            yScale,
        } = this.props;

        return (
            <svg viewBox={`0 0 ${xScale} ${yScale}`}>
                {this.state.gridPoints}
            </svg>
        );
    }
}
