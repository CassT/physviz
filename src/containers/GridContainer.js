import { connect } from 'react-redux';
import { addPointCharge } from '../actions';
import CoordinateGrid from '../components/CoordinateGrid';

// const mapStateToProps = state => ({
//     charges: state.pointCharges,
// });

function mapStateToProps(state) {
    console.log(state.pointCharges);
    return {charges: state.pointCharges};
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