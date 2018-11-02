import { connect } from 'react-redux';
import { addPointCharge } from '../actions';
import CoordinateGrid from '../components/CoordinateGrid';

function mapStateToProps(state) {
    return {
        charges: state.pointCharges,
        displayPreferences: state.displayPreferences,
    };
}

const mapDispatchToProps = dispatch => ({
    addPointCharge: (charge, x, y) => dispatch(
        addPointCharge(charge, x, y)
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoordinateGrid);