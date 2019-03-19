import { all } from 'redux-saga/effects';
import topRated from './topRated';

export default function* rootSaga() {
  yield all([
    topRated(),
  ]);
}
