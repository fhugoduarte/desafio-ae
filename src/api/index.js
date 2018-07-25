import axios, {  } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

import { API_KEY } from '../util/constants';

const axiosAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  // headers: {
  //   'Cache-Control': 'no-cache'
  // },
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
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

