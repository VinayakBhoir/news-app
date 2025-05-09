// src/components/NewsCard.jsx
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Box,
  Chip
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';

const TEMPLATE_IMG = '/images/newstemplate.png';

const NewsCard = ({ article }) => {
  const {
    title,
    description,
    image,
    source,
    published_at,
    url,
    author
  } = article;

  const displayImage = image || TEMPLATE_IMG;
  const publishedDate = new Date(published_at).toLocaleString();

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.03)', boxShadow: 6 }
      }}
      elevation={3}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="180"
          image={displayImage}
          alt={title}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1
            }}
          >
            <Chip
              icon={<PublicIcon />}
              label={source || 'Unknown'}
              size="small"
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="caption">
                {publishedDate}
              </Typography>
            </Box>
          </Box>

          <Typography gutterBottom variant="h6" component="div" noWrap>
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {description || 'No description available.'}
          </Typography>

          {author && (
            <Typography variant="caption" display="block" mt={1}>
              By {author}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ mt: 'auto', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <Button
          size="small"
          variant="contained"
          href={url}
          target="_blank"
        >
          Know More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
