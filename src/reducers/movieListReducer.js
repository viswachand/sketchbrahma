import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_REQUEST,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_POSTER_FAIL,
  MOVIE_POSTER_REQUEST,
  MOVIE_POSTER_SUCCESS
} from "../constants/movieListConstants";

export const moviesListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true, movies: [] };
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload.results,
        pages: action.payload.total_pages,
        page: action.payload.page,
      };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const moviesDetailsReducer = (state = { moviesDetails: [] }, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { loading: true, moviesDetails: [] };
    case MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        movieDetails: action.payload,
      };
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


