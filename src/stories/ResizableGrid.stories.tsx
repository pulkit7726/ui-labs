import React, { ReactElement } from 'react';
import ResizableGrid from 'components/ResizableGrid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BodyTable, BodyCard, BodyImage } from 'components/ResizableGrid/Body';
import { data, dataLabel, card, imageData } from 'data/ResizableGrid.json';
import { Grid } from '@mui/material';

type ResizableGridProps = {
  children?: ReactElement | string;
  childrenOne?: ReactElement | string;
  childrenTwo?: ReactElement | string;
  layout?: any;
  data?: Array<Object>;
  dataLabel?: object;
  display?: string;
  card?: object;
  imageData?: Array<Object>;
  gridBackground?: string;
};

const ResizableGridStories = (props: ResizableGridProps) => (
  <div>
    <ResizableGrid {...props} />
  </div>
);

export default {
  title: 'UI/Resizable Grid',
  argTypes: {
    gridBackground: { control: 'color' },
  },
} as ComponentMeta<typeof ResizableGridStories>;

const Template: ComponentStory<typeof ResizableGridStories> = args => (
  <ResizableGridStories {...args} />
);

export const ResizableGridWithTable = Template.bind({});
ResizableGridWithTable.args = {
  display: 'table',
  data,
  dataLabel,
  layout: [{ i: '1', x: 0, y: 3, w: 8, h: 2 }],
  children: (
    <Grid key="1" data-testid="resize-grid">
      <BodyTable />
    </Grid>
  ),
};
export const ResizableGridWithCard = Template.bind({});
ResizableGridWithCard.args = {
  display: 'card',
  card,
  layout: [{ i: '1', x: 0, y: 0, w: 3, h: 2 }],
  children: (
    <Grid key="1">
      <BodyCard />
    </Grid>
  ),
};
export const ResizableGridWithImage = Template.bind({});
ResizableGridWithImage.args = {
  display: 'image',
  imageData,
  layout: [{ i: '1', x: 0, y: 3, w: 5, h: 2 }],
  children: (
    <Grid key="1">
      <BodyImage />
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
  layout: [
    { i: '1', x: 0, y: 3, w: 8, h: 2 },
    { i: '2', x: 5, y: 0, w: 3, h: 2 },
    { i: '3', x: 0, y: 0, w: 5, h: 2 },
  ],
  children: (
    <Grid key="1">
      <BodyTable />
    </Grid>
  ),
  childrenOne: (
    <Grid key="2">
      <BodyCard />
    </Grid>
  ),
  childrenTwo: (
    <Grid key="3">
      <BodyImage />
    </Grid>
  ),
};
export const ResizableGridWithFullscreen = Template.bind({});
ResizableGridWithFullscreen.args = {
  display: 'fullscreen',
  data,
  dataLabel,
  layout: [{ i: '1', x: 0, y: 0, w: 12, h: 4 }],
  children: (
    <Grid key="1">
      <BodyTable />
    </Grid>
  ),
};
