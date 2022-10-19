import React, { ReactNode, useState, memo } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useMediaQuery } from '@mui/material';

type TabsList = {
  label: string;
  index: string;
  component: string | any;
  disabled?: boolean;
  icon?: any;
};
type TabsProps = {
  tabs: TabsList[];
  color?: string;
  labelColor?: string;
  indicatorColor?: string;
  orientation?: string;
};

function Tabs(props: TabsProps) {
  const activeStyle = {
    backgroundColor: props.color,
    color: props.labelColor,
  };
  const disableStyle = {
    backgroundColor: 'grey',
    color: props.labelColor,
  };

  const vertical = {
    display: 'flex',
  };
  const tabWidth = {
    width: '25vw',
  };

  const nmWidth = {
    width: '100vw',
  };

  const horizontal = {
    display: 'inline',
  };

  const isXs = useMediaQuery('(max-width:600px)');
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          maxWidth: {
            xs: 320,
            sm: 480,
            md: 900,
            lg: 1200,
          },
        }}
        style={props.orientation === 'vertical' ? vertical : horizontal}
      >
        <TabList
          style={props.orientation === 'vertical' ? tabWidth : nmWidth}
          orientation={
            props.orientation === 'vertical' ? 'vertical' : 'horizontal'
          }
          aria-label="tabs example"
          onChange={handleChange}
          variant={isXs ? 'scrollable' : 'fullWidth'}
          scrollButtons
          TabIndicatorProps={{ style: { background: props.indicatorColor } }}
        >
          {props.tabs.map((x): any => (
            <Tab
              aria-label={x.label}
              icon={x.icon}
              iconPosition="start"
              style={x.disabled ? disableStyle : activeStyle}
              disabled={x.disabled}
              label={x.label}
              value={x.index}
            />
          ))}
        </TabList>

        {props.tabs.map((y): any => (
          <TabPanel
            aria-labelledby={`mui-tab-${y.index}`}
            id={`tab-${y.index}`}
            value={y.index}
          >
            {y.component}
          </TabPanel>
        ))}
      </Box>
    </TabContext>
  );
}
export default memo(Tabs);
