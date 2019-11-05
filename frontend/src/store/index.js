import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as actions from './actions';
import combinedReducer from './reducers';

export default createStore(combinedReducer, applyMiddleware(thunk));
// export default createStore(combinedReducer, applyMiddleware(logger, thunk));
export { actions };
