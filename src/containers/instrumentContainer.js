import React from 'react';
import AllInstruments from '../components/AllInstruments';
import { connect } from 'react-redux';
//import * as actionCreators from '../actions';
import { loadInstruments } from '../actions';

const mapStateToProps = (state) => {
    return {
        instruments: state.instruments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInstruments: () => dispatch(loadInstruments())
    }
}

class InstrumentContainer extends React.Component{
    render(){
        return(
            <AllInstruments instruments={this.props.instruments} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentContainer);