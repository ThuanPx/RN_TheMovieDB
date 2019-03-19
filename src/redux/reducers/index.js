import { combineReducers } from 'redux';
import moviedbReducer from './moviedb';

const rootReducer = combineReducers({
  moviedb: moviedbReducer,
});

export default rootReducer;
