import { createTheme } from "@mui/material/styles";

// const primary = "#2F407B";
// const secondary = "#FFFFF";
// const common = "#2F407B,";

export default createTheme({
  //   shadows: Array(25).fill("none"),

  palette: {
    // common: {
    //   blue: `${primary}`,
    // },
    // primary: {
    //   main: `${primary}`,
    // },
    // secondary: {
    //   main: `${secondary}`,
    // },
  },
  typography: {
    body1: {
      fontSize: "13px",
      color: "#FFFFFF",
      fontWeight: "400",
      fontFamily: "Open Sans",
    },

    h5: {
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "#FFFFFF",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },

    h6: {
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "140%",
      color: "#CCCCCC",
    },

    h4: {
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontSize: "28px",
      fontWeight: "500",
      lineHeight: "42px",
      margin: "20px 0px 20px 0px",
      color: "#FFFFFF",
    },
    h1: {
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontSize: "20px",
      fontWeight: "400",
      textAlign: "justify",
      lineHeight: "152%",
      color: "rgba(255, 255, 255, 0.7)",
    },
    h3: {
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "19.2px",
      color: "#FFFFFF",
    },

    h2: {
      fontStyle: "normal",
      fontFamily: "Poppins",
      fontSize: "42px",
      fontWeight: "500",
      // lineHeight: "50px",
      color: "#FFFFFF",
    },
  },

  components: {
    MuiCardContent: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: "linear-gradient(0deg, #203A5E 0%, #2A4F7A 105.38%)",
          padding: "14px 16px 5px 16px;",
          // backgroundColor: "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
        },
      },
    },

    MuiContainer: {
      root: {
        maxWidth: "1450px",
      },
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
