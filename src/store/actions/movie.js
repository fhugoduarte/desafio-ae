import * as actionTypes from './actionTypes';

export const gettingMovie = () => ({
  type: actionTypes.GETTING_MOVIE,
});

export const getMovies = () => ({
  type: actionTypes.GET_MOVIES,
});

export const getTopFourMovies = () => ({
  type: actionTypes.GET_TOP_FOUR_MOVIES,
});

export const getPopularMovies = (page) => ({
  type: actionTypes.GET_POPULAR_MOVIES,
  payload: { page },
});

export const getTopMovies = (page) => ({
  type: actionTypes.GET_TOP_MOVIES,
  payload: { page },
});

export const getUpcomingMovies = (page) => ({
  type: actionTypes.GET_UPCOMING_MOVIES,
  payload: { page },
});

export const getMoviesSuccess = (data, totalPages) => ({
  type: actionTypes.GET_MOVIES_SUCCESS,
  payload: {
    data,
    totalPages,
  }
});

export const getMoviesFail = () => ({
  type: actionTypes.GET_MOVIES_FAIL,
});

export const getMovieDetails = (idMovie) => ({
  type: actionTypes.GET_MOVIE_DETAILS,
  payload: { idMovie },
});

export const getMovieDetailsSuccess = (data) => ({
  type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
  payload: { data },
});

export const getMovieDetailsFail = () => ({
  type: actionTypes.GET_MOVIE_DETAILS_FAIL,
});

export const modifyCurrentMoviePage = (page) => ({
  type: actionTypes.MODIFY_CURRENT_MOVIE_PAGE,
  payload: { page },
});

export const searchMovies = (movie, page) => ({
  type: actionTypes.SEARCH_MOVIES,
  payload: {
    movie,
    page,
  },
});