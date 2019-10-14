import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import logger from './middleware/logger';
import thunk from 'redux-thunk';

export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);