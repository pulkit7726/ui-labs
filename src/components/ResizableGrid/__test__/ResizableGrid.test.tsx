import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { composeStories } from '@storybook/testing-react';
import ResizableGrid from '../index';
import * as ResizableGridStories from 'stories/ResizableGrid.stories';
import { data, dataLabel, card, imageData } from 'data/ResizableGrid.json';

const { WithTable, WithImage, MultipleElementWithGrid } =
  composeStories(ResizableGridStories);

test('should render as Resizable Grid With Table', () => {
  render(<ResizableGrid display={'table'} data={data} dataLabel={dataLabel} />);
  expect(WithTable.args?.display === 'table').toBeTruthy();
  expect(WithTable.args?.data?.length === 10).toBeTruthy();
});

test('should render as Resizable Grid With Image', () => {
  render(<ResizableGrid display={'table'} imageData={imageData} />);
  expect(WithImage.args?.display === 'image').toBeTruthy();
  expect(WithImage.args?.imageData?.length === 7).toBeTruthy();
});

test('should render as Multiple Element With Grid', () => {
  render(
    <ResizableGrid
      display={'table'}
      data={data}
      dataLabel={dataLabel}
      card={card}
      imageData={imageData}
    />,
  );
  expect(MultipleElementWithGrid.args?.display === 'multiple').toBeTruthy();
  expect(MultipleElementWithGrid.args?.imageData?.length === 7).toBeTruthy();
  expect(MultipleElementWithGrid.args?.data?.length === 10).toBeTruthy();
});
