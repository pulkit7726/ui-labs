/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from '../components/Header';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Layout/MainLayout',
  component: Header,
} as ComponentMeta<typeof Header>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});

HeaderComponent.args = {
  /*👇 The args you need here will depend on your component */
};


