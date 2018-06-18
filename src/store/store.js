import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/combineReducer';
import generateRandomField from '../middlewares/generateRandomField.middleware';

const enhancer = applyMiddleware(generateRandomField);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer);

export default store;