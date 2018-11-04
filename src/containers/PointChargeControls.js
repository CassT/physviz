import React from 'react';
import { connect } from 'react-redux';
import { addPointCharge } from '../actions';

const AddPointCharge = ({dispatch}) => {
    let xCoordinate;
    let yCoordinate;
    let charge;

    return (
        <div>
            <form
                onSubmit={e => {
                        e.preventDefault();
                        dispatch(
                            addPointCharge(
                                parseInt(charge.value), 
                                parseInt(xCoordinate.value), 
                                parseInt(yCoordinate.value),
                            )
                        );
                    }
                }
            >
                <input type="number" ref={node => (charge=node)} defaultValue={100}/>
                <input type="number" ref={node => (xCoordinate=node)} defaultValue={500}/>
                <input type="number" ref={node => (yCoordinate=node)} defaultValue={500}/>
                <button type="submit">Add Charge</button>
            </form>
        </div>
    )
}

export default connect()(AddPointCharge);