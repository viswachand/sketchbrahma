import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import MovieDetialScreen from "./Screens/MovieDetailScreen";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/Theming";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Container> */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/page/:page" exact element={<HomeScreen />} />
          <Route path="/movieDetials/:id" element={<MovieDetialScreen />} />
        </Routes>
        {/* </Container> */}
      </ThemeProvider>
    </>
  );
}
