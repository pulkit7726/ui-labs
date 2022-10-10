/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from '../components/MainLayout';

export default {
  title: 'UI/Main Layout',
  component: MainLayout,
  argTypes: {
    drawer: { control: 'boolean' },
    authenticate: { control: 'boolean' },
    containerBgColor: {
      control: { type: 'color', presetColors: ['red', 'green'] },
    },
  },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = args => (
  <MainLayout
    drawer={args.drawer}
    authenticate={args.authenticate}
    containerBgColor={args.containerBgColor}
  />
);

export const MainLayoutComponent = Template.bind({});

MainLayoutComponent.args = {
  drawer: false,
  authenticate: true,
  containerBgColor: '#cfe8fc',
};
