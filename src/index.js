import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loadInstruments } from './actions/index';

const store = createStore(
    reducers, applyMiddleware(thunk)
)

store.dispatch(loadInstruments());
console.log(store.getState());
ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>, document.getElementById('root'));

// ReactDOM.render(
//         <App />, document.getElementById('root'));

