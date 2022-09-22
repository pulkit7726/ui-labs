import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from 'components/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

export default {
  title: 'Breadcrumbs',
  show: true,
  onClose: () => { }
} as ComponentMeta<typeof Breadcrumbs>;
 
const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});
const basicBreadCrumbProps = [{
  BreadcrumbTitle: "Test1",
  BreadcrumbRef: "#",
  color: "inherit",
  underline: "hover"

}, {
  BreadcrumbTitle: "Test2",
  BreadcrumbRef: "#",
  color: "inherit",
  underline: "hover"

}, {
  BreadcrumbTitle: "Test3",
  BreadcrumbRef: "#",
  color: "inherit",
  underline: "hover"

}]
Basic.args = {
  list: basicBreadCrumbProps
}
export const CustomSperator = Template.bind({});
const CustomSperatorBreadCrumbProps = [
  {
    BreadcrumbTitle: "Test1",
    BreadcrumbRef: "#",
    color: "inherit",
    underline: "hover",

  }, {
    BreadcrumbTitle: "Test2",
    BreadcrumbRef: "#",
    color: "inherit",
    underline: "hover"

  }, {
    BreadcrumbTitle: "Test3",
    BreadcrumbRef: "#",
    color: "inherit",
    underline: "hover"

  }
]
CustomSperator.args = {
  list: CustomSperatorBreadCrumbProps,
  separator: "&"
}
export const IconSperator = Template.bind({});
const IconSperatorBreadCrumbProps = [
  {
    BreadcrumbTitle: "Test1",
    BreadcrumbRef: "#",
    color: "inherit",
    underline: "hover",
    icon: <HomeIcon sx={{ mr: 0.5 }} />

  }, {
    BreadcrumbTitle: "Test2",
    BreadcrumbRef: "#",
    color: "inherit",
    underline: "hover",
    icon: <WhatshotIcon sx={{ mr: 0.5 }} />

  }, {
    BreadcrumbTitle: "Test3",
    BreadcrumbRef: "#",
    color: "text.primary",
    underline: "hover",
    icon: <GrainIcon sx={{ mr: 0.5 }} />,

  }
]
IconSperator.args = {
  list: IconSperatorBreadCrumbProps,
  separator: "/"
}
export const CollapsedBreadcrumbs = Template.bind({});
CollapsedBreadcrumbs.args = {
  list: IconSperatorBreadCrumbProps,
  separator: "/",
  maxItems: 2

}
