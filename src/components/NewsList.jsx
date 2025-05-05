import React from 'react';
import { Grid, Typography } from '@mui/material';
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => {
  return (
    <Grid container spacing={3} justifyContent="center" p={2}>
      {articles.length === 0 ? (
        <Typography variant="h6">No news found. Try different filters.</Typography>
      ) : (
        articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <NewsCard article={article} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default NewsList;
