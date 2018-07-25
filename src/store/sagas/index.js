import { takeEvery } from 'redux-saga/effects';
import {
  getMovieSaga,
  getPopularMoviesSaga,
  getMovieDetailsSaga,
  getTopFourMoviesSaga,
  getTopMoviesSaga,
  getUpcomingMoviesSaga,
  searchMoviesSaga,
} from './movie';

import * as actionTypes from '../actions/actionTypes';

export function* watchMovie() {
  yield takeEvery(actionTypes.GET_MOVIES, getMovieSaga);
  yield takeEvery(actionTypes.GET_POPULAR_MOVIES, getPopularMoviesSaga);
  yield takeEvery(actionTypes.GET_TOP_FOUR_MOVIES, getTopFourMoviesSaga);
  yield takeEvery(actionTypes.GET_MOVIE_DETAILS, getMovieDetailsSaga);
  yield takeEvery(actionTypes.GET_TOP_MOVIES, getTopMoviesSaga);
  yield takeEvery(actionTypes.GET_UPCOMING_MOVIES, getUpcomingMoviesSaga);
  yield takeEvery(actionTypes.SEARCH_MOVIES, searchMoviesSaga);
}