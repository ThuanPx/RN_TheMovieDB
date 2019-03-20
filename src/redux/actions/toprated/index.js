import types from '../../types';

export const fetching = payload => ({
  type: types.toprated.fetching,
  payload,
});

export const fetchingSuccess = payload => ({
  type: types.toprated.fetchingSuccess,
  payload,
});

export const fetchingError = payload => ({
  type: types.toprated.fetchingError,
  payload,
});

export default {
  fetching,
  fetchingSuccess,
  fetchingError,
};
