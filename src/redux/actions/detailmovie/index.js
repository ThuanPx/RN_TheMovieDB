import types from '../../types';

export const fetching = payload => ({
  type: types.detailmovie.fetching,
  payload,
});

export const fetchingSuccess = payload => ({
  type: types.detailmovie.fetchingSuccess,
  payload,
});

export const fetchingError = payload => ({
  type: types.detailmovie.fetchingError,
  payload,
});

function fetchingSuccess2(payload) {
  return {
    type: types.detailmovie.fetchingSuccess,
    payload,
  };
}

export default {
  fetching,
  fetchingSuccess,
  fetchingError,
  fetchingSuccess2,
};
