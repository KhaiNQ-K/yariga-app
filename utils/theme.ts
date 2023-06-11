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
    background: {
      default: "#F4F4F4",
    },
    common: {
      white: "#FCFCFC",
      black: "#E4E8EF",
    },
    action: {
      hover: "#F7F7F7",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});
theme = responsiveFontSizes(theme);
