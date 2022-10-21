import React, { ReactElement } from 'react';
import ResizableGrid from 'components/ResizableGrid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BodyCard, BodyImage, BodyAppBar } from 'components/ResizableGrid/Body';
import {
  data,
  dataLabel,
  card,
  imageData,
  appBar,
  layout,
} from 'data/ResizableGrid.json';
import { Grid } from '@mui/material';

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
  card?: object;
  imageData?: Array<object>;
  gridBackground?: string;
  appBar?: object;
  tableAlign?: 'left' | 'center' | 'right';
  layoutSize?: 'small' | 'medium' | 'large';
};

const ResizableGridStories = (props: ResizableGridProps) => {
  return (
    <div>
      <ResizableGrid {...props} />
    </div>
  );
};

export default {
  title: 'UI/Resizable Grid',
  argTypes: {
    gridBackground: { control: 'color' },
    tableAlign: {
      control: {
        type: 'radio',
        options: ['left', 'center', 'right'],
      },
    },
    layoutSize: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as ComponentMeta<typeof ResizableGridStories>;

const Template: ComponentStory<typeof ResizableGridStories> = args => (
  <ResizableGridStories {...args} />
);
export const AppBarWithContent = Template.bind({});
AppBarWithContent.args = {
  display: 'appbar',
  appBar,
  layouts: layout,
  children: (
    <Grid key="1">
      <BodyAppBar appBar={appBar} />
    </Grid>
  ),
};
export const WithTable = Template.bind({});
WithTable.args = {
  display: 'table',
  data,
  dataLabel,
  layouts: layout,
};
export const WithCard = Template.bind({});
WithCard.args = {
  display: 'card',
  card,
  layouts: layout,
  children: (
    <Grid key="1">
      <BodyCard card={card} />
    </Grid>
  ),
};
export const WithImage = Template.bind({});
WithImage.args = {
  display: 'image',
  imageData,
  layouts: layout,
  children: (
    <Grid key="1">
      <BodyImage imageData={imageData} />
    </Grid>
  ),
};
export const WithFullscreen = Template.bind({});
WithFullscreen.args = {
  display: 'fullscreen',
  data,
  dataLabel,
  mainLayouts: [{ i: '1', x: 0, y: 0, w: 12, h: 4 }],
  children: (
    <Grid key="1">
      <BodyAppBar appBar={appBar} />
    </Grid>
  ),
};

export const MultipleElementWithGrid = Template.bind({});
MultipleElementWithGrid.args = {
  display: 'multiple',
  data,
  dataLabel,
  card,
  imageData,
  appBar,
  mainLayouts: [
    { i: '2', x: 5, y: 0, w: 4, h: 2 },
    { i: '3', x: 0, y: 0, w: 6, h: 2 },
    { i: '4', x: 0, y: 0, w: 8, h: 2 },
  ],
  childrenOne: (
    <Grid key="2">
      <BodyCard card={card} />
    </Grid>
  ),
  childrenTwo: (
    <Grid key="3">
      <BodyImage imageData={imageData} />
    </Grid>
  ),
  childrenThree: (
    <Grid key="4">
      <BodyAppBar appBar={appBar} />
    </Grid>
  ),
};
