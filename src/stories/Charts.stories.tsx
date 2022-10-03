import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Charts from 'components/Charts';

export default {
    title: 'Charts',
    show: true,
    onClose: () => { }
  } as ComponentMeta<typeof Charts>;
  const Template: ComponentStory<typeof Charts> = (args) => <Charts {...args} />;

  export const Line = Template.bind({});
  const LineData = [
    {
        product:"Iphone",
        units:500
    },  {
        product:"Samsung",
        units:100
    },{
        product:"Nokia",
        units:1200
    }
  ];
  Line.args = {
    type:"Line",
    data:LineData,
    strokeDasharray:"3 3",
    XAxisDataKey:"product",
    lineDataKey:"units",
    legend:true,
    tooltip:true
  }

  export const Bar = Template.bind({});
  const BarData = [
    {
        product:"Iphone",
        units:500,
        id:1
    },  {
        product:"Samsung",
        units:-100,
        id:2
    }, {
      product:"Nokia",
      units:-500,
      id:3
  }, {
    product:"RedMe",
    units:50,
    id:4
}
  ];
  Bar.args = {
    type:"Bar",
    data:BarData,
    strokeDasharray:"3 3",
    XAxisDataKey:"product",
    lineDataKey:"units",
    legend:true,
    tooltip:true,
    hasnegativeValues:true,
  }
  
  export const Pie = Template.bind({});

  const PieData=[
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
]
  Pie.args = {
    type:"Pie",
    data:PieData,
    lineDataKey:"value",
    legend:true,
    tooltip:true,
    colors : ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  }
  
  export const Dounut = Template.bind({});

  const DounutData=[
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
]
Dounut.args = {
    type:"Dounut",
    data:DounutData,
    lineDataKey:"value",
    legend:true,
    tooltip:true,
    colors : ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  }

  export const Area = Template.bind({});

  const AreaData=[
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
]
Area.args = {
    type:"Area",
    data:AreaData,
    lineDataKey:"value",
    XAxisDataKey:"name",
    legend:true,
    tooltip:true,
  }
  
  export const Candlestick = Template.bind({});

  const CandlestickData=[
    ["Day", "", "", "", ""],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 77, 77, 66, 50],
    ["Fri", 68, 66, 22, 15],
]
const options = {
  legend: "none",
  bar: { groupWidth: "5%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

Candlestick.args = {
  type:"CandlestickChart",
    options:options,
    data:CandlestickData,
  }
  
