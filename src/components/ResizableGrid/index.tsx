import React, { ReactElement, useState, useEffect } from 'react';
import { Grid, styled } from '@mui/material';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { BodyTable } from 'components/ResizableGrid/Body';

const ResponsiveGridLayout = WidthProvider(Responsive);

const StyledResponsiveGridLayout = styled(ResponsiveGridLayout)(
  ({ gridBackground }) => ({
    margin: '-26px',
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
  childrenThree?: ReactElement | string;
  layouts?: any;
  mainLayouts?: Array<object>;
  data?: Array<object>;
  dataLabel?: object;
  display?: string;
  gridBackground?: string;
  isDraggable?: boolean;
  tableAlign?: 'left' | 'center' | 'right';
  layoutSize?: 'small' | 'medium' | 'large';
};

const ResizableGrid = ({
  layouts,
  isDraggable,
  children,
  childrenOne,
  childrenTwo,
  childrenThree,
  gridBackground,
  display,
  layoutSize,
  mainLayouts,
  tableAlign,
  data,
  dataLabel,
}: ResizableGridProps) => {
  console.log(123, isDraggable);

  return (
    <>
      <StyledResponsiveGridLayout
        layouts={
          display === 'fullscreen'
            ? { lg: mainLayouts }
            : layoutSize === 'large'
            ? { lg: layouts.layoutsLG }
            : layoutSize === 'small'
            ? { sm: layouts.layoutsSM }
            : { md: layouts.layoutsMD }
        }
        gridBackground={gridBackground}
        isDraggable={isDraggable}
        rowHeight={isDraggable ? 150 : 151}
      >
        {display === 'multiple' ? (
          [childrenOne, childrenTwo, childrenThree]
        ) : display === 'table' ? (
          <Grid key="1">
            <BodyTable
              data={data}
              dataLabel={dataLabel}
              tableAlign={tableAlign}
            />
          </Grid>
        ) : (
          children
        )}
      </StyledResponsiveGridLayout>
    </>
  );
};

export default ResizableGrid;
