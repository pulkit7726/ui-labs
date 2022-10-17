import React, { FC } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export interface TitleBarBelowImageProps {
  itemData: Array<Type>;
}

interface Type {
  img: string;
  title: string;
  author?: string;
}

export const Image: FC<TitleBarBelowImageProps> = ({ itemData }) => (
  <ImageList sx={{ width: 500, height: 450 }} data-testid="main-cotainer">
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
          subtitle={
            <span>
              by:
              {item.author}
            </span>
          }
          position="below"
        />
      </ImageListItem>
    ))}
  </ImageList>
);
