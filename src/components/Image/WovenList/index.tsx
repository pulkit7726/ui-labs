import React, { FC } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export interface WovenImageProps {
  itemData: Array<Type>;
}

interface Type {
  img: string;
  title: string;
}

export const Image: FC<WovenImageProps > = ({ itemData }) => {
   return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8} data-testid="main-cotainer">
      {itemData.map((item) => (
        <ImageListItem key={item.img} data-testid="item-container">
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
