import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResponsiveGrid from 'components/react-grid/responsive-grid';

export default {
    title:'ResizeableGrid',
    component: ResponsiveGrid,
    parameters: {
        layout: "fullscreen",
      },
    
} as ComponentMeta<typeof ResponsiveGrid>


const Template: ComponentStory<typeof ResponsiveGrid> = (args) => (

      <ResponsiveGrid {...args} />
  );

export const ResponsiveGridLayout = Template.bind({})
ResponsiveGridLayout.args={
    label:'',
    borderless:false,
}