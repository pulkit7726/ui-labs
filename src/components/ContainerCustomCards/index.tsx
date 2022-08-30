import React, { memo, FC } from "react";
import Box from "@mui/material/Box";

import SlickSlider from "./slick-slider/SlickSlider";
import ImagePortalContainer from "./slick-slider/ImagePortalContainer";
import PortalProvider from "../../providers/PortalProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ContainerCustomCardsProps {
  imageList: Array<Type>;
}

interface Type {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const ContainerCustomCards: FC<ContainerCustomCardsProps> = ({
  images = []
}) => {
  return (
    <Box pt={10}>
      <PortalProvider>
        <ImagePortalContainer />
        <SlickSlider images={images} />
      </PortalProvider>
    </Box>
  );
};

export default memo(ContainerCustomCards);
