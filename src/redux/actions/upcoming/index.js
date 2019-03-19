import types from '../../types';

export const fetching = payload => ({
  type: types.upcoming.fetching,
  payload,
});

export const fetchingSuccess = payload => ({
  type: types.upcoming.fetchingSuccess,
  payload,
});

export const fetchingError = payload => ({
  type: types.upcoming.fetchingError,
  payload,
});

export default {
  fetching,
  fetchingSuccess,
  fetchingError,
};
