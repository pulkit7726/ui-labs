import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Linear from '../components/ProgressBar/Linear';

export default {
  title: 'UI/Progress/Linear',
  component: Linear,
} as ComponentMeta<typeof Linear>;

const Template: ComponentStory<typeof Linear> = (args) => <Linear {...args} />;
export const Indeterminate = Template.bind({});
Indeterminate.args = {
  color: 'secondary',
};
export const Determinate = Template.bind({});
Determinate.args = {
  color: 'secondary',
  variant: 'determinate',
  value: 90,
};
export const WithLabel = Template.bind({});
WithLabel.args = {
  color: 'secondary',
  variant: 'determinate',
  value: 101,
};
export const WithBuffer = Template.bind({});
WithBuffer.args = {
  color: 'secondary',
  variant: 'buffer',
  value: 101,
};
