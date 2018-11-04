import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePointCharge } from '../actions';

// const UpdatePointCharge = ({dispatch}) => {
//     let charge;
//     let xCoordinate;
//     let yCoordinate;

//     return (
//         <div>
//             charge:<input 
//                 type="number"
//                 ref={node => (charge=node)}
//                 onChange={() => dispatch(updateCharge(
//                     selectedCharge.id, 
//                     parseInt(charge.value), 
//                     parseInt(xCoordinate.value), 
//                     parseInt(yCoordinate.value),
//                 ))}
//                 defaultValue={selectedCharge.charge}
//             /><br />
//             x:<input 
//                 type="range" 
//                 min="0" 
//                 max="1000" 
//                 ref={node => (xCoordinate=node)} 
//                 defaultValue={selectedCharge.x} 
//             /><br />
//             y:<input 
//                 type="range"
//                 min="0"
//                 max="1000"
//                 ref={node => (yCoordinate=node)}
//                 defaultValue={selectedCharge.y}
//             />
//         </div>
//     )
// }

// export default UpdatePointCharge;

class SelectedChargeControls extends Component {
    render() {
        let xCoordinate;
        let yCoordinate;
        let charge;
        const {
            // xMin,
            // xMax,
            // yMin,
            // yMax,
            displayControls,
            selectedCharge,
            updateCharge,
        } = this.props;
        const onChange = () => updateCharge(
            selectedCharge.id, 
            parseInt(charge.value), 
            parseInt(xCoordinate.value), 
            parseInt(yCoordinate.value),
        )
        if (displayControls) {
            return (
                <div>
                    charge:<input 
                        type="number"
                        ref={node => (charge=node)}
                        onChange={onChange}
                        defaultValue={selectedCharge.charge}
                    /><br />
                    x:<input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        ref={node => (xCoordinate=node)} 
                        defaultValue={selectedCharge.x} 
                        onChange={onChange}
                    /><br />
                    y:<input 
                        type="range"
                        min="0"
                        max="1000"
                        ref={node => (yCoordinate=node)}
                        defaultValue={selectedCharge.y}
                        onChange={onChange}
                    />
                </div>
            )
        }
        else { return <div></div>}
    }
}

export default SelectedChargeControls;