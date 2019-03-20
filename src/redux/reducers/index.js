import { combineReducers } from 'redux';
import upcomingReducer from './upcoming';
import topratedReducer from './toprated';

const rootReducer = combineReducers({
  upcoming: upcomingReducer,
  toprated: topratedReducer,
});

export default rootReducer;
