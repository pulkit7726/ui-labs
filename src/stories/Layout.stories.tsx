/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Sidebar from '../components/MainLayout';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'MainLayout',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;


const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar />;

export const SidebarComponent = Template.bind({});

SidebarComponent.args = {
  /*👇 The args you need here will depend on your component */
};


