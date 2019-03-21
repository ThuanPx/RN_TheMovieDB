import types from '../../types';

const initState = {
  isFetching: false,
  isError: false,
};

const detailMovieReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.detailmovie.fetching:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case types.detailmovie.fetchingSuccess:
      return {
        ...state,
        isFetching: false,
        isError: false,
        movie: payload.movie,
      };
    case types.detailmovie.fetchingError:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default detailMovieReducer;
