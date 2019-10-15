import React from 'react';
import AllInstruments from '../components/AllInstruments';
import { connect } from 'react-redux';
//import * as actionCreators from '../actions';
import { loadInstruments, showInstrument } from '../actions';

const mapStateToProps = (state) => {
    //console.log(state.instruments)
    return {
        instruments: state.instruments,
        oneInstrument: state.oneInstrument
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInstruments: () => dispatch(loadInstruments()),
        getInstrument: (id) => dispatch(showInstrument(id))
    }
}

class InstrumentContainer extends React.Component{
    render(){
        return(
            <AllInstruments instruments={this.props.instruments} getInstrument={this.props.getInstrument}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentContainer);