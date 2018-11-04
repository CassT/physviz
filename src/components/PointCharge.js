import React, { Component } from 'react';

const vectorLineStyle = {
    stroke: 'rgb(255,0,0)',
    strokeWidth: '1',
}

const totalVectorLineStyle = {
    stroke: 'rgb(0,0,0)',
    strokeWidth: '1',
}

class PointCharge extends Component {
    // handleMouseDown = (e) => {
    //     console.log('handling mouse down', e)
    //     this.coords = {
    //         x: e.pageX,
    //         y: e.pageY
    //     }
    //     document.addEventListener('mousemove', this.handleMouseMove);
    // }

    // handleMouseUp = () => {
    //     document.removeEventListener('mousemove', this.handleMouseMove());
    //     this.coords = {};
    // }

    // handleMouseMove = (e) => {
    //     const {
    //         charge,
    //         x,
    //         y,
    //     } = this.props;
    //     debugger;
    //     const xDiff = this.coords.x - e.pageX;
    //     const yDiff = this.coords.y - e.pageY;

    //     this.coords.x = e.pageX;
    //     this.coords.y = e.pageY;

    //     this.props.updateCharge(
    //         charge,
    //         x - xDiff,
    //         y - yDiff,
    //     );
    // }

    render() {
        var vectorLines = [];
        var coulumbForces = [];
        const {
            charges,
            styling,
            showVectors,
            charge,
            x,
            y,
            r,
        } = this.props;
        if (showVectors) { 
            for (var i=0; i < charges.length; i++) {
                const forceFromCharge = coulumbForce(charges[i], 
                    {x: x, y: y, charge: charge}
                );
                coulumbForces.push(forceFromCharge);
                vectorLines.push(
                    <line 
                        x1={x}
                        y1={y}
                        x2={x + forceFromCharge.x}
                        y2={y + forceFromCharge.y}
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
        return (
            <g>
                {vectorLines}
                <line 
                    x1={x}
                    y1={y}
                    x2={x + totalVector.x}
                    y2={y + totalVector.y}
                    style={totalVectorLineStyle}
                />
                <circle 
                    cx={x} 
                    cy={y} 
                    r={r} 
                    style={styling}
                    onClick={this.props.onClick}
                />
            </g>
        );
    }
}

export default PointCharge;

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
