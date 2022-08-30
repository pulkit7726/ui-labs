import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from 'components/Tabs';
import HouseIcon from '@mui/icons-material/House';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import ContactsIcon from '@mui/icons-material/Contacts';

export default {
    title: 'Tabs',
    component: Tabs,
    parameters: {
      layout: 'fullscreen',
    },
    argTypes: {
      orientation: {
        options: ['horizontal','vertical'],
        control: {type:"radio"}
      }
    }
  } as ComponentMeta<typeof Tabs>;
const TABSLIST =  [
  {
      label: "TAB1",
      index: "1",
      component: "Tab1 details"
    },
    {
      label: "TAB2",
      index: "2",
      component: "Tab2 details"
    },
    {
      label: "TAB3",
      index: "3",
      component: "Tab3 details"
    },
    {
      label: "TAB4",
      index: "4",
      component: "Tab2 details"
    },
]

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsList = Template.bind({});
TabsList.args= {
      tabs:TABSLIST,
      color:'#00abff',
      labelColor:'black',
      indicatorColor:'black',
      orientation:'horizontal',
}

export const SecondaryList = Template.bind({});
SecondaryList.args = {
  tabs:[
    {
      label: "HOME",
      index: "1",
      component: "Home details",
      icon: <HouseIcon/>,
    },
    {
      label: "ABOUT",
      index: "2",
      component: "About details",
      icon: <InfoIcon/>,
    },
    {
      label: "LOGIN",
      index: "3",
      component: "Login details",
      icon: <LoginIcon/>,
    },
    {
      label: "CONTACT",
      index: "4",
      component: "Contact details",
      icon: <ContactsIcon/>,
    },
  ],
  color:'#ff00c7',
  labelColor:'black',
  indicatorColor:'black',
}

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  tabs:[{
    label: "TAB1",
    index: "1",
    component: "Tab1 details"
  },
  {
    label: "TAB2",
    index: "2",
    component: "Tab2 details"
  },
  {
    label: "TAB3",
    index: "3",
    component: "Tab3 details"
  },
  {
    label: "TAB4",
    index: "4",
    component: "Tab4 details"
  },
  {
    label: "TAB5",
    index: "5",
    component: "Tab5 details"
  },
  {
    label: "TAB6",
    index: "6",
    component: "Tab6 details"
  },
  {
    label: "TAB7",
    index: "7",
    component: "Tab7 details"
  },
],
  orientation:'vertical',
}