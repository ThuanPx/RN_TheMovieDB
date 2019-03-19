import types from '../../types';

export const fetching = payload => ({
  type: types.moviedb.fetching,
  payload,
});

export const fetchingSuccess = payload => ({
  type: types.moviedb.fetchingSuccess,
  payload,
});

export const fetchingError = payload => ({
  type: types.moviedb.fetchingError,
  payload,
});

export default {
  fetching,
  fetchingSuccess,
  fetchingError,
};
