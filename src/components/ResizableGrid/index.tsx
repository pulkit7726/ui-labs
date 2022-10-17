import React from 'react';
import { Grid, styled } from '@mui/material';
import { BodyTable, BodyCard, BodyImage } from './Body';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Root = styled(Grid)(({ theme }) => ({
  padding: '16px',
}));

const StyledResponsiveGridLayout = styled(ResponsiveGridLayout)(
  ({ gridBackground }) => ({
    '& .react-grid-item > .react-resizable-handle': {
      position: 'absolute',
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
      background: gridBackground || 'lightgray',
    },
  })
);

type ResizableGridProps = {
  data?: Array<Object>;
  dataLabel?: object;
  card?: object;
  display?: string;
  imageData?: Array<Object>;
  gridBackground?: string;
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
        gridBackground={props.gridBackground}
      >
        <Grid key="1" data-testid="resize-grid">
          <BodyTable {...props} />
        </Grid>
      </StyledResponsiveGridLayout>
    );
  };

  const ResizableGridWithFullscreen = ({ ...props }) => {
    const layout = [{ i: '1', x: 0, y: 0, w: 12, h: 4 }];
    return (
      <StyledResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        isDragable={true}
        isResizable={true}
        margin={[20, 20]}
        gridBackground={props.gridBackground}
        sx={{ margin: '-35px' }}
      >
        <Grid key="1">
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
        gridBackground={props.gridBackground}
      >
        <Grid key="1">
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
        gridBackground={props.gridBackground}
      >
        <Grid key="1">
          <BodyImage {...props} />
        </Grid>
      </StyledResponsiveGridLayout>
    );
  };

  const MultipleGridWithPersistingData = ({ ...props }) => {
    const layout = [
      { i: '1', x: 0, y: 3, w: 8, h: 2 },
      { i: '2', x: 5, y: 0, w: 3, h: 2 },
      { i: '3', x: 0, y: 0, w: 5, h: 2 },
    ];
    const getLayouts = () => {
      const savedLayouts = localStorage.getItem('grid-layout');
      return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
    };
    const handleLayoutChange = (layout, layouts) => {
      localStorage.setItem('grid-layout', JSON.stringify(layouts));
    };
    return (
      <Root>
        <StyledResponsiveGridLayout
          layouts={getLayouts()}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
          rowHeight={300}
          width={1000}
          onLayoutChange={handleLayoutChange}
          gridBackground={props.gridBackground}
        >
          <Grid key="1">
            <BodyTable {...props} />
          </Grid>
          <Grid key="2">
            <BodyCard {...props} />
          </Grid>
          <Grid key="3">
            <BodyImage {...props} />
          </Grid>
        </StyledResponsiveGridLayout>
      </Root>
    );
  };

  return (
    <>
      {props.display === 'table' ? (
        <ResizableGridWithTable {...props} />
      ) : props.display === 'fullscreen' ? (
        <ResizableGridWithFullscreen {...props} />
      ) : props.display === 'card' ? (
        <ResizableGridWithCard {...props} />
      ) : props.display === 'image' ? (
        <ResizableGridWithImage {...props} />
      ) : (
        <MultipleGridWithPersistingData {...props} />
      )}
    </>
  );
};

export default ResizableGrid;
