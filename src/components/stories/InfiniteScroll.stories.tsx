import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InfiniteScroll from 'components/InfiniteScroll';

function Infy(props: any) {
  const [data, setData] = useState([{ "id": "5001", "type": "None" },
  { "id": "5002", "type": "Glazed" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "5006", "type": "Chocolate with Sprinkles" },
  { "id": "5003", "type": "Chocolate" },
  { "id": "5004", "type": "Maple" },
  { "id": "1001", "type": "Regular" },
  { "id": "1002", "type": "Chocolate" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "1003", "type": "Blueberry" },
  { "id": "1004", "type": "Devil's Food" },
  { "id": "5005", "type": "Sugar" },
  { "id": "5007", "type": "Powdered Sugar" },
  { "id": "5006", "type": "Chocolate with Sprinkles" }])
  const testData = []
  for (let i = 0; i < data.length; i++) {
    testData.push(<>
        <div>
           <span>
             {data[i].id} ------------------ {data[i].type}
           </span>
         </div>
     </>)
  } 
  const [ list, setList ] = useState(testData)
  const [loading, setLoading] = useState(false)
  const updateRecords = () => {
     const count=2
    setLoading(true)
    setTimeout(() => {
      const test = [...data]
    const data1 = [...list]
    for (let i = 0; i < data.length*count; i++) {
      test.push(data[1])
      data1.push(<>
          <div>
             <span>
               {i} ------------------ 
             </span>
           </div>
       </>)
    } 
    setList(data1);
    setData(test);
    setLoading(false)}, 2000);
    
  }
  return (
    <div>
      <div style={{ height:"200px", overflow: "scroll" }}>
        <InfiniteScroll records={list} setRecords={updateRecords} isLoading={loading} loadingText={''} end={false} endText={''} />
      </div>
    </div>
  );
}

export default {
  title: 'InfiniteScroll',
  show: true,

  onClose: () => { }
} as ComponentMeta<typeof Infy>;


/* let list = [...testData]
 */

const Template: ComponentStory<typeof Infy> = (args) => <Infy {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  // records: [<div>Test</div>]
}