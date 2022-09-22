import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from 'components/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumb from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

export default {
  title: 'Breadcrumbs',
  show: true,
  onClose: () => { }
} as ComponentMeta<typeof Breadcrumbs>;
 
const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  list: [
    <Link underline="hover" color="inherit" href="#"><div>Test1</div></Link>, 
    <Typography color="text.primary"><div>Test2</div></Typography>
  ]
}
export const CustomSperator = Template.bind({});
CustomSperator.args = {
  list: [
    <Link underline="hover" color="inherit" href="#"><div>Test1</div></Link>, 
    <Link underline="hover" color="inherit" href="#"><div>Test2</div></Link>,
    <Typography color="text.primary"><div>Test3</div></Typography>
  ],
  separator: "&"
}
export const IconSperator = Template.bind({});
IconSperator.args = {
  list: [
    <Link underline="hover" color="inherit" href="#"><div><HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />Test1</div></Link>, 
    <Link underline="hover" color="inherit" href="#"><div><WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />Test2</div></Link>, 
    <Typography color="text.primary"><div><GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />Test3</div></Typography>
  ],
  separator: "/"
}
export const CollapsedBreadcrumbs = Template.bind({});
CollapsedBreadcrumbs.args = {
  list: [
    <Breadcrumb maxItems={2} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#"><div>Test1</div></Link>, 
      <Link underline="hover" color="inherit" href="#"><div>Test2</div></Link>,
      <Link underline="hover" color="inherit" href="#"><div>Test3</div></Link>,
      <Typography color="text.primary"><div>Test4</div></Typography>
    </Breadcrumb>],
  separator: "/"
}
