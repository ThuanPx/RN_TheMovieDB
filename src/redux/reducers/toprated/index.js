import types from '../../types';

const initState = {
  isFetching: false,
  isError: false,
  movies: {},
};

const topratedReducer = (state = initState, { type, payload }) => {
  console.log('topratedReducer', JSON.stringify(payload));
  switch (type) {
    case types.toprated.fetching:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case types.toprated.fetchingSuccess:
      return {
        ...state,
        isFetching: false,
        isError: false,
        movies: payload.movies,
      };
    case types.toprated.fetchingError:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default topratedReducer;
