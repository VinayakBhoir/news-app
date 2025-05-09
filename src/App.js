// src/App.js
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import { fetchNews } from './api/fetchNews';
import Footer from './components/Footer';  // Import the Footer component

function App({ mode, onToggleMode }) {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  const [articles, setArticles] = useState([]);

  const loadNews = useCallback(() => {
    fetchNews(category, country).then(setArticles);
  }, [category, country]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <>
      <Header
        category={category}
        setCategory={setCategory}
        country={country}
        setCountry={setCountry}
        mode={mode}
        onToggleMode={onToggleMode}
        onRefresh={loadNews}
      />
      <NewsList articles={articles} />
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}

export default App;
