import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import { fetchNews } from '../api/fetchNews';
import { CircularProgress, Box } from '@mui/material';

const Home = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const data = await fetchNews(category, country);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, [category, country]);

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
      ) : (
        <NewsList articles={articles} />
      )}
    </>
  );
};

export default Home;
