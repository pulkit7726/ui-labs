import React, { ReactElement } from 'react';
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
  }),
);

type ResizableGridProps = {
  children?: ReactElement | string;
  childrenOne?: ReactElement | string;
  childrenTwo?: ReactElement | string;
  layout?: any;
  data?: Array<Object>;
  dataLabel?: object;
  card?: object;
  display?: string;
  imageData?: Array<Object>;
  gridBackground?: string;
};

const ResizableGrid = ({ ...props }: ResizableGridProps) => {
  console.log(1111, props);
  return (
    <>
      <StyledResponsiveGridLayout
        layouts={{ lg: props.layout }}
        measureBeforeMount={true}
        isDragable={true}
        isResizable={true}
        margin={[20, 20]}
        sx={{ margin: '-35px' }}
        gridBackground={props.gridBackground}
      >
        {props.children}
        {props.childrenOne}
        {props.childrenTwo}
      </StyledResponsiveGridLayout>
    </>
  );
};

export default ResizableGrid;
