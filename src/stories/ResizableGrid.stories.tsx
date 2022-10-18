import React, { ReactElement } from 'react';
import ResizableGrid from 'components/ResizableGrid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  BodyTable,
  BodyCard,
  BodyImage,
  BodyAppBar,
} from 'components/ResizableGrid/Body';
import {
  data,
  dataLabel,
  card,
  imageData,
  appBar,
} from 'data/ResizableGrid.json';
import { Grid } from '@mui/material';

type ResizableGridProps = {
  children?: ReactElement | string;
  childrenOne?: ReactElement | string;
  childrenTwo?: ReactElement | string;
  childrenThree?: ReactElement | string;
  layout?: any;
  data?: Array<object>;
  dataLabel?: object;
  display?: string;
  card?: object;
  imageData?: Array<object>;
  gridBackground?: string;
  appBar?: object;
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
      <BodyTable data={data} dataLabel={dataLabel} />
    </Grid>
  ),
};
export const ResizableGridWithAppBar = Template.bind({});
ResizableGridWithAppBar.args = {
  display: 'table',
  appBar,
  layout: [{ i: '1', x: 0, y: 3, w: 5, h: 2 }],
  children: (
    <Grid key="1">
      <BodyAppBar appBar={appBar} />
    </Grid>
  ),
};
export const ResizableGridWithCard = Template.bind({});
ResizableGridWithCard.args = {
  display: 'card',
  card,
  layout: [{ i: '1', x: 0, y: 0, w: 3, h: 2.5 }],
  children: (
    <Grid key="1">
      <BodyCard card={card} />
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
      <BodyImage imageData={imageData} />
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
  layout: [
    { i: '1', x: 0, y: 0, w: 5, h: 2 },
    { i: '2', x: 5, y: 0, w: 3, h: 2 },
    { i: '3', x: 0, y: 0, w: 5, h: 2 },
    { i: '4', x: 5, y: 0, w: 3, h: 2 },
  ],
  children: (
    <Grid key="1">
      <BodyTable data={data} dataLabel={dataLabel} />
    </Grid>
  ),
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
export const ResizableGridWithFullscreen = Template.bind({});
ResizableGridWithFullscreen.args = {
  display: 'fullscreen',
  data,
  dataLabel,
  layout: [{ i: '1', x: 0, y: 0, w: 12, h: 4 }],
  children: (
    <Grid key="1">
      <BodyTable data={data} dataLabel={dataLabel} />
    </Grid>
  ),
};
