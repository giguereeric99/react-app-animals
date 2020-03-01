import { combineReducers } from 'redux';
import catfacts from './catfacts'
import runtime from './runtime';

export default combineReducers({
  catfacts,
  runtime,
});
