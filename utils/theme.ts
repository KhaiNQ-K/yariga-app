import { createTheme, responsiveFontSizes } from "@mui/material/styles";
export let theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#475BE8",
    },
    secondary: {
      main: "#DADEFA",
    },
    divider: "#E4E4E4",

    text: {
      primary: "#11142D",
      secondary: "#808191",
    },
    common: {
      white: "#FCFCFC",
      black: "#E4E8EF",
    },
    action: {
      hover: "#F7F7F7",
    },
    grey: {
      "100": "#F4F4F4",
    },
    background: {
      default: "#F4F4F4",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "#11142D",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "#11142D",
        fontFamily: "Manrope, sans-serif",
      },
      styleOverrides: {
        root: {
          color: "#11142D",
          fontFamily: "Manrope, sans-serif",
        },
        h1: {
          fontFamily: "Manrope, sans-serif",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
