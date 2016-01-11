import {createStore, applyMiddleware, compose} from 'redux';
const thunk = require('redux-thunk');
const createLogger = require('redux-logger');
import reducer from '../reducers/index';
const devTools = require('redux-devTools').devTools;

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  devTools()
)(createStore);

export default () => {
  return finalCreateStore(reducer);
}
