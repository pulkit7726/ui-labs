import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { HeaderProps } from './UserProfileInterface';

const StyledAvtar = styled(Avatar)(({ theme }) => ({
  width: '100px',
  height: '100px',

}));

const Footer = ({...props}) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          justifyContent: props.alContent === 'center' ? 'center' :
          props.alContent === 'right' ? 'right' : 'left',
          display: 'flex',
          marginTop: '20px'
        }}>
          <Button color="primary" variant="outlined">My Account</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" variant="outlined" >Logout</Button>
      </Box>
    </>
  )
}

export default Footer;