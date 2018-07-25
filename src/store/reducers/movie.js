import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: false,
  movieDetails: {},
  totalPages: 0,
};
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_MOVIE:
      return {
        ...state,
        loading: true,
        totalPages: 0,
      }
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.data,
        totalPages: action.payload.totalPages,
        loading: false,
      }
    case actionTypes.GET_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        loading: false,
      }
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload.data,
        loading: false,
      }
    case actionTypes.GET_MOVIE_DETAILS_FAIL:
      return {
        ...state,
        movieDetails: {},
        loading: false,
      }
    default:
    return state;
  }
};

export default reducer;