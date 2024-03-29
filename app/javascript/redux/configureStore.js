import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index'
import thunk from 'redux-thunk';

import think from 'redux-thunk';

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;