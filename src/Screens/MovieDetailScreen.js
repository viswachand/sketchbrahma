import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "../Actions/MoviesListActions";
import { useParams } from "react-router-dom";
import { height, styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

import { Container } from "@mui/system";
import Header from "../Components/Header";
import { Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Image = styled("div")({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "top",
});

const Text = styled("div")({
  width: "100%",
  height: "690px",
  backgroundImage:
    "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 1) 20% , rgba(0, 0, 0, .7) 40%, rgba(0, 0, 0, 0) 70% )",
});

export default function MovieDetailScreen({ history, match }) {
  const [movieDetials, setMovieDetials] = useState([]);

  const theme = useTheme();

  const dispatch = useDispatch();

  const params = useParams();

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  console.log(matches)

  useEffect(() => {
    dispatch(MovieDetails(params.id)).then((res) => setMovieDetials(res));
  }, [dispatch, params.id]);

  return (
    <>
      <Header />

      {matches ? (
        <div>
          <Image
            style={{
              backgroundImage: `url(${baseImgUrl}/${size}/${movieDetials.backdrop_path})`,
            }}
          >
            <Text>
              <Container sx={{ maxWidth: "1450px" }} maxWidth={false}>
                <div>
                  <Link to="/">
                    <KeyboardBackspaceIcon
                      sx={{
                        width: "25px",
                        height: "25px",
                        color: "#FFFFFF",
                        m: "50px 0px 50px 0px",
                      }}
                    />
                  </Link>
                </div>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-around"
                  alignItems="flex-start"
                >
                  <Grid md={4} xs={1}>
                    <Typography variant="h2" sx={{ m: "0px" }}>
                      {movieDetials.original_title}
                    </Typography>
                    <br />
                    <Typography variant="h3">
                      Rating : {`${movieDetials.vote_average}`} /10
                    </Typography>
                    <br />
                    <Typography variant="h1">
                      {movieDetials.overview}
                    </Typography>
                    <br />
                    <Typography variant="h3">
                      Release Date : {movieDetials.release_date}
                    </Typography>
                    <br />
                    <Typography variant="h3">
                      Original Language : {movieDetials.original_language}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Text>
          </Image>
        </div>
      ) : (
        <>
          <Image
            style={{
              backgroundImage: `url(${baseImgUrl}/${size}/${movieDetials.backdrop_path})`,
              width: "410px",
              height: "260px",
            }}
          >
            <Link to="/">
              <KeyboardBackspaceIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  color: "#FFFFFF",
                  m: "30px 0px 50px 20px",
                }}
              />
            </Link>
          </Image>
          <br />
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid sx={{ m: "20px" }}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  m: "0px",
                }}
              >
                {movieDetials.original_title}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                }}
              >
                Rating : {`${movieDetials.vote_average}`} /10
              </Typography>
              <br />
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "400",
                  textAlign: "justify",
                  lineHeight: "152%",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {movieDetials.overview}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                }}
              >
                Release Date : {movieDetials.release_date}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                }}
              >
                Original Language : {movieDetials.original_language}
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
