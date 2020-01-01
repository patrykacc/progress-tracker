import {applyMiddleware, createStore} from 'redux';
import reducers from './redux/reducers';
import logger from './redux/middleware/logger';
import thunk from 'redux-thunk';

export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);