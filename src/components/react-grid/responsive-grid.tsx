import Box from '@mui/material/Box';
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './responsive.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridProps {
  backgroundColor ? :string ;
  label ? :string ;
  border ?:boolean;
  borderless?: boolean
}

 function ResponsiveGrid({backgroundColor,label,border,...props}:GridProps) {
  const borderless = border ? "bordergrid" : "borderlessgrid"
  const layout = [
    { i: 'a', x: 0, y: 3, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 1 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];
  function onBreakpointChange(newBreakpoint: any, newCols: any) {
    console.log(
      `Breakpoint : ${newBreakpoint},  columns: ${newCols}`
    );
  }
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onBreakpointChange={onBreakpointChange}
    >
      <div key="a" className = {borderless}>
     
        <Box style={{backgroundColor}}  sx={{ width: 1, height: 1, bgcolor: 'skyblue' }}  />
      </div>
      <div key="b">
  
        <Box style={{backgroundColor}} sx={{ width: 1, height: 1, bgcolor: 'skyblue' }} />
      </div>
      <div key="c">
      
        <Box style={{backgroundColor}} sx={{ width: 1, height: 1, bgcolor: 'skyblue' }} />
      </div>
    </ResponsiveGridLayout>
  );
}

export default ResponsiveGrid
