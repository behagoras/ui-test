import { createTheme } from "@mui/material";

const primary = { main: '#f5f5f5', contrastText: '#424242' };
const background = { default: '#ffffff', paper: '#e0e0e0' };
const text = { primary: '#424242', secondary: '#757575' };
const action = { active: '#424242', hover: '#e0e0e0' };
const secondary = { main: '#f44336', contrastText: '#ffffff' };
const error = { main: '#f44336', contrastText: '#ffffff' };
const warning = { main: '#ff9800', contrastText: '#ffffff' };
const divider = '#bdbdbd';
const common = { black: '#000', white: '#fff' };
const grey = {
  50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#d5d5d5", A200: "#aaaaaa", A400: "#303030", A700: "#616161",
}
const info = { main: '#2196f3', contrastText: '#ffffff' };
const success = { main: '#4caf50', contrastText: '#ffffff' };

export const whiteTheme = createTheme({
  palette: {
    primary,
    background,
    text,
    action,
    secondary,
    error,
    warning,
    divider,
    common,
    grey,
    info,
    success,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: primary.main,
          color: text.primary,
          '&:focus, &:hover': {
            backgroundColor: primary.main,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          marginTop: 8,
          fontSize: '1rem',
          '&.Mui-focused': {
            color: text.primary,
          },
        },
      },
    },
  }
});