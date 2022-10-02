import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from 'components/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

export default {
  title: 'UI/Breadcrumbs',
  show: true,
  onClose: () => { },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});
const basicBreadCrumbProps = [{
  title: 'Test1',
  url: '#',
  color: 'inherit',
  underline: 'hover',
  isLink: true,

}, {
  title: 'Test2',
  url: '#',
  color: 'inherit',
  underline: 'hover',
  isLink: true,

}, {
  title: 'Test3',
  url: '#',
  color: 'inherit',
  underline: 'hover',
  isLink: false,

}];
Basic.args = {
  list: basicBreadCrumbProps,
};
export const CustomSperator = Template.bind({});
const CustomSperatorBreadCrumbProps = [
  {
    title: 'Test1',
    url: '#',
    color: 'inherit',
    underline: 'hover',
    isLink: true,

  }, {
    title: 'Test2',
    url: '#',
    color: 'inherit',
    underline: 'hover',
    isLink: true,

  }, {
    title: 'Test3',
    url: '#',
    color: 'inherit',
    underline: 'hover',
    isLink: false,

  },
];
CustomSperator.args = {
  list: CustomSperatorBreadCrumbProps,
  separator: '&',
};
export const IconSperator = Template.bind({});
const IconSperatorBreadCrumbProps = [
  {
    title: 'Test1',
    url: '#',
    color: 'inherit',
    underline: 'hover',
    icon: <HomeIcon sx={{ mr: 0.5 }} />,
    isLink: true,

  }, {
    title: 'Test2',
    url: '#',
    color: 'inherit',
    underline: 'none',
    icon: <WhatshotIcon sx={{ mr: 0.5 }} />,
    isLink: true,

  }, {
    title: 'Test3',
    url: '#',
    color: 'text.primary',
    underline: 'hover',
    icon: <GrainIcon sx={{ mr: 0.5 }} />,
    isLink: false,

  },
];
IconSperator.args = {
  list: IconSperatorBreadCrumbProps,
  separator: '/',
};
export const CollapsedBreadcrumbs = Template.bind({});
CollapsedBreadcrumbs.args = {
  list: IconSperatorBreadCrumbProps,
  separator: '/',
  maxItems: 2,

};
