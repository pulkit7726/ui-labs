import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TradingChart from 'components/TradingChart';

export default {
  title: 'Functional/TradingChart',
  show: true,
  onClose: () => {},
} as ComponentMeta<typeof TradingChart>;
const Template: ComponentStory<typeof TradingChart> = args => (
  <TradingChart {...args} />
);

export const TradingChartComponent = Template.bind({});
TradingChartComponent.args = {
  chartTitle: 'Google vs Microsoft Changes',
  subtitle: 'Between 2013 and 2017',
  yAxisMode: 'PercentChange',
  yAxisTitle: 'Percent Changed',
  chartType: 'Line',
  thickness: 2,
};
