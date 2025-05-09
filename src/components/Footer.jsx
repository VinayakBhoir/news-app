// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        py: 2,
        mt: 4,
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        Made by{' '}
        <Link
          href="https://py-portfolio-self.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="hover"
        >
          Pratik Yelkar
        </Link>
      </Typography>
      <Typography variant="caption">
        © {new Date().getFullYear()} News Sphere
      </Typography>
    </Box>
  );
};

export default Footer;
