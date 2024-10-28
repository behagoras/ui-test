"use client";

import { blueTheme, whiteTheme } from '@/themes';
import { Box, FormControl, InputLabel, MenuItem, Select, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';



const Dropdown = ({ label }: { label: string }) => {
  const [option, setOption] = React.useState('');

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={option}
        onChange={(event) => setOption(event.target.value as string)}
        label={label}
        renderValue={(value) => (value ?? label)}
        color="primary"
        variant='filled'
      >
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

const Dropdowns = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <ThemeProvider theme={blueTheme}>
        <Box sx={{ p: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>
          <Dropdown label="Dropdown Azul" />
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={whiteTheme}>
        <Box sx={{ p: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>
          <Dropdown label="Dropdown Blanco" />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Dropdowns;