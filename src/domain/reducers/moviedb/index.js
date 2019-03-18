import types from '../../types';


const initState = {
  isFetching: false,
  isError: false,
};

const moviedbReducer = (state = initState, { type, payload }) => {
  console.log('moviedbReducer', JSON.stringify(payload));
  switch (type) {
    case types.moviedb.fetching:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case types.moviedb.fetchingSuccess:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case types.moviedb.fetchingError:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default moviedbReducer;
