import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import * as actions from './actions';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
export { actions };