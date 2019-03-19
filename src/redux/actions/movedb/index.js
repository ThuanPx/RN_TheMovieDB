import types from '../../types';

export const fetching = payload => ({
  types: types.moviedb.fetching,
  payload,
});

export const fetchingSuccess = payload => ({
  types: types.moviedb.fetchingSuccess,
  payload,
});

export const fetchingError = payload => ({
  types: types.moviedb.fetchingError,
  payload,
});

export default {
  fetching,
  fetchingSuccess,
  fetchingError,
};
