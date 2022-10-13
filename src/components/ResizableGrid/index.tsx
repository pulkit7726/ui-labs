import React from 'react';
import { Grid, styled } from '@mui/material';
import { BodyTable, BodyCard, BodyImage } from './Body';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const StyledResponsiveGridLayout = styled(ResponsiveGridLayout)(
  ({ theme }) => ({
    '& .react-grid-layout': {
      position: 'relative',
      transition: 'height 200ms ease',
    },
    '& .react-grid-item': {
      transition: 'all 200ms ease',
      transitionProperty: 'left, top',
    },
    '& .react-grid-item.cssTransforms': {
      transitionProperty: 'transform',
    },
    '& .react-grid-item > .react-resizable-handle': {
      position: 'absolute',
      width: '20px',
      height: '20px',
      bottom: 0,
      right: 0,
      cursor: 'se-resize',
    },
    '& .react-grid-item > .react-resizable-handle::after': {
      content: 'open-quote',
      position: 'absolute',
      right: '3px',
      bottom: '3px',
      width: '5px',
      height: '5px',
      borderRight: '2px solid rgba(0, 0, 0, 0.4)',
      borderBottom: '2px solid rgba(0, 0, 0, 0.4)',
    },
    '& .react-grid-item:not(.react-grid-placeholder)': {
      background: 'lightgray',
    },
  })
);

type ResizableGridProps = {
  title?: string;
  dataLabel?: object;
  card?: object;
  display?: string;
  imageData?: Array<Object>;
};

const ResizableGrid = ({ ...props }: ResizableGridProps) => {
  const ResizableGridWithTable = ({ ...props }) => {
    const layout = [{ i: '1', x: 0, y: 3, w: 8, h: 2 }];
    return (
      <StyledResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        isDragable={true}
        isResizable={true}
        margin={[20, 20]}
      >
        <Grid key="1" data-testid="resize-grid">
          <BodyTable {...props} />
        </Grid>
      </StyledResponsiveGridLayout>
    );
  };

  const ResizableGridWithCard = ({ ...props }) => {
    const layout = [{ i: '1', x: 0, y: 0, w: 3, h: 2 }];
    return (
      <StyledResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        isDragable={true}
        isResizable={true}
        margin={[20, 20]}
      >
        <Grid key="1" className="grid-item">
          <BodyCard {...props} />
        </Grid>
      </StyledResponsiveGridLayout>
    );
  };

  const ResizableGridWithImage = ({ ...props }) => {
    const layout = [{ i: '1', x: 0, y: 3, w: 5, h: 2 }];
    return (
      <StyledResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        isDragable={true}
        isResizable={true}
        margin={[20, 20]}
      >
        <Grid key="1" className="grid-item">
          <BodyImage {...props} />
        </Grid>
      </StyledResponsiveGridLayout>
    );
  };

  const MultipleGrid = ({ ...props }) => {
    const layout = [
      { i: '1', x: 0, y: 3, w: 8, h: 2 },
      { i: '2', x: 5, y: 0, w: 3, h: 2 },
      { i: '3', x: 0, y: 0, w: 5, h: 2 },
    ];
    return (
      <StyledResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        isDragable={true}
        isResizable={true}
        margin={[20, 20]}
      >
        <Grid key="1" className="grid-item">
          <BodyTable {...props} />
        </Grid>
        <Grid key="2" className="grid-item">
          <BodyCard {...props} />
        </Grid>
        <Grid key="3" className="grid-item">
          <BodyImage {...props} />
        </Grid>
      </StyledResponsiveGridLayout>
    );
  };

  return (
    <>
      {props.display === 'table' ? (
        <ResizableGridWithTable {...props} />
      ) : props.display === 'card' ? (
        <ResizableGridWithCard {...props} />
      ) : props.display === 'image' ? (
        <ResizableGridWithImage {...props} />
      ) : (
        <MultipleGrid {...props} />
      )}
    </>
  );
};

export default ResizableGrid;
