import axios from "axios";
import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_REQUEST,

} from "../constants/movieListConstants";

export const moviesList = (page) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=8e285601abb4ffebce98e6142525e20c&language=en-US&page=${page}`
    );

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8e285601abb4ffebce98e6142525e20c&language=en-US`
    );

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


