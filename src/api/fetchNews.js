const BASE_URL = 'https://api.mediastack.com/v1/news';

export const fetchNews = async (category = '', countries = '') => {
  const url = `${BASE_URL}?access_key=${process.env.REACT_APP_NEWS_API_KEY}&categories=${category}&countries=${countries}&limit=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data.data || [];
};
