import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { usePortal } from '../providers/PortalProvider';

const PaperStyle = styled(Paper)(() => ({
  zIndex: 9,
  cursor: 'pointer',
  borderRadius: '4px',
  position: 'relative',
}));

interface ImageItemWithHoverProps {
  image: any;
}

export default function ImageItemWithHover({ image }: ImageItemWithHoverProps) {
  const { setPortal, anchorElement } = usePortal();
  const imgUrl = 'http://image.tmdb.org/t/p/';
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPortal(event.currentTarget, image);
  };

  const open = Boolean(anchorElement);

  return (
    <PaperStyle
      sx={{
        width: '100%',
        position: 'relative',
        paddingTop: 'calc(9 / 16 * 100%)',
      }}
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
    >
      <Box
        component="img"
        src={`${imgUrl}w300${image.backdrop_path}`}
        sx={{
          top: 0,
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          borderRadius: '4px',
        }}
      />
    </PaperStyle>
  );
}
