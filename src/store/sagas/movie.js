import { call, put } from 'redux-saga/effects';
import {
  getMovie,
  getPopularMovies,
  getMovieDetails,
  getTopMovies,
  getUpcomingMovies,
  searchMovies,
} from '../../api';
import _ from 'lodash';
import { toastr } from 'react-redux-toastr'

import * as actions from '../actions';


export function* getMovieSaga() {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(getMovie);
    toastr.success('Sucesso!', 'Lista de filmes atualizada...');
    yield put(actions.getMoviesSuccess(response.data));
  } catch (error) {
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMoviesFail());
  }
}

export function* getTopFourMoviesSaga() {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(getPopularMovies, 1);
    const topFour = _.slice(response.data.results, 0, 4);
    toastr.success('Sucesso!', 'Lista de filmes atualizada...');
    yield put(actions.getMoviesSuccess(topFour, response.data.total_pages));
  } catch (error) {
    console.log('EROR', error);
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMoviesFail());
  }
}

export function* getPopularMoviesSaga(action) {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(getPopularMovies, action.payload.page);
    toastr.success('Sucesso!', 'Lista de filmes atualizada...');
    yield put(actions.getMoviesSuccess(response.data.results, response.data.total_pages));
  } catch (error) {
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMoviesFail());
  }
}

export function* getTopMoviesSaga(action) {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(getTopMovies, action.payload.page);
    toastr.success('Sucesso!', 'Lista de filmes atualizada...');
    yield put(actions.getMoviesSuccess(response.data.results, response.data.total_pages));
  } catch (error) {
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMoviesFail());
  }
}

export function* getUpcomingMoviesSaga(action) {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(getUpcomingMovies, action.payload.page);
    toastr.success('Sucesso!', 'Lista de filmes atualizada...');
    yield put(actions.getMoviesSuccess(response.data.results, response.data.total_pages));
  } catch (error) {
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMoviesFail());
  }
}

export function* getMovieDetailsSaga(action) {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(getMovieDetails, action.payload.idMovie);
    toastr.success('Sucesso!', 'Descrição atualizada...');
    yield put(actions.getMovieDetailsSuccess(response.data));
  } catch (error) {
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMovieDetailsFail());
  }
}

export function* searchMoviesSaga(action) {
  yield put(actions.gettingMovie());
  try {
    const response = yield call(searchMovies, action.payload.movie, action.payload.page);
    toastr.success('Sucesso!', 'Lista de filmes atualizada...');
    yield put(actions.getMoviesSuccess(response.data.results, response.data.total_pages));
  } catch (error) {
    toastr.error('Erro!', 'Tente novamente em breve.');
    yield put(actions.getMoviesFail());
  }
}