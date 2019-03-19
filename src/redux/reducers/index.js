import { combineReducers } from 'redux';
import moviedbReducer from './moviedb';

const rootReducer = combineReducers({
  upcoming: moviedbReducer,
});

export default rootReducer;
