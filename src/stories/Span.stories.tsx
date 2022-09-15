/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Span } from '../components/Span';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Components/Span',
  component: Span,
} as ComponentMeta<typeof Span>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const SpanComponent = Template.bind({});

SpanComponent.args = {
  /*👇 The args you need here will depend on your component */
};


