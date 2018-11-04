import { connect } from 'react-redux';
import { updatePointCharge } from '../actions';
import SelectedChargeControls from '../components/SelectedChargeControls';

const mapStateToProps = state => ({
    displayControls: (state.displayPreferences.selectedPointChargeId !== -1),
    selectedCharge: state.pointCharges[state.displayPreferences.selectedPointChargeId] || {},
});

const mapDispatchToProps = dispatch => ({
    updateCharge: (id, charge, x, y) => dispatch(updatePointCharge(id, charge, x, y))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectedChargeControls);