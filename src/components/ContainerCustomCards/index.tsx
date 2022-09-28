import React, { memo, FC } from "react";
import Box from "@mui/material/Box";

import SlickSlider from "./slick-slider/SlickSlider";
import ImagePortalContainer from "./slick-slider/ImagePortalContainer";
import PortalProvider from "./providers/PortalProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ContainerCustomCardsProps {
  images: Array<Type>;
  cardType: string;
  cardSize: string;
}

interface Type {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  title: string;
}

export const ContainerCustomCards: FC<ContainerCustomCardsProps> = ({
  images = [], cardType, cardSize 
}) => {
  return (
    <Box pt={10}>
      <PortalProvider>
        <ImagePortalContainer />
        <SlickSlider images={images} cardType={cardType} cardSize={cardSize} />
      </PortalProvider>
    </Box>
  );
};

export default memo(ContainerCustomCards);
