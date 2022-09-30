/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from '../components/MainLayout';

export default {
	title: 'UI/Main Layout',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar />;

export const SidebarComponent = Template.bind({});

SidebarComponent.args = {
	/* 👇 The args you need here will depend on your component */
};
