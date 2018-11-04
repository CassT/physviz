import { connect } from 'react-redux';
import { selectPointCharge } from '../actions';
import CoordinateGrid from '../components/CoordinateGrid';

const mapStateToProps = (state) => {
    return {
        charges: state.pointCharges,
        displayPreferences: state.displayPreferences,
    };
}

const mapDispatchToProps = dispatch => ({
    selectPointCharge: (id) => dispatch(
        selectPointCharge(id),
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoordinateGrid);