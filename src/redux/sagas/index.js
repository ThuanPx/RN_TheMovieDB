import { all, fork } from 'redux-saga/effects';
import moviedb from './moviedb';

export default function* rootSaga() {
  yield all([...moviedb.map(watcher => fork(watcher))]);
}
