import React, { Component } from 'react';


const charges = [
    {
        x: 255,
        y: 305,
        charge: 35.000,
    },
    {
        x: 438,
        y: 678,
        charge: 46.5,
    }
]

const vectorLineStyle = {
    stroke: 'rgb(255,0,0)',
    strokeWidth: '1',
}

const totalVectorLineStyle = {
    stroke: 'rgb(0,0,0)',
    strokeWidth: '1',
}

export default class PointCharge extends Component {
    // coulumbForceVector(pointCharges) {
    //     var vector = {
    //         x: 0,
    //         y: 0,
    //     }
    //     for (var i=0; i < pointCharges.length; i++) {
    //         const pointCharge = pointCharges[i];
    //         const xDelta = this.props.x - pointCharge.x;
    //         const yDelta = this.props.y - pointCharge.y;
    //         const distance = Math.sqrt(xDelta^2 + yDelta^2);
    //         const unitVector = {
    //             x: xDelta / distance,
    //             y: yDelta / distance,
    //         }
    //         vector.x += unitVector.x * 
    //     }
    // }

    coulumbForce(pointCharge) {
        const xDelta = this.props.x - pointCharge.x;
        const yDelta = this.props.y - pointCharge.y;
        const distance = Math.sqrt(Math.abs(Math.pow(xDelta, 2) + Math.pow(yDelta, 2)));
        const unitVector = {
            x: xDelta / distance,
            y: yDelta / distance,
        }
        const magnitude = (pointCharge.charge * this.props.charge) / (distance^2);
        
        return {
            x: unitVector.x * magnitude,
            y: unitVector.y * magnitude,
        }
    }

    render() {
        var vectorLines = [];
        var coulumbForces = [];
        if (this.props.showVectors) { 
            for (var i=0; i < charges.length; i++) {
                const forceFromCharge = this.coulumbForce(charges[i]);
                coulumbForces.push(forceFromCharge);
                vectorLines.push(
                    <line 
                        x1={this.props.x} 
                        y1={this.props.y} 
                        x2={this.props.x + forceFromCharge.x} 
                        y2={this.props.y + forceFromCharge.y}
                        style={vectorLineStyle}
                    />
                );
            }
        }
        var totalVector = {
            x: 0,
            y: 0,
        }
        for (var i=0; i < coulumbForces.length; i++) {
            const victor = coulumbForces[i];
            totalVector.x += victor.x;
            totalVector.y += victor.y;
        }
        return (
            <React.Fragment>
                {vectorLines}
                <line 
                    x1={this.props.x}
                    y1={this.props.y}
                    x2={this.props.x + totalVector.x}
                    y2={this.props.y + totalVector.y}
                    style={totalVectorLineStyle}
                />
                <circle cx={this.props.x} cy={this.props.y} r={this.props.r} />
            </React.Fragment>
        );
    }
}