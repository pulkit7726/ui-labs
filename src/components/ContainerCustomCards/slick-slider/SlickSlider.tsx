import React, { useState, useRef } from 'react';

import Slider, { Settings } from 'react-slick';
import { styled, Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Grid } from '@mui/material';
import CustomNavigation from './CustomNavigation';
import ImageItemWithHover from './ImageItemWithHover';
import { ARROW_MAX_WIDTH } from '../constant';

const RootStyle = styled('div')(() => ({
  position: 'relative',
  overflow: 'inherit',
}));

const StyledSlider = styled(Slider)(
  ({ theme, padding }: { theme: Theme; padding: number }) => ({
    display: 'flex !important',
    justifyContent: 'center',
    overflow: 'initial !important',
    '& > .slick-list': {
      overflow: 'visible',
    },
    [theme.breakpoints.up('sm')]: {
      '& > .slick-list': {
        width: `calc(100% - ${2 * padding}px)`,
      },
      '& .slick-list > .slick-track': {
        margin: '0px !important',
      },
      '& .slick-list > .slick-track > .slick-current > div > .MuiBox-root > .MuiPaper-root:hover':
        {
          transformOrigin: '0% 50% !important',
        },
    },
    [theme.breakpoints.down('sm')]: {
      '& > .slick-list': {
        width: `calc(100% - ${padding}px)`,
      },
    },
  })
);

interface SlideItemProps {
  item: any;
}

const SlideItem = ({ item }: SlideItemProps) => (
  <Box sx={{ pr: { xs: 0.5, sm: 0.5 } }}>
    <ImageItemWithHover image={item} />
  </Box>
);

interface SlickSliderProps {
  images: any[];
  cardType: string;
  cardSize: string;
}
export default function SlickSlider({
  images,
  cardType,
  cardSize,
}: SlickSliderProps) {
  const sliderRef = useRef<Slider>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const theme = useTheme();

  const beforeChange = async (currentIndex: number, nextIndex: number) => {
    if (currentIndex < nextIndex) {
      setActiveSlideIndex(nextIndex);
    } else if (currentIndex > nextIndex) {
      setIsEnd(false);
    }
    setActiveSlideIndex(nextIndex);
  };

  const settings: Settings = {
    speed: 500,
    arrows: false,
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 6,
    // afterChange: (current) => {
    //   console.log("After Change", current);
    // },
    beforeChange,
    // onEdge: (direction) => {
    //   console.log("Edge: ", direction);
    // },
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  console.log('cardSize', cardSize);

  const renderView = () => {
    if (cardType === 'Horizontal Slider') {
      return (
        <span data-testid="horizontal-container">
          <CustomNavigation
            isEnd={isEnd}
            arrowWidth={ARROW_MAX_WIDTH}
            onNext={handleNext}
            onPrevious={handlePrevious}
            activeSlideIndex={activeSlideIndex}
          >
            <StyledSlider
              ref={sliderRef}
              {...settings}
              padding={ARROW_MAX_WIDTH}
              theme={theme}
            >
              {images.map((item, idx) => (
                <SlideItem key={idx} item={item} />
              ))}
            </StyledSlider>
          </CustomNavigation>
        </span>
      );
    }
    if (cardType === 'Grid Slider') {
      return (
        <Box sx={{ flexGrow: 1 }} data-testid="grid-container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
          >
            {images.map((item, idx) => (
              <Grid item xs={3} sm={3} md={3} key={idx}>
                <SlideItem key={idx} item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
    return (
      <div style={{ width: 250 }} data-testid="vertical-container">
        {images.map((item, idx) => (
          <SlideItem key={idx} item={item} data-testid="item-container" />
        ))}
      </div>
    );
  };
  return (
    <Box
      sx={{ overflow: 'hidden', height: '100%', zIndex: 1 }}
      data-testid="main-cotainer"
    >
      {images.length && <RootStyle>{renderView()}</RootStyle>}
    </Box>
  );
}
