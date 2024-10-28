import { createTheme } from "@mui/material";

const primary = { main: '#1565c0', contrastText: '#ffffff' };
const secondary = { main: '#4caf50', contrastText: '#ffffff' };
const error = { main: '#f44336', contrastText: '#ffffff' };
const background = { default: '#0d47a1', paper: '#1565c0' }
const text = { primary: '#ffffff', secondary: '#b3e5fc' }
const action = { active: '#ffffff', hover: '#b3e5fc' }
const warning = { main: '#ff9800', contrastText: '#ffffff' }
const divider = '#b3e5fc'
const common = { black: '#000', white: '#fff' }
const grey = { 50: '#e0e0e0', 100: '#b3e5fc', 200: '#4fc3f7', 300: '#03a9f4', 400: '#0288d1', 500: '#01579b', 600: '#0277bd', 700: '#01579b', 800: '#004c8c', 900: '#002171', A100: '#80d8ff', A200: '#40c4ff', A400: '#00b0ff', A700: '#0091ea' }
const info = { main: '#2196f3', contrastText: '#ffffff' }
const success = { main: '#4caf50', contrastText: '#ffffff' }


export const blueTheme = createTheme({
  palette: { primary, background, text, action, secondary, error, warning, divider, common, grey, info, success, },
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

