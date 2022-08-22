import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { memo } from 'react';

// const TabsListDetails = [
//     {
//       label: "IPHONE",
//       index: "1",
//       description: "IPHONE IS COSTLY"
//     },
//     {
//       label: "ONE PLUS",
//       index: "2",
//       description: "ONE PLUS IS NOT BAD"
//     },
//     {
//       label: "NOTHING",
//       index: "3",
//       description: "DON'T BUY THIS"
//     },
//     {
//       label: "REDMI",
//       index: "4",
//       description: "I AM VERY CHEAP",
//     },
    
//   ];

  type TabsList = {
    label: string;
    index: string;
    description?: string;
    active?: any
  }
  type TabsProps = {
    tabs: TabsList[],
    color?: string;
    bgColor?: string;
    indicatorColor?: string;
  }
  
  function Tabs(props: TabsProps) {
    const [value, setValue] = useState('1');
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant="fullWidth" TabIndicatorProps={{ style: { background: props.indicatorColor } }}>
              {props.tabs.map((x): any => {
                return <Tab style={{ backgroundColor: props.color, color: props.bgColor }} disabled={x.active} label={x.label} value={x.index} />
              })}
            </TabList>
          </Box>
          {props.tabs.map((y): any => {
            return <TabPanel value={y.index}>{y.description}</TabPanel>
          })}
        </TabContext>
      </Box>
    );
  }
  export default memo(Tabs);