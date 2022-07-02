import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moviesList } from "../Actions/MoviesListActions";
import Loader from "../Components/Loading";
import Message from "../Components/Message";
import Card from "../Components/movieCard";
import Grid from "@mui/material/Grid";
import Header from "../Components/Header";
import Img from "../Assests/one.jpg";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function HomeScreen() {
  const dispatch = useDispatch();

  const theme = useTheme();

  const params = useParams();

  const pageNumber = params.page || 1;

  const movieList = useSelector((state) => state.moviesList);

  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const { loading, movies, page, error, pages } = movieList;

  useEffect(() => {
    dispatch(moviesList(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <>
          <Header />
          {matches ? (
            <div>
              <img src={Img} style={{ height: "280px", width: "100%" }}></img>
            </div>
          ) : (
            <div>
              <img src={Img} style={{ height: "150px", width: "100%" }}></img>
            </div>
          )}

          <div>
            <Container maxWidth={false}>
              <Typography variant="h4">Trending</Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 0 }}
              >
                {movies.map((movies) => (
                  <Grid item xs={12} sm={4} md={3} key={movies.id}>
                    <Card name={movies} />
                  </Grid>
                ))}
              </Grid>
              <br/>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <div>
                  <Pagination page={page} pages={pages} />
                </div>
              </Grid>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default HomeScreen;
