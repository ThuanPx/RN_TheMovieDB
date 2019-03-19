import { takeLatest, all } from 'redux-saga/effects';
import upcoming from './upcoming';
import types from '../../types';

export default [
  function* upcomingWatcher() {
    yield all([takeLatest(types.upcoming.fetching, upcoming)]);
  },
];
