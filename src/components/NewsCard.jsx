import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

const fallbackImage = 'https://via.placeholder.com/300x200?text=No+Image';

const NewsCard = ({ article }) => {
  const { title, description, image, source, published_at, url } = article;

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="160"
          image={image || fallbackImage}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description || 'No description available.'}
          </Typography>
          <Box mt={2}>
            <Typography variant="caption" display="block" color="text.secondary">
              <strong>Source:</strong> {source || 'Unknown'}
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary">
              <strong>Published:</strong> {new Date(published_at).toLocaleString() || 'N/A'}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
