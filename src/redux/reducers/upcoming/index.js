import types from '../../types';

const initState = {
  isFetching: false,
  isError: false,
  movies: {},
};

const upcomingReducer = (state = initState, { type, payload }) => {
  console.log('upcoming', JSON.stringify(payload));
  switch (type) {
    case types.upcoming.fetching:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case types.upcoming.fetchingSuccess:
      return {
        ...state,
        isFetching: false,
        isError: false,
        movies: payload.movies,
      };
    case types.upcoming.fetchingError:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default upcomingReducer;
