import React, { FC } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export interface MasonryImageProps {
  itemData: Array<Type>;
}

interface Type {
  img: string;
  title: string;
  cols?:number;
  rows?:number;
}

export const Image: FC<MasonryImageProps > = ({ itemData }) => {
    return (
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      );
    }

