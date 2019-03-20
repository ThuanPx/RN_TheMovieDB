import { put, call } from 'redux-saga/effects';
import api from '../../../../base/network';
import { KEY_API } from '../../../../utils/constants';
import { fetchingSuccess, fetchingError } from '../../../actions/toprated';


function* fetchTopRatedSaga() {
  try {
    const response = yield yield call(
      api.get, `movie/top_rated?api_key=${KEY_API}&page=1`,
    );
    console.log('response', response);
    if (response && response.status === 200) {
      const data = response.data.results;
      const movie = data.map(it => jsonToObject(it));
      return movie;
    }
  } catch (e) {
    console.log(e);
  }
  return null;
}

function jsonToObject(it) {
  return {
    title: it.title,
    id: it.id,
    overview: it.overview,
    poster: it.poster_path,
    backdrop: it.backdrop_path,
    vote: it.vote_average,
    releaseDate: it.release_date,
    video: it.video,
  };
}

export default function* fetchToprated(action) {
  console.log('upcoming', action);
  try {
    const movies = yield call(fetchTopRatedSaga);
    console.log('data', movies);
    yield put(fetchingSuccess({ movies }));
  } catch (error) {
    console.log(error);
    yield put(fetchingError);
  }
}
