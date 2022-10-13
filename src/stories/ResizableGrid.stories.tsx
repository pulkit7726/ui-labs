import React from 'react';
import ResizableGrid from 'components/ResizableGrid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { data, dataLabel, card, imageData } from 'data/ResizableGrid.json';

type ResizableGridProps = {
  title?: string;
  data?: Array<Object>;
  dataLabel?: object;
  display?: string;
  card?: object;
  imageData?: Array<Object>;
};

const ResizableGridStories = (props: ResizableGridProps) => (
  <div>
    <ResizableGrid {...props} />
  </div>
);

export default {
  title: 'UI/Resizable Grid',
} as ComponentMeta<typeof ResizableGridStories>;

const Template: ComponentStory<typeof ResizableGridStories> = args => (
  <ResizableGridStories {...args} />
);

export const ResizableGridWithTable = Template.bind({});
ResizableGridWithTable.args = {
  title: 'Resizable Grids',
  display: 'table',
  data,
  dataLabel,
};
export const ResizableGridWithCard = Template.bind({});
ResizableGridWithCard.args = {
  title: 'Resizable Grids',
  display: 'card',
  card,
};
export const ResizableGridWithImage = Template.bind({});
ResizableGridWithImage.args = {
  title: 'Resizable Grids',
  display: 'image',
  imageData,
};
export const MultipleElementWithGrid = Template.bind({});
MultipleElementWithGrid.args = {
  title: 'Resizable Grids',
  display: 'multiple',
  data,
  dataLabel,
  card,
  imageData,
};
