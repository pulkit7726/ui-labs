import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type LoderProps={
  color?:'inherit'| 'primary' | 'secondary' | 'error' | 'info'  | 'success'  | 'warning',
  variant: 'determinate' | 'indeterminate' | 'buffer',
  value:number,
}

 const Linear =({color,variant,value}: LoderProps) => {

    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
  
    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);


  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
      <LinearProgress 
      data-testid="linear-progress"
      color={color} 
      variant= {variant}
      value ={value===101?progress:value} 
      valueBuffer={buffer}
       />
        </Box>
       {value===101 && <Box
        sx={{ minWidth: 35 }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(progress)}%`}</Typography>
      </Box>}
    </Box>
  );
}

export default Linear;