import { put, call } from 'redux-saga/effects';
import { create } from 'apisauce';
import axios from 'axios';
import request from '../../../../base/network';
import { KEY_API, BASE_URL, TIME_OUT } from '../../../../utils/constants';
import { fetchingSuccess, fetchingError } from '../../../actions/upcoming';

const request2 = axios.create({
  baseUrl: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

function requestUrl() {
  // return request({
  //   url: `movie/top_rated?api_key=${KEY_API}&page=1`,
  // });

  return request2.get(`movie/top_rated?api_key=${KEY_API}&page=1`);
}


const api = create({
  // baseURL: 'https://api.github.com',
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
  },
});

function* fetchTopRatedSaga() {
  try {
    const response = yield yield call(request2.get, `movie/top_rated?api_key=${KEY_API}&page=1`);
    console.log('response', response);
    return response;
  } catch (error) {
    console.log('error cmnr');
    console.log(error);
  }
  return null;

  // try {
  //   const response = yield yield call(
  //     // api.get, '/search/users?q=thuan',
  //     api.get, `movie/top_rated?api_key=${KEY_API}&page=1`,
  //   );
  //   console.log('response', response);
  //   // if (response && response.status === 200) {
  //   //   const data = response.data.items;
  //   //   const users = data.map(it => objectToItem(it));
  //   //   return users;
  //   // }
  //   return true;
  // } catch (e) {
  //   console.log(e);
  // }
  // return null;
}

function objectToItem(it) {
  return {
    login: it.login,
    id: it.id,
    avatarUrl: it.avatar_url,
  };
}

export default function* fetchUpcoming(action) {
  console.log('upcoming', action);
  try {
    const data = yield call(fetchTopRatedSaga);
    console.log('data', data);
    yield put(fetchingSuccess({}));
  } catch (error) {
    console.log(error);
    yield put(fetchingError);
  }
}
