import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type LoderProps={
  size?:number,
  color?:'inherit'| 'primary' | 'secondary' | 'error' | 'info'  | 'success'  | 'warning',
  variant: 'determinate' | 'indeterminate',
  value:number,
}

 const Loader =({size,color,variant,value}: LoderProps) => {

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress 
      data-testid="circle-progress"
      size = {size} 
      color={color} 
      variant= {variant}
      value ={value===101?progress:value} 
       />
       {value===101 && <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
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

export default Loader;