import React, { FC } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export interface ImageProps {
  itemData: Array<Type>;
}

interface Type {
  img: string;
  title: string;
}

export const Image: FC<ImageProps> = ({ itemData }) => {
  return (
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
       {itemData.map((item) => (
         <ImageListItem key={item.img}>
           <img
             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
             alt={item.title}
             loading="lazy"
           />
         </ImageListItem>
       ))}
     </ImageList>
  );
};
