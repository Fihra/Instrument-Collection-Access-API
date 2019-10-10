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
    // componentDidMount() {
    //     this.props.fetchInstruments();
    // }

    render(){
        return(
            <div>
                <AllInstruments instruments={this.props.instruments}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentContainer);