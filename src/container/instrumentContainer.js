import { connect } from 'react-redux';
//import Counter from '../components/Counter';
import AllInstruments from '../components/AllInstruments';
import { fetchInstruments } from '../actions';
import fetchInstrumentsAction from '../actions/FetchingInstruments';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return{
        instruments: fetchInstruments(state)
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    
        // increment: () => dispatch(increment()),
        // decrement: () => dispatch(decrement()),
        // reset: () => dispatch(reset())
        fetchInstruments: () => fetchInstrumentsAction
    }, dispatch)


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(AllInstruments);