import React, { FC } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export interface TitleBarImageProps {
  itemData: Array<Type>;
}

interface Type {
  img: string;
  title: string;
  featured?: boolean;
  author: string;
  cols?: number;
  rows?: number;
}

export const Image: FC<TitleBarImageProps> = ({ itemData }) => (
  <ImageList sx={{ width: 500, height: 450 }} data-testid="main-cotainer">
    <ImageListItem key="Subheader" cols={2}>
      <ListSubheader component="div">December</ListSubheader>
    </ImageListItem>
    {itemData.map(item => (
      <ImageListItem key={item.img} data-testid="item-container">
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={item.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>
);
