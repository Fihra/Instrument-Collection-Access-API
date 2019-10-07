import React, { Component } from 'react';

class Counter extends Component{
    render(){
        const {counter, increment, decrement, reset } = this.props;
        return(
            <div>
                <div>{counter}</div>
                <div>
                    <button onClick={increment}>+1</button>
                </div>
                <div>
                    <button onClick={decrement}>-1</button>
                </div>
                <button onClick={reset}>RESET</button>
            </div>
        )
    }
}

export default Counter;