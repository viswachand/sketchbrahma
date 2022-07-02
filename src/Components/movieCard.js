import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActionArea, Grid } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export default function MultiActionAreaCard({ name }) {
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  const url = `${baseImgUrl}/${size}/${name.poster_path}`;

  return (
    <Card sx={{ borderRadius: "0px" }}>
      <Link to={`/movieDetials/${name.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={`${url}`} />
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid md={8} xs={7}>
                <Typography variant="h5">{name.title}</Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <GradeIcon
                    sx={{
                      width: "15px",
                      width: "15px",
                      color: "#FFE234",
                      marginRight: "10px",
                    }}
                  />
                  <Typography variant="h6">{name.vote_average}</Typography>
                  <Typography variant="h6" sx={{ margin: "0px 5px 0px 5px" }}>
                    /
                  </Typography>
                  <Typography variant="h6">10</Typography>
                </Grid>
              </Grid>
              <Grid>
                <PlayCircleFilledWhiteIcon
                  sx={{
                    width: "35px",
                    height: "35px",
                    color: "#FF9966",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
