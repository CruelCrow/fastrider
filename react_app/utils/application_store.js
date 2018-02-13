import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import thunk from "redux-thunk";

const store = createStore(
    reducers,
    applyMiddleware(ReduxPromise, thunk)
);

export default store;