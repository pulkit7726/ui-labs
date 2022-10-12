import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ScrollBar from '../components/CustomScrollBar/ScrollBar';

export default {
  title: 'UI/Custom ScrollBar',
  component: ScrollBar,
} as ComponentMeta<typeof ScrollBar>;

const Template: ComponentStory<typeof ScrollBar> = args => (
  <ScrollBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
};
export const MacOS = Template.bind({});
MacOS.args = {
  variant: 'mac-os',
};
