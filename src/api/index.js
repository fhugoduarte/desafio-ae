import axios from 'axios';
import _ from 'lodash';

import { API_KEY } from '../util/constants';

const axiosAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

const GET_MOVIE_URL = 'movie/popular/';
const GET_POPULAR_MOVIES_URL = 'movie/popular';
const GET_MOVIE_DETAILS_URL = 'movie/';
const GET_TOP_MOVIES_URL = 'movie/top_rated';
const GET_UPCOMING_MOVIES_URL = 'movie/upcoming';
const SEARCH_MOVIES_URL = '/search/movie'

export const getMovie = () => axiosAPI.get(GET_MOVIE_URL);

export const getPopularMovies = (page) =>
  axiosAPI.get(
    GET_POPULAR_MOVIES_URL,
    {
      params: {
        page: page,
      },
    },
  );

export const getMovieDetails = (idMovie) =>
  axiosAPI.get(`${GET_MOVIE_DETAILS_URL}${idMovie}`);

export const getTopMovies = (page) =>
axiosAPI.get(
  GET_TOP_MOVIES_URL,
  {
    params: {
      page: page,
    },
  },
);

export const getUpcomingMovies = (page) =>
axiosAPI.get(
  GET_UPCOMING_MOVIES_URL,
  {
    params: {
      page: page,
    },
  },
);

export const searchMovies = (query, page) =>
  axiosAPI.get(
    SEARCH_MOVIES_URL,
    {
      params: {
        query: query,
        page: page,
      },
    },
  );

