import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TradingChart from 'components/TradingChart';


export default {
    title: 'Functional/TradingChart',
    show: true,
    onClose: () => { }
  } as ComponentMeta<typeof TradingChart>;
  const Template: ComponentStory<typeof TradingChart> = (args) => <TradingChart {...args} />;

  export const Chart = Template.bind({});

  Chart.args={
    theme:"dark"
  }