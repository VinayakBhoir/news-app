import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const categories = [
  'general',
  'business',
  'sports',
  'technology',
  'entertainment',
  'health',
  'science'
];

const countries = [
  { code: 'us', name: 'United States' },
  { code: 'in', name: 'India' },
  { code: 'gb', name: 'UK' },
  { code: 'de', name: 'Germany' }
];

const Header = ({ category, setCategory, country, setCountry }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ mr: 2 }}>
          🌍 Global News
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', flexGrow: 1 }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              color={cat === category ? 'secondary' : 'inherit'}
              onClick={() => setCategory(cat)}
              variant={cat === category ? 'contained' : 'text'}
              size="small"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Button>
          ))}
        </Box>

        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((c) => (
              <MenuItem key={c.code} value={c.code}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
