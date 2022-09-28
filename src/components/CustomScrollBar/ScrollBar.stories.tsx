import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ScrollBar from './ScrollBar';

export default {
  title: 'Custom ScrollBar',
  component: ScrollBar
}as ComponentMeta<typeof ScrollBar>;


const Template: ComponentStory<typeof ScrollBar> = (args) => (
  <ScrollBar {...args} />
);

export const Basic = Template.bind({});
Basic.args={
  variant:"basic",
}
export const WithRed = Template.bind({});
Basic.args={
  variant:"with-red",
}
export const WithBlack = Template.bind({});
Basic.args={
  variant:"with-black",
}





