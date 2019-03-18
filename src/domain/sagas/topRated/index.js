import { put, call, takeLatest } from 'redux-saga/effects';
import request from '../../../base/network';
import types from '../../types';

function requestUrl() {
  return request({
    method: 'GET',
    url: 'movie/top_rated/page=1',
  });
}

function* fetchTopRatedSaga() {
  try {
    const response = yield call(requestUrl);
    console.log(response);
    yield put({ type: types.moviedb.fetchingSuccess });
  } catch (error) {
    console.log(error);
    yield put({ type: types.moviedb.fetchingError });
  }
}

export default function* watcherSaga(action) {
  console.log('moviedb', action);
  yield takeLatest(types.moviedb.fetching, fetchTopRatedSaga);
}
