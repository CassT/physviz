import React, { Component } from 'react';


const vectorLineStyles = [
    {
        stroke:'rgb(255,0,0)',
        strokeWidth: '1',
    },
    {
        stroke:'rgb(0,0,255)',
        strokeWidth: '1',
    },
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
    render() {
        var vectorLines = [];
        var coulumbForces = [];
        const {
            charges,
        } = this.props;
        if (this.props.showVectors) { 
            for (var i=0; i < charges.length; i++) {
                const forceFromCharge = coulumbForce(charges[i], 
                    {x: this.props.x, y: this.props.y, charge: this.props.charge}
                );
                coulumbForces.push(forceFromCharge);
                vectorLines.push(
                    <line 
                        x1={this.props.x} 
                        y1={this.props.y} 
                        x2={this.props.x + forceFromCharge.x}
                        y2={this.props.y + forceFromCharge.y}
                        style={vectorLineStyle[i]}
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
        if (totalVector.x >= 1000) { debugger }
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
                <circle 
                    cx={this.props.x} 
                    cy={this.props.y} 
                    r={this.props.r} 
                    style={this.props.styling}
                />
            </React.Fragment>
        );
    }
}

const coulumbForce = (sourceCharge, targetCharge) => {
    if (sourceCharge.x === targetCharge.x && sourceCharge.y === targetCharge.y) {
        return {
            x: 0,
            y: 0,
        };
    }
    const xDelta = targetCharge.x - sourceCharge.x;
    const yDelta = targetCharge.y - sourceCharge.y;
    const distance = Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
    const unitVector = {
        x: xDelta / distance,
        y: yDelta / distance,
    }
    const magnitude = (sourceCharge.charge * targetCharge.charge) / (distance^2);
    
    return {
        x: unitVector.x * magnitude,
        y: unitVector.y * magnitude,
    }
}