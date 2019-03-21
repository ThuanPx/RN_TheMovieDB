import { combineReducers } from 'redux';
import upcomingReducer from './upcoming';
import topratedReducer from './toprated';
import detailMovieReducer from './detaimovie';

const rootReducer = combineReducers({
  upcoming: upcomingReducer,
  toprated: topratedReducer,
  detailmovie: detailMovieReducer,
});

export default rootReducer;
