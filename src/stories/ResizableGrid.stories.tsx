import React from 'react';
import ResizableGrid from 'components/ResizableGrid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { data, dataLabel, card, imageData } from 'data/ResizableGrid.json';

type ResizableGridProps = {
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
};
export const ResizableGridWithCard = Template.bind({});
ResizableGridWithCard.args = {
  display: 'card',
  card,
};
export const ResizableGridWithImage = Template.bind({});
ResizableGridWithImage.args = {
  display: 'image',
  imageData,
};
export const MultipleElementWithGrid = Template.bind({});
MultipleElementWithGrid.args = {
  display: 'multiple',
  data,
  dataLabel,
  card,
  imageData,
};
export const ResizableGridWithFullscreen = Template.bind({});
ResizableGridWithFullscreen.args = {
  display: 'fullscreen',
  data,
  dataLabel,
};
