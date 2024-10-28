"use client";

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#808080',
    },
  },
});

const Dropdown = ({ color, backgroundColor, label, optionBackgroundColor, optionColor }: { 
  color: string; 
  backgroundColor: string; 
  label: string; 
  optionBackgroundColor: string; 
  optionColor: string; 
}) => {
  const [option, setOption] = React.useState('');

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={option}
        onChange={(event) => setOption(event.target.value as string)}
        style={{ backgroundColor, color }}
        label={label}
        renderValue={(value) => (value ?? label)}
      >
        <MenuItem value="Option 1" sx={{ backgroundColor: optionBackgroundColor, color: optionColor }}>Option 1</MenuItem>
        <MenuItem value="Option 2" sx={{ backgroundColor: optionBackgroundColor, color: optionColor }}>Option 2</MenuItem>
        <MenuItem value="Option 3" sx={{ backgroundColor: optionBackgroundColor, color: optionColor }}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

const Dropdowns = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>
        <Dropdown 
          color="#808080" 
          backgroundColor="#ffffff" 
          label="Dropdown Blanco" 
          optionBackgroundColor="#ffffff" 
          optionColor="#808080" 
        />
        <Dropdown 
          color="#ffffff" 
          backgroundColor="#1976d2" 
          label="Dropdown Azul" 
          optionBackgroundColor="#1976d2" 
          optionColor="#ffffff" 
        />
      </Box>
    </ThemeProvider>
  );
};

export default Dropdowns;