import { put, call } from 'redux-saga/effects';
import api from '../../../../base/network';
import { KEY_API } from '../../../../utils/constants';
import { fetchingSuccess, fetchingError } from '../../../actions/detailmovie';

function* fetchMovieSaga(movieId) {
  try {
    const response = yield yield call(api.get, `movie/${movieId}?api_key=${KEY_API}`);
    console.log('response', response);
    if (response && response.status === 200) {
      const jsonMovie = response.data;
      const movie = jsonToObject(jsonMovie);
      return movie;
    }
  } catch (error) {
    console.log(error);
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

export default function* fetchMovie(action) {
  console.log('detialmovie', action);
  const movieId = action.payload;
  try {
    const movie = yield call(fetchMovieSaga, movieId);
    console.log('data', movie);
    yield put(fetchingSuccess({ movie }));
  } catch (error) {
    console.log(error);
    yield put(fetchingError({}));
  }
}
