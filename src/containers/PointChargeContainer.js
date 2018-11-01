import { connect } from 'react-redux';
import PointCharge from '../components/PointCharge';


const mapStateToProps = state => ({
    pointCharges: state.pointCharges,
})

