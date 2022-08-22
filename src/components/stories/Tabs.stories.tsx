import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { template } from '@babel/core';
import Tabs from 'components/Tabs';

const TabsListDetails = [
    {
      label: "IPHONE",
      index: "1",
      description: "IPHONE IS COSTLY"
    },
    {
      label: "ONE PLUS",
      index: "2",
      description: "ONE PLUS IS NOT BAD"
    },
    {
      label: "NOTHING",
      index: "3",
      description: "DON'T BUY THIS"
    },
    {
      label: "REDMI",
      index: "4",
      description: "I AM VERY CHEAP",
    },
    
  ];

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
            label: "IPHONE",
            index: "1",
            description: "IPHONE IS COSTLY"
          },
          {
            label: "ONE PLUS",
            index: "2",
            description: "ONE PLUS IS NOT BAD"
          }
      ],
      color:'red',
      bgColor:'black',
      indicatorColor:'black'
     
}