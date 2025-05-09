import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import { fetchNews } from '../api/fetchNews';
import { CircularProgress, Box, Typography } from '@mui/material';

const Home = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews(category, country);
      setArticles(data);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news. Please try again later.');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, [category, country]);

  // Dummy implementation for bookmark checking (replace with real logic if needed)
  const isBookmarked = (article) => {
    return false;
  };

  return (
    <>
      <Header
        category={category}
        setCategory={setCategory}
        country={country}
        setCountry={setCountry}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box textAlign="center" mt={4}>
          <Typography color="error">{error}</Typography>
        </Box>
      ) : articles.length === 0 ? (
        <Box textAlign="center" mt={4}>
          <Typography>No news articles found.</Typography>
        </Box>
      ) : (
        <NewsList articles={articles} isBookmarked={isBookmarked} />
      )}
    </>
  );
};

export default Home;
