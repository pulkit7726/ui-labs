import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Loader from '../components/ProgressBar/Loader';

export default {
  title: 'UI/Progress/Circle',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 40,
  color: 'secondary',
};

export const Determinate = Template.bind({});
Determinate.args = {
  size: 40,
  color: 'secondary',
  variant: 'determinate',
  value: 90,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  size: 40,
  color: 'secondary',
  variant: 'determinate',
  value: 101,
};
