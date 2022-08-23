import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { template } from '@babel/core';
import Tabs from 'components/Tabs';

export default {
    title: 'Example/Tabs',
    component: Tabs,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsList = Template.bind({});
TabsList.args= {
      tabs: [
        {
            label: "TAB1",
            index: "1",
            description: "Tab1 details"
          },
          {
            label: "TAB2",
            index: "2",
            description: "Tab2 details"
          },
          {
            label: "TAB3",
            index: "3",
            description: "Tab3 details"
          },

      ],
      color:'#00abff',
      labelColor:'black',
      indicatorColor:'black'
     
}