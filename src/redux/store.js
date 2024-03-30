import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import * as thunk from 'redux-thunk';
import orderReducer from './reducers';

const store = createStore(orderReducer, applyMiddleware(thunk.thunk));

export default store;