import { takeLatest, all } from 'redux-saga/effects';
import upcoming from './upcoming';
import toprated from './toprated';
import detailmovie from './detailmovie';
import types from '../../types';

export default [
  function* upcomingWatcher() {
    yield all([takeLatest(types.upcoming.fetching, upcoming)]);
  },
  function* topRatedWatcher() {
    yield all([takeLatest(types.toprated.fetching, toprated)]);
  },
  function* detailmovieWatcher() {
    yield all([takeLatest(types.detailmovie.fetching, detailmovie)]);
  },
];
